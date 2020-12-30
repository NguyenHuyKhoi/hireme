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

import firebaseConfig from '../../firebase/config'
class DashBoardPaymentScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            user_id:this.props.user_infor.id
        };
        this.path='/payment/'+this.state.user_id;
    }


    componentDidMount=async()=>{
        await firebaseConfig.database().ref().child('/payment/'+this.state.user_id)
            .on('value',snapshot=>{
                let data=snapshot.val();
                console.log('updatePayment:',data)
                this.setState({
                    payment:{
                        ...data,
                        cards:toArray(data.cards),
                        transactions:toArray(data.transactions)
                    }
                })
            })
     
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

    validateTransaction=(e)=>{
        if (e===undefined) {
            return ('Vui lòng điền đủ các trường!');
        };

        let fields=['amount','card','type'];
        let is_empty=false;
        fields.map(item=>{
            if (e[item]===undefined || e[item]==='') is_empty=true;
        });

        if (is_empty){
            return('Vui lòng điền đủ các trường!');
        };
        return '';
        
    }

    transaction=async ()=>{
        let t=this.state.transaction

       let err_msg= this.validateTransaction(t);
       if (err_msg!=='') {
           alert(err_msg);
           return;
        };

        console.log('paymentType:',t.type)
        let p=this.state.payment;

        let factor=t.type==='Rút tiền'?-1:1;

        let aftBalance=p.balance+t.amount*factor;
        if (aftBalance<0){
            alert('Không thể rút tiền khi số dư tài khoản không đủ.');
            return ;
        }


        await firebase.push(this.path+'/transactions/',
            {
                ...this.state.transaction,
                amount:t.amount*factor,
                time:(new Date()).toISOString()
            });
            
       
        await firebase.set(this.path+'/balance/',aftBalance);

        alert(' Giao dịch thành công!')
    }

    validateCard=(e)=>{
        if (e===undefined) {
            return ('Vui lòng điền đủ các trường!');
        };

        let fields=['company','number','owner_name','expired_date','email','ccv'];
        let is_empty=false;
        fields.map(item=>{
            if (e[item]===undefined || e[item]==='') is_empty=true;
        });

        if (is_empty){
            return('Vui lòng điền đủ các trường!');
        };

        if (!/[0-9]{12}/.test(e.number)){
            return 'Định dạng mã thẻ phải là 12 chữ số'
        }

        if (!/[0-9]{3}/.test(e.ccv)){
            return 'Định dạng số ccv phải là 3 chữ số'
        }
        return '';
        
    }



    createCard=async()=>{
        console.log('dashboard payment createCards:',this.state.card);

        let err_msg=this.validateCard(this.state.card)
        
        if (err_msg!=='') {
            alert(err_msg);
            return ;
        }

        await firebase.push(this.path+'/cards/',this.state.card);
        alert('Thêm thẻ thành công!')
    }

    deleteCard=async(id)=>{
        console.log('dashboard payment deleteCard:',id)
        await firebase.set(this.path+'/cards/'+id, null )
        alert('Xóa thẻ thành công.')
    }

    render(){
        const payment=this.state.payment;

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

