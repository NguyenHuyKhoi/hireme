//import from library 
import React, {Component} from 'react'

import sample_db from '../../sample_db/fake_api_responses'
import HeaderListComponent from '../common/header_list.component';
import PaginationComponent from '../common/pagination.component';
import ReviewItemComponent from './review_item.component';

export default class ReviewListComponent extends Component {
    render(){
        const reviews=this.props.reviews!==undefined?this.props.reviews:[];
        return (
            <div style={{flex:1,marginTop: 20,
            display:'flex',flexDirection: 'column'}}>
                {/* header list */}
                <HeaderListComponent title='Reviews'/>

                {/* body list */}

                <div style={{width:'100%',display:'flex',flexDirection: 'column'}}>
                {
                    reviews.map((item,index)=>
                        <ReviewItemComponent 
                            key={''+index}
                            review={item} index={index}/>
                    )
                }
                </div>

                {/* pagination  */}
           

            </div>
            
        )
    }
}
