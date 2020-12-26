import firebase from '../firebase/config';
import { HOURLY_RATE_DOMAIN } from '../utils/constants';

class Firebase {

    constructor(){
        this.rootRef=firebase.database().ref();
        this.userRef=firebase.database().ref('/user/');
        this.companyRef=firebase.database().ref('/company/');
        this.freelancerRef=firebase.database().ref('/freelancer/');
        this.taskRef=firebase.database().ref('/task/');
    }
    //data :{email,password}
    checkUserExist=async (data) =>{
        let user_is_exist=false;
        console.log('checkUserExist begin :',data)

        await this.userRef.once('value')
            .then(snapshot=>{
                snapshot.forEach((childSnapshot) => {
                    var user_id=childSnapshot.key;
                    var user=childSnapshot.val();

                    if (user.email===data.email) user_is_exist=true;
                   // console.log('checkUserExist user_info :',user);
                });
                console.log('checkUserExist finish :')
            });

        console.log('checkUserExist exist  :',user_is_exist)
        return user_is_exist;
    };


    //data :{email,password,type}
    signup=async (data)=>{
        console.log("firebase signup :",data);

        if (await this.checkUserExist(data)){
            alert('User is exist ,please signup with another email !!!');
            return false 
        };
    


        let key=await this.userRef.push().key
        await this.userRef.child(key)
            .set({
                id:key,
                email:data.email,
                password:data.password,
                type:data.type,
                username:'user'+key.substring(0,5)
            });

        if (data.type==='freelancer') {
            await this.setupFreelancerProfile(key,'user'+key.substring(0,5))
        }
        else {
            await this.setupCompanyProfile(key);
        };
        return true;
    }

    //param : user_id 
    setupCompanyProfile=async (id)=>{
        await this.companyRef.child(id)
            .set({
                id:id,
                company_name:'',
                tagline:'',
                employee_size:'',
                location:'',
                business_area:'',
                website_link:'',
                description:'',
                avatar_url:''
            })
    }


    //param : user_id 
    setupFreelancerProfile=async (id,username)=>{
        await this.freelancerRef.child(id)
            .set({
                id:id,
                hourly_rate:HOURLY_RATE_DOMAIN[0],
                tagline:'',
                username,
                description:'',
                category:'',
                avatar_url:''
            })
    }

    signin=async (data)=>{
        let user_infor=null;
        console.log("firebase signin data_entry:",data);
        await this.userRef.once('value')
            .then(snapshot=>{
                snapshot.forEach((childSnapshot)=>{
                    const user=childSnapshot.val();
                    if (data.password===user.password && data.email===user.email){
                        user_infor=user;
                    };
                });

                console.log("firebase signin finish query :");
            });
        console.log("firebase signin exist:",user_infor);
        return user_infor;
        
    }

    get=async (path,id)=>{
        let obj=null;
        let ref=this.rootRef.child(path);
        if (id!=='') ref=ref.child(id)

        await ref.once('value')
            .then(snapshot=>obj=snapshot.val());
        return obj;
    }

    // output :{account ,profile}
    getSettingUser=async (type,id)=>{

        console.log('firebase getSettingUser begin  ',type,id)
        let output={
            account:await this.get('user',id),
            profile:await this.get(type,id)
        };
        console.log('firebase getSettingUser output',output);
        return output;
    }

    // input :id,data:{account ,profile}
    updateSettingUser=async (type,id,data)=>{
        let output={};
        console.log('firebase updateSettingUser begin',type,id,data);
        await this.userRef.child(id).update(data.account)

        let ref=type==='freelancer'?this.freelancerRef:this.companyRef
        await ref.child(id).update(data.profile)
        return output;
    }

    
    //input : data : information of task
    postTask=async (company_id,data)=>{

        console.log('firebase postTask begin :',data);
        var key=await this.taskRef.push().key;

        var company=await this.get('company',company_id);
        
        await this.taskRef.child(key).update({
            ...data,
            id:key,
            post_time:new Date(),
            company:{
                id:company.id,
                company_name:company.company_name,
                avatar_url:company.avatar_url
            },
            state:'bidding'
        });

        console.log('firebase postTask exist  :')
    };

    searchTask=async (filter)=>{
        console.log('firebase searchTask begin :',filter)
        let arr=Object.values(await this.get('task','') );

        console.log('firebase searchTask get :',arr)
        return arr;
    }

    searchFreelancer=async (filter)=>{
        console.log('firebase searchFreelancer begin :',filter)
        let arr=Object.values(await this.get('freelancer',''));
        console.log('firebase searchFreelancer get :',arr)
        return arr;
    }
}

const obj = new Firebase();
export default obj;
