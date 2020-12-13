//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../common/button.component'
import LabelInputComponent from '../input/labeled_input.component'
import CardCompanyPickerComponent from '../input/card_company_picker.component'


import { BLACK, GRAY_2, GRAY_4, GREEN_1, RED_1, WHITE } from '../../utils/palette'
import { textSizes } from '../../utils/constants'
import { inputField } from '../../redux/constant/input.constant'
import { cardCompanies } from '../../redux/constant/domain_value.constant'


export default class CreditCardItemComponent extends Component {
    
    render(){
        const is_new=this.props.is_new!==undefined?this.props.is_new:false;
        const credit_card=this.props.credit_card;
        const index=this.props.index;
        const disabled=is_new?false:true

        console.log('credit_card_item',credit_card,is_new)
        return (
            <div  style={{padding:20,display:'flex',flex:1,flexDirection:'column',
                backgroundColor:index%2==1?WHITE:GRAY_4}}>    

                    <div style={styles.row}>
                        <CardCompanyPickerComponent 
                            value={is_new?cardCompanies[0].code: credit_card.card_company}
                            input_field={inputField.CARD_COMPANY}/>

                        <div 
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
                        <div style={{width:'50%'}}>
                        <LabelInputComponent 
                            size={textSizes.NORMAL}
                            inline={true}
                            value={is_new?'':credit_card.number}
                            disabled={disabled}
                            input_field={inputField.CARD_NUMBER}
                            />
                        </div>
                    </div>
                   
     

                        
                    <div style={styles.row}>
                        <div style={{width:'30%'}}>
                        <LabelInputComponent 
                            size={textSizes.SMALL}
                            disabled={disabled}
                            value={is_new?'':credit_card.owner_name}
                            inline={true}
                            input_field={inputField.CARD_OWNER}
                            />
                        </div>
                        <div style={{width:'5%'}}/>
                        <div style={{width:'5%'}}/>
                        <div style={{width:'30%'}}>
                        <LabelInputComponent 
                            size={textSizes.SMALL}
                            disabled={disabled}
                            inline={true}
                            value={is_new?new Date():credit_card.expired_date}
                            input_field={inputField.CARD_DATE}
                            />
                        </div>

                        <div style={{width:'5%'}}/>

                       
                    </div>
                    <div style={styles.row}>

                        <div style={{width:'30%'}}>
                        <LabelInputComponent 
                            size={textSizes.SMALL}
                            disabled={disabled}
                            inline={true}
                            value={is_new?'':credit_card.email}
                            input_field={inputField.CARD_EMAIL}
                        />
                        </div>
                        <div style={{width:'5%'}}/>
                        <div style={{width:'5%'}}/>
                        <div style={{width:'30%'}}>
                            <LabelInputComponent 
                                size={textSizes.SMALL}
                                disabled={disabled}
                                inline={true}
                                value={is_new?'':credit_card.ccv}
                                input_field={inputField.CARD_CVV}
                                />
                        </div>
                        <div style={{width:'5%'}}/>
                      

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
        marginTop: 3,
        paddingRight: 20
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

