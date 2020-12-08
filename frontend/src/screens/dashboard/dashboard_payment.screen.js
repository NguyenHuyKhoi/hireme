//import from library 
import React, {Component} from 'react'
import ChatComponent from '../../components/chat/chat.component'
import LabeledInputComponent from '../../components/input/labeled_input.component'
import LabeledSelectedInputComponent from '../../components/input/labeled_selected_input.component'
import RangeInputComponent from '../../components/input/range_input.component'
import SidebarComponent from '../../components/common/side_bar.component'
import ListPickerComponent from '../../components/input/list_picker.component'
import UploadFilesComponent from '../../components/common/upload_files.component'
import BalanceCardComponent from '../../components/payment/balance_card.component'
import CreditCardListComponent from '../../components/payment/credit_card_list.component'
import TransactionListComponent from '../../components/payment/transaction_list.component'
import { PADDING_BODY_DASHBOARD, SIDEBAR_RATIO } from '../../utils/constants'
import { GRAY_6 } from '../../utils/palette'
import HeaderListComponent from '../../components/common/header_list.component'

export default class DashBoardPaymentScreen extends Component {
    render(){
        return (

            <div style={{width:'100vw',backgroundColor:GRAY_6,
            display:'flex',flexDirection: 'row'}}>

                {/* sidebar */}
                <SidebarComponent/>
                {/* body */}

                <div style={{display:'flex',flex:SIDEBAR_RATIO,
                    padding:PADDING_BODY_DASHBOARD}}>

                    <div style={{display:'flex',flex:1,flexDirection: 'column'}}>

                    {/* header */}
                        <HeaderListComponent title='Payment'/>

                        <div style={{marginTop:30}}>
                            <CreditCardListComponent/>
                        </div>
                      
                        <div style={{marginTop:60}}>
                            <BalanceCardComponent/>
                        </div>

                        <div style={{marginTop:60}}>
                            <TransactionListComponent/>
                        </div>

                     

     

                    </div>
                </div>

     

               
            </div>
            
        )
    }
}
