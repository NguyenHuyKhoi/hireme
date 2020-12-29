import { INPUT_TYPE } from "./constants"
export class Validate {
    validateEmail=(str)=>{
        if (str.length===0){
            return 'Địa chỉ Email không được để trống. '
        }
        if (str.length<10 || str.length>30){
            return 'Địa chỉ email phải từ 10 đến 30 ký tự.'
        };

        if (!/\S+@\S+\.\S+/.test(str)){
            return 'Địa chỉ email không hợp lệ.'
        };
        return '';
    }
    
    validatePassword=(str)=>{
        if (str.length===0){
            return 'Mật khẩu không được để trống.'
        };
    
    
        if (str.length<6 || str.length>20){
            return 'Địa chỉ email phải từ 6 đến 20 ký tự.'
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
