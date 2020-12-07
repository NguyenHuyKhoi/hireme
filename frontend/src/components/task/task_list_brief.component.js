//import from library 
import React, {Component} from 'react'
import { WHITE } from '../../utils/palette'
import HeaderListComponent from '../common/header_list.component'
import PaginationComponent from '../common/pagination.component'
import TaskItemComponent from './task_item.component'
import TaskItemBriefComponent from './task_item_brief.component'

export default class TaskListBriefComponent extends Component {
    render(){
        return (
            <div style={{ display:'flex',flex:1,flexDirection: 'column',backgroundColor: WHITE,

                boxShadow:'3px 5px 3px 3px #707070'}}>
                {/* header list */}
                <HeaderListComponent   title='Tasks' is_sort={true}/>
                
                {/* body list */}

                <div style={{display:'flex',flex:1,flexDirection: 'column'}}>
                {
                    [1,2,3,4,5].map((item,index)=>
                        <TaskItemBriefComponent  index={index}/>
                    )
                }
                </div>
            

            </div>
                    
    
        )
    }
}
