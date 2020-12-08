//import from library 
import React, {Component} from 'react'

import sample_db from '../../sample_db/sample_db.json'
import HeaderListComponent from '../common/header_list.component';
import PaginationComponent from '../common/pagination.component';
import ReviewItemComponent from './review_item.component';

export default class ReviewListComponent extends Component {
    render(){
        return (
            <div style={{flex:1,marginTop: 20,
            display:'flex',flexDirection: 'column'}}>
                {/* header list */}
                <HeaderListComponent title='Reviews'/>

                {/* body list */}

                <div style={{width:'100%',display:'flex',flexDirection: 'column'}}>
                {
                    [1,2,3,4].map((item,index)=>
                        <ReviewItemComponent 
                            key={''+index}
                            review={{is_company:index%2==0}} index={index}/>
                    )
                }
                </div>

                {/* pagination  */}
           

            </div>
            
        )
    }
}
