//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../common/button.component'

import sample_db from '../../sample_db/sample_db.json'
import HeaderListComponent from '../common/header_list.component'
import PaginationComponent from '../common/pagination.component'
import CreditCardItemComponent from './credit_card_item.component'
import TransactionItemComponent from './transaction_item.component'

let cards=sample_db.credit_cards.slice(0,3)
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
    render(){
        const cards2=cards.slice(0,3);
        return (
            <div style={{
                marginTop: 20,
                display:'flex',flex:1,flexDirection: 'column',backgroundColor: '#903553'}}>
                {/* header list */}
                <HeaderListComponent/>
                
                {/* body list */}

                <div style={{width:'100%',display:'flex',flexDirection: 'column'}}>
                    {
                        cards2.map((card,index)=>(
                            <TransactionItemComponent card={card} index={index}/>
                        ))
                    }
                </div>

                <PaginationComponent/>

            </div>
        )
    }
}

const styles={
    container :{
        flexDirection:'column',
        display:'flex',

    },
    
    
    
}

