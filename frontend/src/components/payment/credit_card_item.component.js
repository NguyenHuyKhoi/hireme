//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../common/button.component'
import LabelInlineInputComponent from '../input/labeled_inline_input.component'
import CardCompanyPickerComponent from '../input/card_company_picker.component'


import { BLACK, GRAY_2, GRAY_4, GREEN_1, RED_1, WHITE } from '../../utils/palette'
import { textSizes } from '../../utils/constants'
import { inputField } from '../../redux/constant/input.constant'


export default class CreditCardItemComponent extends Component {
    
    render(){
        const card=this.state.card;
        console.log('hello')
        const index=this.props.index
        const disabled=card.is_new_card!==undefined?false:true

        return (
            <div  style={{padding:20,display:'flex',flex:1,flexDirection:'column',
                backgroundColor:index%2==1?WHITE:GRAY_4}}>    

                    <div style={styles.row}>
                        <CardCompanyPickerComponent input_field={inputField.CARD_COMPANY}/>

                        <div 
                            onClick={()=>{
                                if (!disabled) this.createCard()
                                    else this.deleteCard()
                            }}
                            style={{...styles.action_btn,
                                backgroundColor: !disabled?GREEN_1:RED_1}}>
                            <text style={styles.action_btn_label}>
                                {
                                    !disabled?'+':'-'
                                }
                            </text>
                        </div>
                   
                    </div>
                   

                    <div style={{marginTop:10}}>
                        <LabelInlineInputComponent 
                            size={textSizes.NORMAL}
                            disabled={disabled}
                            input_field={inputField.CARD_NUMBER}
                            />
                    </div>
                   
     

                        
                    <div style={styles.row}>

                        
                        <LabelInlineInputComponent 
                            size={textSizes.NORMAL}
                            disabled={disabled}
                            input_field={inputField.CARD_OWNER}
                            />
                        
                        <LabelInlineInputComponent 
                            size={textSizes.NORMAL}
                            disabled={disabled}
                            input_field={inputField.CARD_DATE}
                            />

                       
                    </div>
                    <div style={styles.row}>

                        <LabelInlineInputComponent 
                            size={textSizes.NORMAL}
                            disabled={disabled}
                            input_field={inputField.CARD_EMAIL}
                        />
                        
                        <LabelInlineInputComponent 
                            size={textSizes.NORMAL}
                            disabled={disabled}
                            input_field={inputField.CARD_CVV}
                            />

                    </div> 

                   
            </div>
        )
    }
}

const styles={
    container :{
      

    },
    row  :{
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 3
    },
    action_btn:{
        width: 40,
        height:40,
        marginLeft: 20,
        borderRadius: 5,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
    },
    action_btn_label:{
        fontSize: 35,
        color:'#ffffff',
        textAlign: 'center'
    }
    
    
}

