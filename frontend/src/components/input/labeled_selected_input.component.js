//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK } from '../../utils/palette'
import {connect }from 'react-redux'
import * as actions from '../../redux/action/input.action'

import Select from 'react-select';
import { inputField } from '../../redux/constant/input.constant'

class LabeledSelectedInputComponent extends Component {
    constructor(props){
        super(props);
        const input_field=this.props.input_field;
        let value=this.props.value;
        if (value!==undefined){
            this.props.inputAField({[input_field.key]:value})
        }
    }

    render(){
        const input_field=this.props.input_field;

        const hide_label=this.props.hide_label!==undefined?this.props.hide_label:false

        let arr=input_field.domain_value;
        const selectOptions=arr.map(item=>{
            return{ value:item,label:item}
        })

        let defaultOption;
        let  inputInStore=this.props.input_store[input_field.key];
        if (inputInStore!==undefined){
            defaultOption={value:inputInStore,label:inputInStore}
        }
        else {
            defaultOption={value:input_field.default_value,label:input_field.default_value}
        }
            
        return (

            <div style={{display:'flex',width: '100%',flexDirection: 'column'}}>
                {
                    hide_label?
                    null
                    :
                    <text style={{fontSize:textSizes.NORMAL,color:BLACK}}>
                        {input_field.label}
                    </text>

                }
                
                <div style={{width:'100%',height:30,
                    marginTop:hide_label?0:15,fontSize:textSizes.NORMAL}}>
                    <Select
                        style={{fontSize:textSizes.SMALL}}
                        defaultValue={defaultOption}
                        onChange={(option)=>{
                            this.props.inputAField({[input_field.key]:option.value})
                        }}
                        options={selectOptions}
                        />
                </div>

               
                
              
            </div>
        )
    }
}

const mapStateToProps = state => ({
	input_store: state.input_store
});




export default connect(mapStateToProps,actions)(LabeledSelectedInputComponent)
