import firebase from '../firebase/config';
import { HOURLY_RATE_DOMAIN } from '../utils/constants';

class Firebase {

    //data :{email,password}
    checkUserExist=async (data) =>{
        let user_is_exist=false;
        console.log('checkUserExist begin :',data)

        await firebase.database().ref('/user').once('value')
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
    
        let timestamp=''+ (new Date()).getTime();
        console.log('firebase signup user_id :',timestamp)

        await firebase.database().ref('/user/'+timestamp)
            .set({
                id:timestamp,
                email:data.email,
                password:data.password,
                type:data.type,
                username:'user'+timestamp.substring(0,5)
            });

        if (data.type==='freelancer') {
            await this.setupFreelancerProfile(timestamp)
        }
        else {
            await this.setupCompanyProfile(timestamp);
        };
        return true;
    }

    //param : user_id 
    setupCompanyProfile=async (id)=>{
        await firebase.database().ref('/company/'+id)
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
    setupCompanyProfile=async (id)=>{
        await firebase.database().ref('/company/'+id)
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
    };


    //param : user_id 
    setupFreelancerProfile=async (id)=>{
        await firebase.database().ref('/freelancer/'+id)
            .set({
                id:id,
                hourly_rate:HOURLY_RATE_DOMAIN[0],
                tagline:'',
                description:'',
                avatar_url:''
            })
    }

    signin=async (data)=>{
        let user_infor=null;
        console.log("firebase signin data_entry:",data);
        await firebase.database().ref('/user').once('value')
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
}

const obj = new Firebase();
export default obj;
