//import from library 
import React, {Component} from 'react'
import SidebarComponent from '../../components/common/side_bar.component'
import TaskListBriefComponent from '../../components/task/task_list_brief.component'
import { SIDEBAR_RATIO,PADDING_BODY_DASHBOARD, TEXT_SIZES } from '../../utils/constants'
import { BLACK, GRAY_6 } from '../../utils/palette'
import api from '../../sample_db/fake_api_responses.json'
export default class DashBoardTaskListScreen extends Component {
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
        const tasks=this.state.tasks
        return (

            <div style={{width:'100vw',height:'100%',backgroundColor: GRAY_6,
                display:'flex',flexDirection: 'row'}}>

                {/* sidebar */}
                <SidebarComponent/>
                {/* body */}
                <div style={{display:'flex',flex:SIDEBAR_RATIO,padding:PADDING_BODY_DASHBOARD}}>
                    {
                        tasks.length===0?
                        <text style={{fontSize: TEXT_SIZES.NORMAL,color:BLACK}}>
                            You have no any tasks
                        </text>
                        :
                        <TaskListBriefComponent tasks={tasks}/>
                    }
                   
                </div>

                
            </div>
            
        )
    }
}
