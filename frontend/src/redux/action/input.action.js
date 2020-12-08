import {inputAction}from '../constant/input.constant'


export const inputAField=(obj)=>{
 //   console.log('Get obj on input_action :',obj);
	return {
		type:inputAction.INPUT_A_FIELD,
		payload:obj
	}
}




