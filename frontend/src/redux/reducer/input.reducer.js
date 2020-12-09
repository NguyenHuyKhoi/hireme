
import { categories } from '../constant/domain_value.constant';
import { inputAction, inputField} from '../constant/input.constant';



const inputs=()=>{
	var inputKeys=Object.keys(inputField);
	//console.log('inputField :',inputField);
	//console.log('InputKeys :',inputKeys);
	var initial_state={};

	inputKeys.forEach((item)=>{
	//	console.log('Key foreach:',item);
		if (inputField[item]!==undefined
			&& inputField[item].default_value!==undefined
			&& inputField[item].key!==undefined){
			var key=inputField[item].key;
			initial_state[key]=inputField[item].default_value;
	}
	});

//	console.log('initial_state:',initial_state);

	return initial_state;
}

export const inputReducer = (state=inputs(),action)=>{
    console.log('Action_Payload  :',action.payload);
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