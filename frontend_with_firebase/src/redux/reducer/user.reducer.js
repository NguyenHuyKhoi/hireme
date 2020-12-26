import { USER_ACTIONS } from "../constant/index.constant";

const initial_user_info={};

let userReducer=(state=initial_user_info,action)=>{
    switch (action.type){
        case USER_ACTIONS.LOGIN_SUCCESS:
            console.log('UserReducer loginSuccess:',action.payload)
            return {
                ...state,
                ...action.payload
            };
        case USER_ACTIONS.LOGOUT_SUCCESS:
            return initial_user_info;
        default :
            return state;
    }
}

export default userReducer;