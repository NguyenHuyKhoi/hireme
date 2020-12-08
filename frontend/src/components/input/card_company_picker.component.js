//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, GRAY_3, GRAY_4, WHITE } from '../../utils/palette'
import ButtonComponent from '../common/button.component'

import {connect }from 'react-redux'
import * as actions from '../../redux/action/input.action'

 class CardCompanyPickerComponent extends Component {
    render(){
        const input_field=this.props.input_field;
        console.log('input_field of CardCompanyPickerComponent:',input_field)
        console.log('input_store:',this.props.input_store)
        return (
            <div style={{width:'100%',display: 'flex', flexDirection: 'row',justifyContent: 'space-between'}}>
                {
                    input_field.domain_value.map((item,index)=>
                        <img 
                            key={''+index}
                            src={type.logo} 
                            onClick={()=>{
                                this.props.inputAField({[input_field.key]:item})
                            }}
                            style={{width:60,height:40,
                            //opacity:type.code!==card.card_company?0.1:1
                        }}/>    
                            )
                        }
                </div>
        )
    }
}


const mapStateToProps = state => ({
	input_store: state.input_store
});




export default connect(mapStateToProps,actions)(CardCompanyPickerComponent)
