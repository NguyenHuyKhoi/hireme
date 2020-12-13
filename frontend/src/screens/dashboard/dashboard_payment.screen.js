//import from library 
import React, {Component} from 'react'
import ChatComponent from '../../components/chat/chat.component'
import LabeledInputComponent from '../../components/input/labeled_input.component'
import LabeledSelectedInputComponent from '../../components/input/labeled_selected_input.component'
import RangeInputComponent from '../../components/input/range_input.component'
import SidebarComponent from '../../components/common/side_bar.component'
import SkillPickerComponent from '../../components/input/skill_picker.component'
import UploadFilesComponent from '../../components/common/upload_files.component'
import BalanceCardComponent from '../../components/payment/balance_card.component'
import CreditCardListComponent from '../../components/payment/credit_card_list.component'
import TransactionListComponent from '../../components/payment/transaction_list.component'
import { PADDING_BODY_DASHBOARD, SIDEBAR_RATIO } from '../../utils/constants'
import { GRAY_6 } from '../../utils/palette'
import HeaderListComponent from '../../components/common/header_list.component'
import api from '../../sample_db/fake_api_responses.json'
export default class DashBoardPaymentScreen extends Component {
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
    render(){
        const payment=this.state.payment
        return (

            <div style={{width:'100vw',backgroundColor:GRAY_6,
            display:'flex',flexDirection: 'row'}}>

                {/* sidebar */}
                <SidebarComponent/>
                {/* body */}

                <div style={{display:'flex',flex:SIDEBAR_RATIO,
                    padding:PADDING_BODY_DASHBOARD}}>

                    {
                        payment===null?
                        null
                        :
                        <div style={{display:'flex',flex:1,flexDirection: 'column'}}>

                        {/* header */}
                            <HeaderListComponent title='Payment'/>
    
                            <div style={{marginTop:30}}>
                                <CreditCardListComponent credit_cards={payment.credit_cards}/>
                            </div>
                          
                            <div style={{marginTop:60}}>
                                <BalanceCardComponent balance={payment.balance} />
                            </div>
    
                            <div style={{marginTop:60}}>
                                <TransactionListComponent transaction_history={payment.transaction_history}/>
                            </div>
    
                         
    
         
    
                        </div>
                    
                    }
                  
                </div>

     

               
            </div>
            
        )
    }
}
