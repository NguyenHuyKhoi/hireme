//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../common/button.component'

import sample_db from '../../sample_db/fake_api_responses.json'
import HeaderListComponent from '../common/header_list.component'
import PaginationComponent from '../common/pagination.component'
import CreditCardItemComponent from './credit_card_item.component'
import { WHITE } from '../../utils/palette'

let cards=sample_db.get_detail_payment.credit_cards

export default class CreditCardListComponent extends Component {
    render(){
        const credit_cards=this.props.credit_cards;
        console.log('credit_cards:',credit_cards);
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
                    <CreditCardItemComponent is_new={true} index={0}  key={''+0}/>
                    {
                        credit_cards.map((item,index)=>(
                            <CreditCardItemComponent credit_card={item} index={index+1} key={''+(index+1)}/>
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

