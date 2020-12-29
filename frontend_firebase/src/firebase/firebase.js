import firebase from '../firebase/config';
import { CATEGORIES_DOMAIN, HOURLY_RATE_DOMAIN } from '../utils/constants';
import { toArray } from '../utils/helper';

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
            if (data.password===item.password && data.email===item.email){
                user_infor=item;
            };
        });
        return user_infor;
        
    }



    // output :{account ,profile}
    getSettingUser=async (type,id)=>{

        console.log('firebase getSettingUser begin  ',type,id)
        let output={
            account:await this.get('/user/'+id),
            profile:await this.get('/'+type+'/'+id)
        };
        console.log('firebase getSettingUser output',output);
        return output;
    }

    // input :id,data:{account ,profile}
    updateSettingUser=async (type,id,data)=>{
        let output={};
        console.log('firebase updateSettingUser begin',type,id,data);
        await this.update('/user/'+id,data.account);

        await this.update('/'+type+'/'+id,data.profile);
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
            post_time:(new Date()).toDateString(),
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
        console.log('firebase searchTask begin :',filter)
        let arr=toArray(await this.get('task','') );

        console.log('firebase searchTask get :',arr)
        return arr;
    }

    searchFreelancer=async (filter)=>{
        console.log('firebase searchFreelancer begin :',filter)
        let arr=toArray(await this.get('freelancer',''));
        console.log('firebase searchFreelancer get :',arr)
        return arr;
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
        await firebase.storage().ref(path+id+'.jpg').put(file)  
            .then(snapshot=>snapshot.ref.getDownloadURL())
            .then (downloadUrl =>{
                console.log('uploadFile Download_url',downloadUrl);
                url=downloadUrl
            });
        
        console.log('uploadFile end:',url)

        return url; 
    }

}

const obj = new Firebase();
export default obj;
