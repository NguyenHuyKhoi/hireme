//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK, GRAY_2, GRAY_4, GRAY_5, GREEN_1, WHITE, YELLOW_1 } from '../../utils/palette'
import ButtonComponent from '../common/button.component'
import HeaderListComponent from '../common/header_list.component'

import LabeledInputComponent from '../input/labeled_input.component'
import LabeledSelectedInputComponent from '../input/labeled_selected_input.component'


export default class BalanceCardComponent extends Component {
   
    findCreditCard=(value)=>{
        if (value===undefined) return ;
        const arr=this.props.credit_cards;
        let credit_card=arr.filter(item=>item.number===value)[0];
        this.props.updateInputs('credit_card_id',credit_card.id);
        this.props.updateInputs('credit_card_list_id',credit_card.credit_card_list_id);
    }

    render(){
        const balance=this.props.balance
        const credit_cards=this.props.credit_cards;
        return (
            <div style={styles.container}>

                <HeaderListComponent title='Balance' height={40}/>

                <div style={styles.body}>

                    <div style={styles.balance_card}>

                        <text style={styles.title}>
                            Current Account
                        </text>
                        <text style={styles.balance}>
                            {'$'+balance}
                        </text>

                    
                        <div style={styles.field_container}>
                            <div style={{flex:3}}>
                                <LabeledInputComponent 
                                    onChange={(value)=>this.props.updateInputs('amount',value)}
                                    label='Amount'
                                  />
                            </div>

                            <div style={{flex:0.5}}/>

                            <div style={{flex:7}}>
                                {
                                    credit_cards.length>0?
                                    <LabeledSelectedInputComponent
                                        label='Choose cards:'
                                        onChange={()=>this.findCreditCard}
                                        domain={credit_cards.map(item=>item.number)}
                                        />
                                    :
                                    <text style={{fontSize: TEXT_SIZES.NORMAL,color:BLACK}}>
                                        You have no credit card, please insert one.
                                    </text>
                                }
                             
                            </div>
                            
                            <div style={{flex:0.5}}/>

                            <div style={{flex:5}}>
                                    <LabeledSelectedInputComponent
                                        label='Type:'
                                        onChange={(value)=>this.props.updateInputs('type',value)}
                                        domain={['withdraw','recharge']}
                                        />
                            </div>
                          
                        </div>

                        <div style={styles.btn_container}>
                            <div style={{width: '20%'}}>
                                <ButtonComponent 
                                    onClick={this.props.transaction}
                                    label='Transaction' color={GREEN_1}/>
                            </div>

                        </div>
                    </div>
                </div>
            
        </div>
   
    )
    }
}

const styles={
    container:{
        backgroundColor:WHITE,
        height:360,
        boxShadow:'3px 5px 3px 3px #707070',
        display:'flex',
        flex:1,
        flexDirection: 'column'
    },
    body:{
        flex:1,
        display:'flex',
        justifyContent: 'center',
        alignItems:'center'
    },
    balance_card:{
        height:'80%',
        width:'70%',
        borderRadius:8,
        backgroundColor:GRAY_4,
        borderWidth:5,borderColor:BLACK,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center'
    },
    title:{
        fontSize:TEXT_SIZES.HEADER,
        color:GRAY_2
    },
    balance:{
        fontSize:TEXT_SIZES.HUGE,
        color:BLACK,
        fontWeight:'bold'
    },
    field_container:{
        width:'90%',
        display:'flex',
        flexDirection:'row'
    },
    btn_container:{
        width:'90%',
        marginTop: 20,
        display:'flex',
        flexDirection:'row',
        justifyContent: 'flex-end'
    }
}


