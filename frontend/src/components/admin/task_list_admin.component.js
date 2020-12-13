//import from library 
import React, {Component} from 'react'
import { WHITE } from '../../utils/palette'
import HeaderListComponent from '../common/header_list.component'
import TaskItemAdminComponent from './task_item_admin.component'

export default class TaskListAdminComponent extends Component {
    render(){
        const is_admin=this.props.is_admin!==undefined?this.props.is_admin:false;
        return (
            <div style={{ display:'flex',flex:1,flexDirection: 'column',backgroundColor: WHITE,

                boxShadow:'3px 5px 3px 3px #707070'}}>
                {/* header list */}
                <HeaderListComponent   title='Tasks'/>
                
                {/* body list */}

                <div style={{display:'flex',flex:1,flexDirection: 'column'}}>
                {
                    [1,2,3,4,5].map((item,index)=>
                        <TaskItemAdminComponent  
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
