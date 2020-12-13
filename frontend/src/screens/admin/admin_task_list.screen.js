//import from library 
import React, {Component} from 'react'
import TaskListAdminComponent from '../../components/admin/task_list_admin.component'
import SidebarComponent from '../../components/common/side_bar.component'
import { SIDEBAR_RATIO,PADDING_BODY_DASHBOARD } from '../../utils/constants'
import { GRAY_6 } from '../../utils/palette'
import api from '../../sample_db/fake_api_responses.json'
export default class AdminTaskListScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            tasks:[]
        }
    }

    componentDidMount=()=>{
        this.setState({
            tasks:api.get_task_list
        })
    }
    render(){
        return (

            <div style={{width:'100vw',height:'100vh',backgroundColor: GRAY_6,
                display:'flex',flexDirection: 'row'}}>

                {/* sidebar */}
                <SidebarComponent is_admin={true} />
                {/* body */}
                <div style={{display:'flex',flex:SIDEBAR_RATIO,padding:PADDING_BODY_DASHBOARD}}>
                    <TaskListAdminComponent is_admin={true}/>
                </div>

            </div>
            
        )
    }
}