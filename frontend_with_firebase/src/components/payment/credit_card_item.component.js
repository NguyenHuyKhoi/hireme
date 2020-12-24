//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../common/button.component'
import LabelInputComponent from '../input/labeled_input.component'
import CardCompanyPickerComponent from '../input/card_company_picker.component'


import { BLACK, GRAY_2, GRAY_4, GREEN_1, RED_1, WHITE } from '../../utils/palette'
import { TEXT_SIZES } from '../../utils/constants'
import { CARD_COMPANIES_DOMAIN } from '../../utils/constants'


export default class CreditCardItemComponent extends Component {
    
    render(){
        const is_new=this.props.is_new!==undefined?this.props.is_new:false;
        const credit_card=this.props.credit_card;
        const index=this.props.index;
        const disabled=is_new?false:true

        console.log('credit_card_item',credit_card,is_new)
        return (
            <div  style={{...styles.container,
                backgroundColor:index%2==1?WHITE:GRAY_4}}>    

                    <div style={styles.row}>
                        <CardCompanyPickerComponent 
                            disabled={disabled}
                            onChange={value=>this.props.updateInputs('card_company',value)}
                            value={is_new
                                ?
                                CARD_COMPANIES_DOMAIN[0].code
                                : 
                                credit_card.card_company
                            }/>

                        <div 
                            onClick={()=>{
                                if (disabled) //click to delete :
                                    this.props.onClick({
                                        credit_card_id:credit_card.id,
                                        credit_card_list_id: credit_card.credit_card_list_id
                                    })
                                else  this.props.onClick({})}
                            }
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
                                label='Number :'
                                type='number'
                                onChange={value=>this.props.updateInputs('number',value)}
                                size={TEXT_SIZES.NORMAL}
                                inline={true}
                                value={is_new?'':credit_card.number}
                                disabled={disabled} />
                        </div>
                    </div>
                   
     

                        
                    <div style={styles.row}>
                        <div style={{width:'30%'}}>
                        <LabelInputComponent 
                            label='Owner :'
                            onChange={value=>this.props.updateInputs('owner_name',value)}
                            size={TEXT_SIZES.SMALL}
                            disabled={disabled}
                            value={is_new?'':credit_card.owner_name}
                            inline={true}
                      
                            />
                        </div>

                        <div style={{width:'10%'}}/>

                        <div style={{width:'30%'}}>
                            <LabelInputComponent 
                                label='Expired :'
                                onChange={value=>this.props.updateInputs('expired_date',value)}
                                size={TEXT_SIZES.SMALL}
                                disabled={disabled}
                                inline={true}
                                type='date'
                                value={is_new?new Date():credit_card.expired_date}
                        
                                />
                        </div>

                        <div style={{width:'5%'}}/>

                       
                    </div>
                    <div style={styles.row}>

                        <div style={{width:'30%'}}>
                            <LabelInputComponent 
                                label='Email :'
                                onChange={value=>this.props.updateInputs('email',value)}
                                size={TEXT_SIZES.SMALL}
                                disabled={disabled}
                                inline={true}
                                value={is_new?'':credit_card.email}
                        
                            />
                        </div>

                        <div style={{width:'10%'}}/>

                        <div style={{width:'30%'}}>
                            <LabelInputComponent 
                                label='Ccv :'
                                type='number'
                                onChange={value=>this.props.updateInputs('ccv',value)}
                                size={TEXT_SIZES.SMALL}
                                disabled={disabled}
                                inline={true}
                                value={is_new?'':credit_card.ccv}
                      
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
        padding:20,
        display:'flex',
        flex:1,
        flexDirection:'column'
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

