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
        return (
            <div style={{width:'100%',marginTop: 20,
            display:'flex',flexDirection: 'column',backgroundColor: '#903553'}}>
                {/* header list */}
                <HeaderListComponent/>

                {/* body list */}

                <div style={{width:'100%',display:'flex',flexDirection: 'column'}}>
                {
                    list.map((item,index)=>
                    <BiddingItemComponent bidding={item} index={index} key ={index}/>
                    )
                }
                </div>

                {/* pagination  */}
                <PaginationComponent/>

            </div>
            
        )
    }
}
