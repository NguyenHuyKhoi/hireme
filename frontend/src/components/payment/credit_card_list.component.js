//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../common/button.component'

import sample_db from '../../sample_db/sample_db.json'
import CreditCardComponent from './credit_card.component'

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

cards=[new_card,...cards]
export default class CreditCardListComponent extends Component {
    render(){
        return (
            <div  style={styles.container}>    
            {
                cards.map((card,index)=>(
                    <CreditCardComponent card={card} index={index}/>
                ))
            }

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

