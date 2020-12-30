import firebase from '../firebase/config';
import { CATEGORIES_DOMAIN, HOURLY_RATE_DOMAIN } from '../utils/constants';
import { hasSameElement, toArray } from '../utils/helper';

class Firebase {

    constructor(){
        this.storageRef=firebase.storage().ref();
        this.dbRef=firebase.database().ref();
    }

    get=async (path)=>{
        console.log('firebase get :',path)
        let obj=null;

        await this.dbRef.child(path).once('value')
            .then(snapshot=>obj=snapshot.val());
        return obj;
    }

    set=async (path,data)=>{
        console.log('firebase set :',path,data)
        await this.dbRef.child(path).set(data);
    };

    update=async (path,data)=>{
        console.log('firebase update :',path,data)
        await this.dbRef.child(path).update(data);
    };

    //path : parent dir :
    push=async (path,data)=>{
        console.log('firebase push :',path,data)
        let key=(await this.dbRef.child(path).push()).key;

        console.log('firebase push key:',key)
        await this.dbRef.child(path+key).set({
            ...data,
            id:key
        });

        return key
    };


    //data :{email,password}
    checkUserExist=async (data) =>{
        let user_is_exist=false;
        console.log('checkUserExist begin :',data)

        let users=toArray(await this.get('/user/'));

        users.map((item)=>{
            if (item.email===data.email) user_is_exist=true;
        });

        return user_is_exist;
    };


    //data :{email,password,type}
    signup=async (data)=>{
        console.log("firebase signup :",data);

        if (await this.checkUserExist(data)){
            alert('Email đã tồn tại, vui lòng chọn email khác.');
            return false 
        };
    

        let username=data.email.substring(0,data.email.search('@'))

        let key=await this.push('/user/',{
                email:data.email,
                password:data.password,
                type:data.type,
                username,
                avatar:''
            });

        if (data.type==='freelancer') {
            await this.setupFreelancerProfile(key,username)
        }
        else {
            await this.setupCompanyProfile(key);
        };

        await this.setupPayment(key);
        return true;
    }

    //param : user_id 
    setupCompanyProfile=async (id)=>{
        await this.set('/company/'+id,({
                id:id,
                company_name:'',
                tagline:'',
                employee_size:'',
                location:'',
                business_area:'',
                website_link:'',
                description:'',
            }))
    }


    //param : user_id 
    setupFreelancerProfile=async (id,username)=>{
        await this.set('/freelancer/'+id,({
                id:id,
                hourly_rate:HOURLY_RATE_DOMAIN[0],
                tagline:'',
                description:'',
                category:CATEGORIES_DOMAIN[0].name
            }))
    }

    setupPayment=async (id)=>{
        await this.set('/payment/'+id,({
            id,
            credit_cards:[],
            balance:0,
            transactions:[]
        }))
    }

    signin=async (data)=>{
        let user_infor=null;
        console.log("firebase signin data_entry:",data);

        let users=toArray(await this.get('/user/'));

        users.map((item)=>{
            if (data.password===item.password 
                && data.email===item.email
                && (item.is_banned===undefined || item.is_banned===false)){
                user_infor=item;
            };
        });
        return user_infor;
        
    }



    // output :{account ,profile}
    getSettingUser=async (type,id)=>{

        console.log('firebase getSettingUser begin  ',type,id)
        let output={
            account:await this.get('/user/'+id)
        };

        if (type!=='admin'){
            output={
                ...output,
                profile:await this.get('/'+type+'/'+id)
            }
        }
        console.log('firebase getSettingUser output',output);
        return output;
    }

    // input :id,data:{account ,profile}
    updateSettingUser=async (type,id,data)=>{
        let output={};
        console.log('firebase updateSettingUser begin',type,id,data);
        await this.update('/user/'+id,data.account);

        if (type!=='admin') {
            await this.update('/'+type+'/'+id,data.profile);
        }
        return output;
    }

    
    //input : data : information of task
    postTask=async (company_id,data)=>{

        console.log('firebase postTask begin :',data);
        var company=await this.get('/company/'+company_id);
        var company_account=await this.get('/user/'+company_id);

        console.log('firebase postTask getData :',company,company_account);
        
        await this.push('/task/',{
            ...data,
            post_time:(new Date()).toISOString(),
            company:{
                id:company.id,
                company_name:company.company_name,
                avatar:company_account.avatar
            },
            state:'bidding'
        });

        console.log('firebase postTask exist  :')
    };

    searchTask=async (filter)=>{
        console.log('firebase searchTask begin :',filter);
        let arr=toArray(await this.get('/task/') );


        console.log('firebase searchTask get :',arr,filter);
        let res=arr.filter(item=>
            (filter.category===undefined || item.category===filter.category)
            && (filter.keyword===undefined || (''+item.description).includes(filter.keyword) || (''+item.task_name).includes(filter.keyword))
            && (filter.skills===undefined || hasSameElement(filter.skills,item.skills))
            && (filter.fixed_price===undefined || (filter.fixed_price[0]<=item.min_budget && item.max_budget<=filter.fixed_price[1]))
        )


        console.log('firebase searchTask end :',res)
        return res;
    }

    searchFreelancer=async (filter)=>{
        console.log('firebase searchFreelancer begin :',filter)
        let arr=toArray(await this.get('/freelancer/'));

        arr=arr.filter(item=>
            (filter.category===undefined || item.category===filter.category)
            && (filter.keyword===undefined || (''+item.description).includes(filter.keyword) || (''+item.tagline).includes(filter.keyword))
            && (filter.skills===undefined || hasSameElement(filter.skills,item.skills))
            && (filter.hourly_rate===undefined || (filter.hourly_rate[0]<=item.hourly_rate && item.hourly_rate<=filter.hourly_rate[1]))
        )
        console.log('firebase searchFreelancer get :',arr);

        let res=await Promise.all(arr.map(async (item)=>{
            let user=await this.get('/user/'+item.id);
            console.log('firebase searchFreelancer fetchUser',user)
            return {
                ...item,
                avatar:user.avatar,
                username:user.username
            }
        }))

        console.log('firebase searchFreelancer afterFetch :',res);
        return res;
    }

    findTaskForFreelancer=async (id)=>{
        console.log('firebase findTaskForFreelancer begin :',id);

        let tasks=toArray(await this.get('/task/'));
        let res=[];

        tasks.map((item)=>{
            if (item.biddings!==undefined) 
                if (item.biddings[id]!==undefined) res.push({
                    id:item.id,
                    task_name:item.task_name,
                    post_time:item.post_time,
                    state:item.state
                })
        });

        console.log('firebase findTaskForFreelancer finish :',res);
        return res;
    }

    findTaskForCompany=async (id)=>{
        console.log('firebase findTaskForCompany begin :',id);

        let tasks=toArray(await this.get('/task/'));
        let res=[];

        tasks.map((item)=>{
            if (item.company!==undefined) 
                if (item.company.id===id) res.push({
                    id:item.id,
                    task_name:item.task_name,
                    post_time:item.post_time,
                    state:item.state
                })
        });

        console.log('firebase findTaskForCompany finish :',res);
        return res;
    }

    uploadFile=async (path,file,id)=>{

        console.log('uploadFile begin:',file,id)

        
        let url ='';
        await firebase.storage().ref(path+id).put(file)  
            .then(snapshot=>snapshot.ref.getDownloadURL())
            .then (downloadUrl =>{
                console.log('uploadFile Download_url',downloadUrl);
                url=downloadUrl
            });
        
        console.log('uploadFile end:',url)

        return url; 
    }


    deleteFile=async (path,id)=>{
        console.log('deleteFile begin:',path,id)

        
        await firebase.storage().ref(path+id).delete()  
            .then(()=> {
                // File deleted successfully
            }).catch(error=> {
                // Uh-oh, an error occurred!
            });
    }

    taskTransact=async (task,action)=>{
        let amount = task.accepted_bidding.budget*action.factor;
        let company=task.company;
        let freelancer=task.accepted_bidding.freelancer;
        let types = action.type;

        await this.update('/task/'+task.id,{state:action.task_state});

        let fBalance=await this.get('/payment/'+freelancer.id+'/balance/');
        console.log('taskTransaction fBalance :',fBalance,fBalance+amount)
        await this.update('/payment/'+freelancer.id,{balance:fBalance+amount})

        let cBalance=await this.get('/payment/'+company.id+'/balance/');
        console.log('taskTransaction cBalance :',cBalance,cBalance-amount)
        await this.update('/payment/'+company.id,{balance:cBalance-amount})

        await this.push('/payment/'+freelancer.id+'/transactions/',{
            amount:amount,
            time:(new Date()).toISOString(),
            type:types[0],
            task:{
                id:task.id,
                name:task.task_name
            },
            partner:{
                id:company.id,
                name:company.company_name,
                avatar:company.avatar
            }
        })

        await this.push('/payment/'+company.id+'/transactions/',{
            amount:-amount,
            time:(new Date()).toISOString(),
            type:types[1],
            task:{
                id:task.id,
                name:task.task_name
            },
            partner:{
                id:freelancer.id,
                name:freelancer.username,
                avatar:freelancer.avatar
            }
        })
 
    }

}

const obj = new Firebase();
export default obj;
