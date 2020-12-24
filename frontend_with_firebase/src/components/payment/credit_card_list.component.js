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
            <div style={styles.container}>
              
                <HeaderListComponent title='Credit Cards' height={40}/>
                
   

                <div style={styles.body}>

                    {/* <div style={{flex:1}}/> */}

                    <div style={styles.inner_body}>
                    <CreditCardItemComponent 
                        updateInputs={this.props.updateInputs}
                        onClick={this.props.createCard}
                        is_new={true} index={0}  key={''+0}/>
                    {
                        credit_cards.map((item,index)=>(
                            <CreditCardItemComponent 
                                onClick={this.props.deleteCard}
                                updateInputs={this.props.updateInputs}
                                credit_card={item} index={index+1} key={''+(index+1)}/>
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
    container:{
        backgroundColor:WHITE,
        boxShadow:'3px 5px 3px 3px #707070',
        display:'flex',
        flex:1,
        flexDirection: 'column'
    },
    body:{
        display:'flex',
        flex:1,
        flexDirection:'row'
    },
    inner_body:{
        flex:8,
        display:'flex',
        flexDirection: 'column'
    }
}

