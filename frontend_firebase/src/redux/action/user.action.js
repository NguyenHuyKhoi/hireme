import { USER_ACTIONS } from "../constant/index.constant"


//payload :{id,username,type,email}
export const loginSuccess=(payload)=>{
    console.log('receice_payload:',payload)
    return {
        type:USER_ACTIONS.LOGIN_SUCCESS,
        payload:payload
    }
}

export const logoutSuccess=(payload)=>{
    return {
        type:USER_ACTIONS.LOGOUT_SUCCESS,
        payload:payload
    }
}
