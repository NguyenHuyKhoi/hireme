//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../common/button.component'

import sample_db from '../../sample_db/sample_db.json'
import HeaderListComponent from '../common/header_list.component'
import PaginationComponent from '../common/pagination.component'
import CreditCardItemComponent from './credit_card_item.component'
import TransactionItemComponent from './transaction_item.component'
import { WHITE } from '../../utils/palette'

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
            <div style={{ display:'flex',flex:1,flexDirection: 'column',backgroundColor: WHITE,

            boxShadow:'3px 5px 3px 3px #707070'}}>
                {/* header list */}
                <HeaderListComponent title='Transaction History' height={40} is_sort={true}/>
                
                {/* body list */}
                <div style={{flex:1,display: 'flex',flexDirection:'row'}}>
                    {/* <div style={{flex:1}}/> */}

                    <div style={{display:'flex',flex:8,flexDirection: 'column'}}>
            
                        {
                            cards2.map((item,index)=>(
                                <TransactionItemComponent card={item} index={index} key={''+index}/>
                            ))
                        }
                    </div>

                    {/* <div style={{flex:1}}/> */}
                </div>
                

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

