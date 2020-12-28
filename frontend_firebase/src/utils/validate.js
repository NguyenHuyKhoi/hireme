import { INPUT_TYPE } from "./constants"
export class Validate {
    validateEmail=(str)=>{
        if (str.length===0){
            return 'Email is empty! '
        }
        if (str.length<10 || str.length>30){
            return 'Email address is too short or too long (10 -> 30 chars)'
        };
        if (!str.endsWith('@gmail.com')){
            return 'Email address is invalid !'
        };
        return '';
    }
    
    validatePassword=(str)=>{
        if (str.length===0){
            return 'Password is empty !'
        };
    
    
        if (str.length<6 || str.length>20){
            return 'Password is too short or too long (6->20 chars)'
        };
        return '';
    };
    
    validateUsername=(str)=>{
       return ''
    }

    validate=(obj)=>{
        console.log('validate :',obj);
        let err_msg='';
        if (obj[INPUT_TYPE.EMAIL]!==undefined) err_msg+= (this.validateEmail(obj[INPUT_TYPE.EMAIL]));
        if (err_msg!=='') return err_msg;
    
        if (obj[INPUT_TYPE.PASSWORD]!==undefined) err_msg+= (this.validatePassword(obj[INPUT_TYPE.PASSWORD]));
        if (err_msg!=='') return err_msg;
    
        if (obj[INPUT_TYPE.USERNAME]!==undefined) err_msg+= (this.validateUsername(obj[INPUT_TYPE.USERNAME]));
        if (err_msg!=='') return err_msg;
    
        return err_msg;
    
    }
}

const obj=new Validate();
export default obj;
