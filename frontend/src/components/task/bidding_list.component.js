//import from library 
import React, {Component} from 'react'

import sample_db from '../../sample_db/sample_db.json'
import HeaderListComponent from '../common/header_list.component';
import PaginationComponent from '../common/pagination.component';
import BiddingItemComponent from './bidding_item.component';

const biddings=sample_db.biddings   ;
// * bidding [
//     {
//       * id
//       * freelancer : {id ,name ,avatar ,rate_score}
//       * intended_time , intended_cost
//       * post_time
//     }
//   ]
export default class BiddingListComponent extends Component {
    render(){
        const list = biddings.slice(0,4)
        const company_view=this.props.company_view;
        return (
            <div style={{flex:1,
            display:'flex',flexDirection: 'column'}}>
                <HeaderListComponent title='Biddings'/>


                <div style={{flex:1,display:'flex',flexDirection: 'column'}}>
                    {
                    list.map((item,index)=>
                        <BiddingItemComponent bidding={item} index={index} key ={index}/>
                    )
                    }
                </div>


            </div>
            
        )
    }
}
