//import from library 
import React, {Component} from 'react'
import HeaderListComponent from '../common/header_list.component'
import PaginationComponent from '../common/pagination.component'
import TaskItemComponent from './task_item.component'
import TaskItemBriefComponent from './task_item_brief.component'

export default class TaskListBriefComponent extends Component {
    render(){
        return (
            <div style={{ display:'flex',flex:1,flexDirection: 'column',backgroundColor: '#903553'}}>
                {/* header list */}
                <HeaderListComponent/>
                
                {/* body list */}

                <div style={{display:'flex',flex:1,flexDirection: 'column'}}>
                {
                    [1,2,3,4,5].map((item)=>
                        <TaskItemBriefComponent/>
                    )
                }
                </div>
                
                {/* pagination  */}
                <PaginationComponent/>

            </div>
                    
    
        )
    }
}
