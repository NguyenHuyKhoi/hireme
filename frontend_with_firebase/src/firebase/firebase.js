import firebase from '../firebase/config';
import { HOURLY_RATE_DOMAIN } from '../utils/constants';

class Firebase {

    constructor(){
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
            await this.setupFreelancerProfile(key)
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
    setupFreelancerProfile=async (id)=>{
        await this.freelancerRef.child(id)
            .set({
                id:id,
                hourly_rate:HOURLY_RATE_DOMAIN[0],
                tagline:'',
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

    // output :{account ,profile}
    getSettingUser=async (type,id)=>{

        console.log('firebase getSettingUser begin  ',type,id)
        let output={};
        await this.userRef.child(id).once('value')
            .then (snapshot=>{
                output.account=snapshot.val();
        });

        let ref=type==='freelancer'?this.freelancerRef:this.companyRef

        await ref.child(id).once('value')
            .then (snapshot=>{
                output.profile=snapshot.val();
            });
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

        console.log('firebase postTask begin :',data)


        var key=await this.taskRef.push().key;

        await this.taskRef.child(key).update({
            ...data,
            post_time:new Date(),
            company_id,
            state:'bidding'
        });

        console.log('firebase postTask exist  :')

    }
}

const obj = new Firebase();
export default obj;
