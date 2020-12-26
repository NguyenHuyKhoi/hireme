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
        const time=new Date(transaction.time)
        const amount=transaction.amount;
        const task=transaction.task;
        const partner=transaction.partner
        const card=transaction.card

        if (card!==undefined)
        console.log('card_company :',card.card_company)
        return (
            <div style={styles.container}>
    
                <div style={{...styles.col1,
                    backgroundColor: this.props.index%2==0?GREEN_1:RED_1}}/>


                <div style={styles.col2}>
                    <div style={styles.time_container}>
                        <text style={styles.time_day}>
                            {time.getDay()}
                        </text>
                        <text style={styles.time_month}>
                            {monthNames[time.getMonth()]}
                        </text>
                    </div>
                </div>

                <div style={styles.col3}>
                    <text style={styles.title}>
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

                    <div style={styles.address}>
                        <text style={styles.from_text}>
                            {
                                transaction.amount>0?
                                'From : '
                                :
                                'To : '
                            }
                        </text>
                        {
                            card!==undefined?
                            <div style={styles.address_infor}>
                                {/* <img style={styles.card_logo} src={card_logo[card.card_company]}/> */}

                                <text style={styles.address_text}>
                                    {card.number}
                                </text>
                               
                            </div>
                            :
                            <div style={styles.address_infor}>
                                {/* <img style={styles.avatar} src={partner.avatar}/> */}

                                <text style={styles.address_text}>
                                    {partner.name}
                                </text>
                            
                            </div>
                        }
                    </div>
                   
                       
                  
                </div>

                <div style={styles.col4}>
                    <text style={{...styles.amount_text,
                                color:amount>0?GREEN_1:RED_1}}>
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

const styles={
    container:{
        marginBottom:15,
        borderRadius:5,
        display: 'flex',
        flexDirection: 'row',
        flex:1,
        height:95,
        backgroundColor:GRAY_3
    },
    col1:{
        width:5,
        height:'100%',
        borderRadius:5
    },
    col2:{
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    time_container:{
        width:'50%',
        aspectRatio:1,
        borderRadius:5, 
        backgroundColor: WHITE,
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'column'
    },
    time_day:{
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK
    },
    time_month:{
        fontSize:TEXT_SIZES.SMALL,
        color:GRAY_2
    },
    col3:{
        display:'flex',
        flex:3,
        flexDirection:'column',
        justifyContent:'center'
    },
    title:{
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK,
        fontWeight:'bold'
    },
    address:{
        display:'flex',
        flexDirection:'row',
        marginTop:10,
        alignItems:'center'
    },
    from_text:{
        fontSize:TEXT_SIZES.SMALL,
        color:GRAY_2
    },
    address_infor:{
        marginLeft:15,
        flex:1,
        flexDirection:'row',
        display:'flex',
        alignItems:'center'
    },
    card_logo:{
        width:40,
        height:30
    },
    address_text:{
        fontSize:TEXT_SIZES.NORMAL,
        color:GRAY_2,
        marginLeft:10
    },
    avatar:{
        width:30,
        height:30,
        borderRadius:15
    },
    col4:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    amount_text:{
        fontSize:TEXT_SIZES.BIG
    }
}
