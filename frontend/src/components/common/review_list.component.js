//import from library 
import React, {Component} from 'react'
import ReviewItemComponent from '../task/review_item.component'
import HeaderListComponent from './header_list.component'
import PaginationComponent from './pagination.component'
import TaskItemComponent from './review_item.component'

export default class ReviewListComponent extends Component {
    render(){
        return (
            <div style={{marginLeft:60,width:'55vw',
                display:'flex',flexDirection: 'column',backgroundColor: '#903553'}}>
                {/* header list */}
                <HeaderListComponent/>
                
                {/* body list */}

                <div style={{width:'100%',display:'flex',flexDirection: 'row',justifyContent:'space-around',flexWrap: 'wrap',alignItems: 'flex-start'}}>
                {
                    [1,2,3,4,5,6].map((item,index)=>
                        <ReviewItemComponent index={index} />
                    )
                }
                </div>
                
                {/* pagination  */}
                <PaginationComponent/>

            </div>
                    
    
        )
    }
}
