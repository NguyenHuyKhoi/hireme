
import { inputAction, inputField} from '../constant/input.constant';



const inputs=()=>{
	var inputKeys=Object.keys(inputField);
	console.log('InputKeys :',inputKeys);
	var initial_state={};
	for (var key in inputKeys){
		if (inputField[key].default_value!==undefined){
			initial_state[key]=inputField[key].default_value;
		}
	}
	console.log('initial_state:',initial_state);
	return initial_state;
}

export const inputReducer = (state=inputs(),action)=>{
    console.log('Get obj on input_reducer :',action.payload);
	switch (action.type){
		case inputAction.INPUT_A_FIELD:
			return {
				...state,
				...action.payload
			};

		default:
			return state;
	}
}