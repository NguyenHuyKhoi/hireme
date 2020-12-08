//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, GRAY_1, GRAY_3, WHITE } from '../../utils/palette'
import {connect }from 'react-redux'
import * as actions from '../../redux/action/input.action'

 class TextareaInputComponent extends Component {
    render(){
        const input_field=this.props.input_field;
        console.log('input_field of TextareaInputComponent:',input_field)

        return (
            <div style={{display:'flex',width:'100%',height:240,alignSelf:'baseline',
                flexDirection: 'column'}}>
                <text style={{fontSize:textSizes.NORMAL,color:BLACK}}>
                    {this.props.label}
                </text> 
                <textarea 
                    type={input_field.type!==undefined?input_field.type:'text'} 
                    onChange={e=>this.props.inputAField({[input_field.key]:e.target.value})}
                    style={{marginTop:20,flex:1,padding:10,backgroundColor: WHITE,
                        fontSize:textSizes.NORMAL,
                        borderColor:GRAY_3,borderWidth:2,borderRadius:10}}
                        placeholder={this.props.placeholder}
                        color={GRAY_1}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
	input_store: state.input_store
});




export default connect(mapStateToProps,actions)(TextareaInputComponent)