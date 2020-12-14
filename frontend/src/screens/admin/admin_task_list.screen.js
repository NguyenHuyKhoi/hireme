//import from library 
import React, {Component} from 'react'
import TaskListAdminComponent from '../../components/admin/task_list_admin.component'
import SidebarComponent from '../../components/common/side_bar.component'
import { SIDEBAR_RATIO,PADDING_BODY_DASHBOARD, TEXT_SIZES } from '../../utils/constants'
import { BLACK, GRAY_6 } from '../../utils/palette'

import api from '../../sample_db/fake_api_responses.json'
export default class AdminTaskListScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            tasks:[]
        }
    }

    componentDidMount=()=>{
        //Call_API_Here
        // axios.get(BASE_URL+`/get_task_list_admin`,{
        //         data:{
        //         }
        //     })
        //     .then(res => {
        //     })
        //     .catch(error => console.log(error));
        this.setState({
            tasks:api.get_task_list_admin
        });
    }
    render(){
        const tasks=this.state.tasks
        return (

            <div style={{width:'100vw',height:'100vh',backgroundColor: GRAY_6,
                display:'flex',flexDirection: 'row'}}>

                {/* sidebar */}
                <SidebarComponent is_admin={true} />
                {/* body */}
                <div style={{display:'flex',flex:SIDEBAR_RATIO,padding:PADDING_BODY_DASHBOARD}}>
                    {
                        tasks.length===0?
                        <text style={{fontSize: TEXT_SIZES.NORMAL,color:BLACK}}>
                            There is not any users, both companies and freelancers.
                        </text>
                        :
                        <TaskListAdminComponent tasks={tasks}/>
                    }
                </div>

            </div>
            
        )
    }
}
