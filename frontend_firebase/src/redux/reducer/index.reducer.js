import {combineReducers} from 'redux';
import userReducer from './user.reducer';

export default combineReducers({
    user_infor:userReducer
})

