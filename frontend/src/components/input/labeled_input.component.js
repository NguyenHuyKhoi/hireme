//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK } from '../../utils/palette'

import {connect }from 'react-redux'
import * as actions from '../../redux/action/input.action'
import { convertFullDateToOnlyDay } from '../../utils/helper'
class LabeledInputComponent extends Component {
    constructor(props){
        super(props);
        const input_field=this.props.input_field;
        let value=this.props.value;
        if (value!==undefined){
            console.log('Push into store field :',input_field.key,' value = ',value)
            this.props.inputAField({[input_field.key]:value})
        }
    }


    render(){
        const input_field=this.props.input_field;
        const hide_label=this.props.hide_label!==undefined?this.props.hide_label:false;
        const size=this.props.size!==undefined?this.props.size:textSizes.NORMAL;
        const disabled=this.props.disabled!==undefined?this.props.disabled:false;
        const inline=this.props.inline!==undefined?this.props.inline:false;
        const inputInStore=this.props.input_store[input_field.key];
        return (

            <div style={{display:'flex',width: '100%',
                flexDirection: inline?'row':'column'}}>
                {
                    hide_label?
                    null
                    :
                    <div style={{flex:1}}>
                
                        <text style={{
                            fontSize:size,color:BLACK}}>
                            {input_field.label}
                        </text>
                    </div>
                
                }
              
                <div style={{flex:3}}>
                <input 
                    value={
                            input_field.type!==undefined 
                            && input_field.type==='date' 
                            && inputInStore!==undefined
                            ?
                            convertFullDateToOnlyDay(inputInStore)
                            :
                            inputInStore
                    }
                    disabled={disabled}
                    placeholder={input_field.placeholder}
                    type={input_field.type!==undefined?input_field.type:'text'}
                    onChange={(e)=>this.props.inputAField({[input_field.key]:e.target.value})}
                    style={{
                        width:'100%',height: size===textSizes.NORMAL?30:25,
                        fontSize:size,
                        marginTop:inline?0:15,
                        marginLeft:inline?15:0,
                        border:disabled?'none':'default',
                        outline:disabled?'none':'default'
                    }}
                    />
                </div>
            
            </div>
        )
    }
}

const mapStateToProps = state => ({
	input_store: state.input_store
});




export default connect(mapStateToProps,actions)(LabeledInputComponent)
