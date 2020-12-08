import {combineReducers} from 'redux';
import {inputReducer} from './input.reducer'

export default combineReducers({
	input_store:inputReducer,
})