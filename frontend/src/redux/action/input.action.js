import {inputAction}from '../constant/input.constant'


export const inputAField=(obj)=>{
    console.log('inputAField :',obj);
	return {
		type:inputAction.INPUT_A_FIELD,
		payload:obj
	}
}




