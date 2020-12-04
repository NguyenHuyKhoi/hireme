//import from library 
import React, {Component} from 'react'

import sample_db from '../sample_db/sample_db.json'
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
        const list = biddings.slice(0,5)
        return (
            <div>
            {   
                list.map((value,index)=>
                    <BiddingItemComponent bidding={value} index={index} key ={index}/>
                )
             }
            </div>
            
        )
    }
}
