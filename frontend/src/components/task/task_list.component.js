//import from library 
import React, {Component} from 'react'
import { inputField } from '../../redux/constant/input.constant'
import HeaderListComponent from '../common/header_list.component'
import TaskItemComponent from './task_item.component'

export default class TaskListComponent extends Component {
    render(){
        return (
            <div style={{width:'100%',display:'flex',flexDirection: 'column'}}>
                {/* header list */}
                <HeaderListComponent title='Freelancers' is_sort={true}/>
                
                {/* body list */}

                <div style={{width:'100%',display:'flex',flexDirection: 'column'}}>
                {
                    [1,2,3,4,5].map((item,index)=>
                        <TaskItemComponent key={''+index}/>
                    )
                }
                </div>
          
            </div>
                    
    
        )
    }
}
