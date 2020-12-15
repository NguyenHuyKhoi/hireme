//import from library 
import React, {Component} from 'react'
import ChatComponent from '../../components/chat/chat.component'
import LabeledSelectedInputComponent from '../../components/input/labeled_selected_input.component'
import RangeInputComponent from '../../components/input/range_input.component'
import SidebarComponent from '../../components/common/side_bar.component'
import SkillPickerComponent from '../../components/input/skill_picker.component'
import BalanceCardComponent from '../../components/payment/balance_card.component'
import CreditCardListComponent from '../../components/payment/credit_card_list.component'
import TransactionListComponent from '../../components/payment/transaction_list.component'
import { PADDING_BODY_DASHBOARD, SIDEBAR_RATIO } from '../../utils/constants'
import { GRAY_6 } from '../../utils/palette'
import HeaderListComponent from '../../components/common/header_list.component'
import api from '../../sample_db/fake_api_responses.json'

import {connect }from 'react-redux'
import * as action from '../../redux/action/user.action'


const TRANSACTION_FIELDS=['credit_card_id','credit_card_list_id','type','amount'];
const CREATE_CREDIT_CARD_FIELDS=['card_company','number','owner_name','email','expired_date','ccv'];

class DashBoardPaymentScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            payment:null
        }
    }

    componentDidMount=()=>{
        this.setState({
            payment:api.get_detail_payment
        })
    }


    updateInputs=async (field,value)=>{
        console.log('update_inputs :',field,value)
        await this.setState({
            [field]:value
        })

     //console.log('filter_now:',JSON.stringify(this.state)) 
    };

    groupInputs=(fields)=>{
        let inputs={};
        let state=this.state;
        let has_field_null=false
        fields.map(item=>{
            if (state[item]===undefined || state[item]==='') has_field_null=true // user haven't yet enter this fields;
            else  inputs[item]=state[item];
        });

        if (has_field_null) return null
        return inputs;
    }



    transaction=()=>{
        const inputs=this.groupInputs(TRANSACTION_FIELDS);
        if (inputs===null){
            alert('Please enter all fields ...')
        }
        else if (inputs.type==='withdraw' && inputs.amount>this.state.payment.balance){
            alert('Can\'t withdraw more than your balance .')
        }
        else {
            alert('Call API create_credit_card_transaction  with body = '+JSON.stringify(inputs))
            //Call_API_Here
                // axios.get(BASE_URL+`/create_credit_card_transaction `,{
                //         data:{
                //             count:20,
                //             filter:this.groupInputs()
                //         }
                //     })
                //     .then(res => {
                //         })
                //         .catch(error => console.log(error));
        }
    }

    createCreditCard=()=>{
        const inputs=this.groupInputs(CREATE_CREDIT_CARD_FIELDS);
        if (inputs===null){
            alert('Please enter all fields ...')
        }
        else if (inputs.number.length!==12){
            alert('Card Number must contain 12 digits...')
        }
        else if ((/^\d+$/.test(inputs.owner_name))){
            alert('Owner Name must not contain any digits ...')
        }

        else if (new Date(inputs.expired_date)<new Date()){
            alert('Expired Date must be in future ...')
        }
        else if (inputs.ccv.length!==3){
            alert('Card Ccv must contain 3 digits....')
        }

        else {
            const body_req={
                user_id:this.props.user_infor.user_id,
                credit_card :inputs
            }
            alert('Call API add_credit_card   with body_request = '+JSON.stringify(body_req))
            //Call_API_Here
                // axios.get(BASE_URL+`/add_credit_card `,{
                //         data:{
                //         }
                //     })
                //     .then(res => {
                //         })
                //         .catch(error => console.log(error));
        }
    }

    deleteCreditCard=(fields)=>{
        const body_req={
            user_id:this.props.user_infor.user_id,
            credit_card_id :fields.credit_card_id,
            credit_card_list_id :fields.credit_card_list_id
        }
        alert('Call API delete_credit_card  with body_request = '+JSON.stringify(body_req))
        //Call_API_Here
            // axios.get(BASE_URL+`/delete_credit_card `,{
            //         data:{
            //         }
            //     })
            //     .then(res => {
            //         })
            //         .catch(error => console.log(error));
    }

    render(){
        const payment=this.state.payment
        return (

            <div style={styles.container}>

                <SidebarComponent/>

                {

                payment===null?
                null
                :
                <div style={styles.body}>


                    <HeaderListComponent title='Payment'/>

                    <div style={{marginTop:30}}>
                        <CreditCardListComponent 
                            createCard={this.createCreditCard}
                            deleteCard={this.deleteCreditCard}
                            updateInputs={this.updateInputs}
                            credit_cards={payment.credit_cards}/>
                    </div>
                    
                    <div style={{marginTop:60}}>
                        <BalanceCardComponent 
                            updateInputs={this.updateInputs}
                            transaction={this.transaction}
                            balance={payment.balance}  
                            credit_cards={payment.credit_cards}/>
                    </div>

                    <div style={{marginTop:60}}>
                        <TransactionListComponent transaction_history={payment.transaction_history}/>
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
        padding:PADDING_BODY_DASHBOARD
    }
}

const mapStateToProps = state => ({
	user_infor: state.user_infor,
});

export default connect(mapStateToProps,action)(DashBoardPaymentScreen)

