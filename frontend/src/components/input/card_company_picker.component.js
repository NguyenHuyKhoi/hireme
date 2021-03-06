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
    constructor(props){
        super(props);
        this.state={
            value:this.props.value
        };

        //initial value :s
        if (!this.props.disabled){
            this.props.onChange(this.props.value)
        }
    }

    render(){
        const value=this.state.value;

        const disabled=this.props.disabled;
        return (
            <div style={styles.container}>
                {
                    CARD_COMPANIES_DOMAIN.map((item,index)=>
                        <img 
                            key={''+index}
                            src={card_logo[index]} 
                            onClick={()=>{
                                if (disabled) return;
                                this.setState({
                                    value:item.code
                                })
                                this.props.onChange(item.code)
                            }}
                            style={{...styles.logo,
                                opacity:item.code!==value?0.1:1
                                }}/>    
                            )
                        }
                </div>
        )
    }
}

const styles={
    container:{
        width:'100%',
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logo:{
        width:60,
        height:40,
    }
}

