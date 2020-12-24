import { USER_ACTIONS } from "../constant/index.constant";

const initial_user_info={};

let userReducer=(state=initial_user_info,action)=>{
    switch (action.type){
        case USER_ACTIONS.LOGIN_SUCCESS:
            let payload = action.payload;
            let session_id=payload.session_id;
            let user_id=payload.user_id;
            let user_name=payload.user_name;
            let user_type=payload.user_type;
            return {
                ...state,
                session_id,
                user_id,
                user_name,
                user_type
            };
        case USER_ACTIONS.LOGOUT_SUCCESS:
            return initial_user_info;
        default :
            return state;
    }
}

export default userReducer;