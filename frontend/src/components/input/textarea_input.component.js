//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, GRAY_1, GRAY_3, WHITE } from '../../utils/palette'
import {connect }from 'react-redux'
import * as actions from '../../redux/action/input.action'

 class TextareaInputComponent extends Component {
    render(){
        const input_field=this.props.input_field;
        const hide_label=this.props.hide_label!==undefined?this.props.hide_label:false
        console.log('input_field_key:',input_field.key)

        return (
            <div style={{display:'flex',width:'100%',height:240,alignSelf:'baseline',
                flexDirection: 'column'}}>
                {
                    hide_label?
                    null
                    :
                    <text style={{fontSize:textSizes.NORMAL,color:BLACK}}>
                        {input_field.label}
                    </text> 
                }
               
                <textarea 
                    placeholder={input_field.placeholder}
                    type={input_field.type!==undefined?input_field.type:'text'} 
                    onChange={e=>this.props.inputAField({[input_field.key]:e.target.value})}
                    style={{marginTop:20,flex:1,padding:10,backgroundColor: WHITE,
                        fontSize:textSizes.NORMAL,
                        borderColor:GRAY_3,borderWidth:2,borderRadius:10}}
                        color={GRAY_1}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
	input_store: state.input_store
});




export default connect(mapStateToProps,actions)(TextareaInputComponent)