//import from library 
import React, {Component} from 'react'

import HeaderListComponent from '../common/header_list.component'
import TaskItemComponent from './task_item.component'

export default class TaskListComponent extends Component {
    render(){
        const tasks=this.props.tasks;
        return (
            <div style={{width:'100%',display:'flex',flexDirection: 'column'}}>
                {/* header list */}
                <HeaderListComponent title='Tasks' is_sort={true}/>
                
                {/* body list */}

                <div style={{width:'100%',display:'flex',flexDirection: 'column'}}>
                {
                    tasks.map((item,index)=>
                        <TaskItemComponent task={item} key={''+index}/>
                    )
                }
                </div>
          
            </div>
                    
    
        )
    }
}
