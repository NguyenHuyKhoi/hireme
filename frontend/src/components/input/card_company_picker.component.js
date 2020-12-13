//import from library 
import React, {Component} from 'react'
import { CARD_COMPANIES_DOMAIN, TEXT_SIZES } from '../../utils/constants'
import { BLACK, GRAY_3, GRAY_4, WHITE } from '../../utils/palette'
import ButtonComponent from '../common/button.component'

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

export default class CardCompanyPickerComponent extends Component {

    render(){
        const value=this.props.value;
        return (
            <div style={{width:'100%',display: 'flex', flexDirection: 'row',justifyContent: 'space-between'}}>
                {
                    CARD_COMPANIES_DOMAIN.map((item,index)=>
                        <img 
                            key={''+index}
                            src={card_logo[index]} 
                            onClick={()=>{
                                this.props.onChange(item.code)
                            }}
                            style={{width:60,height:40,
                            opacity:item.code!==value?0.1:1
                        }}/>    
                            )
                        }
                </div>
        )
    }
}
