//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, GRAY_3, GRAY_4, WHITE } from '../../utils/palette'
import ButtonComponent from '../common/button.component'

import {connect }from 'react-redux'
import * as actions from '../../redux/action/input.action'
import visa_logo from '../../assets/images/visa.PNG'
import master_card_logo from '../../assets/images/master_card.PNG'
import american_express_logo from '../../assets/images/american_express.PNG'
import discover_logo from '../../assets/images/discover.PNG'

const card_logo=[
    visa_logo,
    master_card_logo,
    american_express_logo,
    discover_logo
]

class CardCompanyPickerComponent extends Component {
    render(){
        const input_field=this.props.input_field;
        console.log('card_input_field_key:',input_field)
        return (
            <div style={{width:'100%',display: 'flex', flexDirection: 'row',justifyContent: 'space-between'}}>
                {
                    input_field.domain_value.map((item,index)=>
                        <img 
                            key={''+index}
                            src={card_logo[index]} 
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
