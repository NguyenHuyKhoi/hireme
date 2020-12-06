//import from library 
import React, {Component} from 'react'
import SidebarComponent from '../../components/common/side_bar.component'
import TaskListBriefComponent from '../../components/task/task_list_brief.component'
import { SIDEBAR_RATIO } from '../../utils/constants'

export default class DashBoardTaskListScreen extends Component {
    render(){
        return (

            <div style={{width:'100vw',height:'100vh',backgroundColor: '#392855',
                display:'flex',flexDirection: 'row'}}>

                {/* sidebar */}
                <SidebarComponent/>
                {/* body */}
                <div style={{display:'flex',flex:SIDEBAR_RATIO,flexDirection: 'column',
                    backgroundColor: '#902823',
                    padding:60}}>

                    <TaskListBriefComponent/>
                </div>

            </div>
            
        )
    }
}
