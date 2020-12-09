//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, GRAY_3, GRAY_4, WHITE } from '../../utils/palette'
import ButtonComponent from '../common/button.component'

import {connect }from 'react-redux'
import * as actions from '../../redux/action/input.action'

 class ButtonInputComponent extends Component {
    render(){

        const btn_label=this.props.btn_label;
        const input_field=this.props.input_field;

        console.log('input_field_key:',input_field.key)
        return (
            <div style={{width:'100%',height:60,display:'flex',flexDirection:'row',
                backgroundColor:GRAY_3,
                justifyContent:'space-around',alignItems:'center'}}>

                <input 
                    type={input_field.type!==undefined?input_field.type:'text'}
                    onChange={(e)=>this.props.inputAField({[input_field.key]:e.target.value})}
                    style={{ width:'60%', height:40,backgroundColor: WHITE,
                        paddingLeft:10,fontSize: textSizes.NORMAL,
                        borderColor:GRAY_3,borderWidth: 1}}  
                        placeholder={input_field.placeholder}/>

                <div style={{width: '20%'}}>
                    <ButtonComponent label={btn_label!==undefined?btn_label:'Send'} />
                </div>
          

        </div>
        )
    }
}


const mapStateToProps = state => ({
	input_store: state.input_store
});




export default connect(mapStateToProps,actions)(ButtonInputComponent)
