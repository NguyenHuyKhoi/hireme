//import from library 
import React, {Component} from 'react'
import ChatComponent from '../../components/chat/chat.component'
import LabeledSelectedInputComponent from '../../components/input/labeled_selected_input.component'
import RangeInputComponent from '../../components/input/range_input.component'
import SidebarComponent from '../../components/common/side_bar.component'
import SkillPickerComponent from '../../components/input/skill_picker.component'
import BalanceCardComponent from '../../components/payment/balance_card.component'
import CardListComponent from '../../components/payment/card_list.component'
import TransactionListComponent from '../../components/payment/transaction_list.component'
import { PADDING_BODY_DASHBOARD, SIDEBAR_RATIO } from '../../utils/constants'
import { GRAY_6 } from '../../utils/palette'
import HeaderListComponent from '../../components/common/header_list.component'
import api from '../../sample_db/fake_api_responses.json'

import {connect }from 'react-redux'
import * as action from '../../redux/action/user.action'

import firebase from '../../firebase/firebase'
import { toArray } from '../../utils/helper'

class DashBoardPaymentScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            user_id:this.props.user_infor.id
        };
        this.path='/payment/'+this.state.user_id;
    }


    getPaymentDetail=async ()=>{
        let res=await firebase.get(this.path);
        console.log('getPayment :',res)
        this.setState({
            payment:{
                ...res,
                cards:res.cards===undefined?[]:toArray(res.cards),
                transactions:res.transactions===undefined?[]:toArray(res.transactions)
            }
        })
    };

    componentDidMount=async()=>{
        await this.getPaymentDetail();
     
    }


    updateInputs=async (part,field,value)=>{
        console.log('update_inputs :',field,value)
        await this.setState({
            [part]:{
                ...this.state[part],
                [field]:value
            }
         
        })
    };

    transaction=async ()=>{
        let t=this.state.transaction
        let p=this.state.payment;

        let factor=t.type==='withdraw'?-1:1;
        let aftBalance=p.balance+t.amount*factor;
        if (aftBalance<0){
            alert('Không thể rút tiền khi số dư tài khoản không đủ.');
            return ;
        }


        await firebase.push(this.path+'/transactions/',
            {
                ...this.state.transaction,
                time:(new Date()).toDateString()
            });
            
       
        await firebase.set(this.path+'/balance/',aftBalance);
        await this.getPaymentDetail();

        alert(' Giao dịch thành công!')
    }

    createCard=async()=>{
        console.log('dashboard payment createCards:',this.state.card)
        await firebase.push(this.path+'/cards/',this.state.card);
        await this.getPaymentDetail();

        alert('Thêm thẻ thành công!')
    }

    deleteCard=async(id)=>{
        console.log('dashboard payment deleteCard:',id)
        await firebase.set(this.path+'/cards/'+id, null )
        await this.getPaymentDetail();
        alert('Xóa thẻ thành công.')
    }

    render(){
        const payment=this.state.payment

        if (payment!==undefined) console.log('cards:',payment.cards)
        return (

            <div style={styles.container}>

                <SidebarComponent/>

                {

                payment===undefined?
                null
                :
                <div style={styles.body}>


                    <HeaderListComponent title='Thanh toán'/>

                    <div style={{marginTop:30}}>
                        <CardListComponent 
                            createCard={this.createCard}
                            deleteCard={this.deleteCard}
                            updateInputs={this.updateInputs}
                            cards={payment.cards}/>
                    </div>
                    
                    <div style={{marginTop:60}}>
                        <BalanceCardComponent 
                            updateInputs={this.updateInputs}
                            transaction={this.transaction}
                            balance={payment.balance}  
                            cards={payment.cards}/>
                    </div>

                    <div style={{marginTop:60}}>
                        <TransactionListComponent 
                            transactions={payment.transactions}/>
                    </div>
                
                </div>

                }
               

     

               
            </div>
            
        )
    }
}

const styles={
    container:{
        width:'100vw',
        backgroundColor:GRAY_6,
        display:'flex',
        flexDirection: 'row'
    },
    body:{
        display:'flex',
        flex:SIDEBAR_RATIO,
        padding:PADDING_BODY_DASHBOARD,
        flexDirection: 'column'
    }
}

const mapStateToProps = state => ({
	user_infor: state.user_infor,
});

export default connect(mapStateToProps,action)(DashBoardPaymentScreen)

