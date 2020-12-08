//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK } from '../../utils/palette'

import {connect }from 'react-redux'
import * as actions from '../../redux/action/input.action'
class LabeledInputComponent extends Component {
    render(){
        const input_field=this.props.input_field;
        console.log('input_field of LabeledInputComponent:',input_field)
        console.log('input_store:',this.props.input_store)
        return (

            <div style={{display:'flex',width: '100%',flexDirection: 'column'}}>
                <text style={{fontSize:textSizes.NORMAL,color:BLACK}}>
                    {input_field.label}
                </text>
                
                <input 
                    type={input_field.type!==undefined?input_field.type:'text'}
                    onChange={(e)=>this.props.inputAField({[input_field.key]:e.target.value})}
                    style={{width:'100%',height:30,marginTop:15,fontSize:textSizes.NORMAL}} placeholder='Computer science'/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
	input_store: state.input_store
});




export default connect(mapStateToProps,actions)(LabeledInputComponent)
