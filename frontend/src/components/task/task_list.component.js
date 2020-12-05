//import from library 
import React, {Component} from 'react'
import HeaderListComponent from '../common/header_list.component'
import PaginationComponent from '../common/pagination.component'
import TaskItemComponent from './task_item.component'

export default class TaskListComponent extends Component {
    render(){
        return (
            <div style={{
                display:'flex',flex:1,flexDirection: 'column',backgroundColor: '#903553'}}>
                {/* header list */}
                <HeaderListComponent/>
                
                {/* body list */}

                <div style={{width:'100%',display:'flex',flexDirection: 'column'}}>
                {
                    [1,2,3,4,5,6].map((item)=>
                        <TaskItemComponent/>
                    )
                }
                </div>
                
                {/* pagination  */}
                <PaginationComponent/>

            </div>
                    
    
        )
    }
}
