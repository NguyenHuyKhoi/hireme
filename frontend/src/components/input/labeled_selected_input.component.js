//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK } from '../../utils/palette'
import {connect }from 'react-redux'
import * as actions from '../../redux/action/input.action'

import Select from 'react-select';

class LabeledSelectedInputComponent extends Component {
    
    render(){
        const input_field=this.props.input_field;
        const selectOptions=input_field.domain_value.map(item=>{
            return{ value:item,label:item.name}
        })

        const defaultOption={value:input_field.default_value,label:input_field.default_value.name}
        
        console.log('input_field of LabeledSelectedInputComponent:',input_field)
        console.log('input_store:',this.props.input_store)
        return (

            <div style={{display:'flex',width: '100%',flexDirection: 'column'}}>
                <text style={{fontSize:textSizes.NORMAL,color:BLACK}}>
                    {input_field.label}
                </text>

                <div style={{width:'100%',height:30,marginTop:15,fontSize:textSizes.NORMAL}}>
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
