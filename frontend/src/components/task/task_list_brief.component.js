//import from library 
import React, {Component} from 'react'
import { inputField } from '../../redux/constant/input.constant'
import { WHITE } from '../../utils/palette'
import HeaderListComponent from '../common/header_list.component'
import TaskItemBriefComponent from './task_item_brief.component'

export default class TaskListBriefComponent extends Component {
    render(){
        const tasks=this.props.tasks;
        return (
            <div style={{ display:'flex',flex:1,flexDirection: 'column',backgroundColor: WHITE,

                boxShadow:'3px 5px 3px 3px #707070'}}>
                {/* header list */}
                <HeaderListComponent   title='Tasks'
                    height={50  }
                    filter={inputField.TASK_FILTER}/>
                
                {/* body list */}

                <div style={{display:'flex',flex:1,flexDirection: 'column'}}>
                {
                    tasks.map((item,index)=>
                        <TaskItemBriefComponent  
                            task={item}
                            key={''+index}
                            index={index}/>
                    )
                }
                </div>
            

            </div>
                    
    
        )
    }
}
