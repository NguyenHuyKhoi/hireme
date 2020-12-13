//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK, GRAY_2, GRAY_3, GRAY_4, GREEN_1, RED_1, WHITE } from '../../utils/palette'
import visa from '../../assets/images/visa.PNG'
import master_card from '../../assets/images/master_card.PNG'
import american_express from '../../assets/images/american_express.PNG'
import discover from '../../assets/images/discover.PNG'

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];



const card_logo={
    visa,
    master_card,
    american_express,
    discover
}


export default class TransactionItemComponent extends Component {
    render(){
        const transaction=this.props.transaction
        const date=new Date(transaction.date)
        const amount=transaction.amount;
        const task=transaction.task;
        const partner=transaction.partner
        const credit_card=transaction.credit_card

        if (credit_card!==undefined)
        console.log('card_company :',credit_card.card_company)
        return (
            <div style={{marginBottom:15,borderRadius:5,display: 'flex',flexDirection: 'row',flex:1,height:95,
            backgroundColor:GRAY_3}}>
    
                <div style={{width:5,height:'100%',
                    borderRadius:5,
                    backgroundColor: this.props.index%2==0?GREEN_1:RED_1}}/>


                <div style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div style={{width:'50%',aspectRatio:1,borderRadius:5, 
                        backgroundColor: WHITE,
                        display:'flex',justifyContent: 'center',alignItems:'center',flexDirection:'column'}}>
                        <text style={{fontSize:TEXT_SIZES.NORMAL,color:BLACK}}>
                            {date.getDay()}
                        </text>
                        <text style={{fontSize:TEXT_SIZES.SMALL,color:GRAY_2}}>
                            {monthNames[date.getMonth()]}
                        </text>
                    </div>
                </div>

                <div style={{display:'flex',flex:3,flexDirection:'column',justifyContent:'center'}}>
                    <text style={{fontSize:TEXT_SIZES.NORMAL,color:BLACK,fontWeight:'bold'}}>
                        {
                            transaction.type+' '
                        }
                        {
                            task!==undefined?
                            'on task :'+task.name
                            :
                            ''
                        }
                    </text>

                    <div style={{display:'flex',flexDirection:'row',marginTop:10,alignItems:'center'}}>
                        <text style={{fontSize:TEXT_SIZES.SMALL,color:GRAY_2}}>
                            {
                                transaction.amount>0?
                                'From : '
                                :
                                'To : '
                            }
                        </text>
                        {
                            credit_card!==undefined?
                            <div style={{marginLeft:15,flex:1,flexDirection:'row',display:'flex',
                            alignItems:'center'}}>
                                <img style={{width:40,height:30}} src={card_logo[credit_card.card_company]}/>

                                <text style={{fontSize:TEXT_SIZES.NORMAL,color:GRAY_2,marginLeft:10}}>
                                    {credit_card.number}
                                </text>
                               
                            </div>
                            :
                            <div style={{marginLeft:15,flex:1,flexDirection:'row',display:'flex',
                                alignItems:'center'}}>
                                <img style={{width:30,height:30,borderRadius:15}} src={partner.avatar}/>

                                <text style={{fontSize:TEXT_SIZES.NORMAL,color:GRAY_2,marginLeft:10}}>
                                    {partner.name}
                                </text>
                            
                            </div>
                        }
                    </div>
                   
                       
                  
                </div>

                <div style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center'}}>
                    <text style={{fontSize:TEXT_SIZES.BIG,color:amount>0?GREEN_1:RED_1}}>
                        {
                            amount>0?
                            '+'
                            :
                            ''
                        }
                        {
                            amount+'$'
                        }
                    </text>
                </div>
                
            </div>

     
    
        )
    }
}
