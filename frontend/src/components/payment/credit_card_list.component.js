//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../common/button.component'

import sample_db from '../../sample_db/sample_db.json'
import HeaderListComponent from '../common/header_list.component'
import PaginationComponent from '../common/pagination.component'
import CreditCardItemComponent from './credit_card_item.component'
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
export default class CreditCardListComponent extends Component {
    render(){
        const cards2=cards.slice(0,3);
        return (
            <div style={{
                backgroundColor:WHITE,
                boxShadow:'3px 5px 3px 3px #707070',
                display:'flex',flex:1,flexDirection: 'column'}}>
                {/* header list */}
                <HeaderListComponent title='Credit Cards' height={40}/>
                
                {/* body list */}

                <div style={{display:'flex',flex:1,flexDirection:'row'}}>
                    {/* <div style={{flex:1}}/> */}
                    <div style={{flex:8,display:'flex',flexDirection: 'column'}}>
                    {
                        cards2.map((card,index)=>(
                            <CreditCardItemComponent card={card} index={index}/>
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

