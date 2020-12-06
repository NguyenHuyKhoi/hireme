//import from library 
import React, {Component} from 'react'
import ChatComponent from '../../components/chat/chat.component'
import LabeledInputComponent from '../../components/common/labeled_input.component'
import LabeledSelectedInputComponent from '../../components/common/labeled_selected_input.component'
import RangeInputComponent from '../../components/common/range_input.component'
import SidebarComponent from '../../components/common/side_bar.component'
import SkillsPickerComponent from '../../components/common/skills_picker.component'
import UploadFilesComponent from '../../components/common/upload_files.component'
import BalanceCardComponent from '../../components/payment/balance_card.component'
import CreditCardListComponent from '../../components/payment/credit_card_list.component'
import TransactionListComponent from '../../components/payment/transaction_list.component'
import { SIDEBAR_RATIO } from '../../utils/constants'

export default class DashBoardPaymentScreen extends Component {
    render(){
        return (

            <div style={{width:'100vw',backgroundColor: '#392855',
                display:'flex',flexDirection: 'row'}}>

                {/* sidebar */}
                <SidebarComponent/>
                {/* body */}

                <div style={{display:'flex',flex:SIDEBAR_RATIO,
                    paddingLeft:80,paddingRight:80,
                    paddingTop:60,paddingBottom:40,
                    marginBottom:100,
                    backgroundColor: '#902823'}}>

                    <div style={{display:'flex',flex:1,flexDirection: 'column',
                        backgroundColor: '#392753'}}>

                        {/* header */}
                        <div style={{width:'100%',height:40,backgroundColor: '#935335',
                            display:'flex',flexDirection: 'row',alignItems: 'center'}}>
                            <text style={{fontSize:20,color:'#000000',marginLeft:30}}>
                                Payment
                            </text>
                        </div>

                        <CreditCardListComponent/>


                        <BalanceCardComponent/>

                        <TransactionListComponent/>s

                    </div>
                </div>

     

               
            </div>
            
        )
    }
}
