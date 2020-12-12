//import from library 
import React, {Component} from 'react'

import sample_db from '../../sample_db/fake_api_responses.json'
import HeaderListComponent from '../common/header_list.component';
import PaginationComponent from '../common/pagination.component';
import BiddingItemComponent from './bidding_item.component';

const biddings=sample_db.get_bidding_list   ;
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
        const biddings=this.props.biddings!==undefined?this.props.biddings:[];
        const company_view=this.props.company_view;
        return (
            <div style={{flex:1,
            display:'flex',flexDirection: 'column'}}>
                <HeaderListComponent title='Biddings'/>


                <div style={{flex:1,display:'flex',flexDirection: 'column'}}>
                    {
                    biddings.map((item,index)=>
                        <BiddingItemComponent bidding={item} index={index} key ={''+index}/>
                    )
                    }
                </div>


            </div>
            
        )
    }
}
