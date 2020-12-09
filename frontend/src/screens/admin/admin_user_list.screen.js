//import from library 
import React, {Component} from 'react'
import SidebarComponent from '../../components/common/side_bar.component'
import TaskListBriefComponent from '../../components/task/task_list_brief.component'
import UserListBriefComponent from '../../components/task/user_list_brief.component'
import { SIDEBAR_RATIO,PADDING_BODY_DASHBOARD } from '../../utils/constants'
import { GRAY_6 } from '../../utils/palette'

export default class AdminUserListScreen extends Component {
    render(){
        return (

            <div style={{width:'100vw',height:'100vh',backgroundColor: GRAY_6,
                display:'flex',flexDirection: 'row'}}>

                {/* sidebar */}
                <SidebarComponent is_admin={true} />
                {/* body */}
                <div style={{display:'flex',flex:SIDEBAR_RATIO,padding:PADDING_BODY_DASHBOARD}}>

                    <UserListBriefComponent/>
                </div>

            </div>
            
        )
    }
}
