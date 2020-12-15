//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../common/button.component'

import sample_db from '../../sample_db/fake_api_responses.json'
import HeaderListComponent from '../common/header_list.component'
import PaginationComponent from '../common/pagination.component'
import CreditCardItemComponent from './credit_card_item.component'
import TransactionItemComponent from './transaction_item.component'
import { WHITE } from '../../utils/palette'

let cards=sample_db.get_detail_payment.credit_cards
let new_card={
    number :'',
    owner_name   :'',
    email :'',
    expired_date:'',
    ccv:'',
    card_company:'',
    is_new_card:true
}

cards=[new_card,...cards];
export default class TransactionListComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            first_item_index:0,
            last_item_index:Math.min(4,this.props.transaction_history.length-1)
        }
    }

    switchPage=(l,r)=>{
        this.setState({
            first_item_index:l,
            last_item_index:r
        })
    }

    render(){
        const transaction_history=this.props.transaction_history;
        const l=this.state.first_item_index;
        const r=this.state.last_item_index;
    
        console.log('Tasks :',this.props.tasks,l,r)
        return (
            <div style={styles.container}>

                <HeaderListComponent title='Transaction History' height={40} is_sort={true}/>
                
                <div style={styles.body}>

                    <div style={styles.inner_body}>
            
                        {
                            transaction_history.slice(l,r+1).map((item,index)=>(
                                <TransactionItemComponent 
                                    transaction={item} index={index} key={''+index}/>
                            ))
                        }
                    </div>

                    {/* <div style={{flex:1}}/> */}
                </div>

                
                <PaginationComponent    
                    onClickPage={(l,r)=>this.switchPage(l,r)}
                    items={transaction_history.length} items_per_page={5} />
                

            </div>
        )
    }
}

const styles={

    container:{ 
        display:'flex',
        flex:1,
        flexDirection: 'column',
        backgroundColor: WHITE,
        boxShadow:'3px 5px 3px 3px #707070'
    },
    body:{
        flex:1,
        display: 'flex',
        flexDirection:'row'
    },
    inner_body:{
        display:'flex',
        flex:8,
        flexDirection: 'column'
    }
}
