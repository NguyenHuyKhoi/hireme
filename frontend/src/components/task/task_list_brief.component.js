//import from library 
import React, {Component} from 'react'
import { inputField } from '../../redux/constant/input.constant'
import { WHITE } from '../../utils/palette'
import HeaderListComponent from '../common/header_list.component'
import TaskItemBriefComponent from './task_item_brief.component'

export default class TaskListBriefComponent extends Component {
    render(){
        const is_admin=this.props.is_admin!==undefined?this.props.is_admin:false;
        return (
            <div style={{ display:'flex',flex:1,flexDirection: 'column',backgroundColor: WHITE,

                boxShadow:'3px 5px 3px 3px #707070'}}>
                {/* header list */}
                <HeaderListComponent   title='Tasks'
                    filter={inputField.TASK_FILTER}/>
                
                {/* body list */}

                <div style={{display:'flex',flex:1,flexDirection: 'column'}}>
                {
                    [1,2,3,4,5].map((item,index)=>
                        <TaskItemBriefComponent  
                            key={''+index}
                            is_admin={is_admin}
                            index={index}/>
                    )
                }
                </div>
            

            </div>
                    
    
        )
    }
}
