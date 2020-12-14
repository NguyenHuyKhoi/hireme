//import from library 
import React, {Component} from 'react'
import SidebarComponent from '../../components/common/side_bar.component'
import TaskListBriefComponent from '../../components/task/task_list_brief.component'
import { SIDEBAR_RATIO,PADDING_BODY_DASHBOARD, TEXT_SIZES } from '../../utils/constants'
import { BLACK, GRAY_6 } from '../../utils/palette'
import api from '../../sample_db/fake_api_responses.json'
import {connect }from 'react-redux'
import * as action from '../../redux/action/user.action'

class DashBoardTaskListScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            tasks:[]
        }
    }

    componentDidMount=()=>{
        let body_req={
            user_id:this.props.user_infor.user_id,
            user_type:this.props.user_infor.user_type
        }
        alert('Call API get_task_list with body= :'+JSON.stringify(body_req))
        //Call_API_Here
                // axios.get(BASE_URL+`/search_freelancers`,{
                //         data:{
                //             count:20,
                //             filter:this.groupInputs()
                //         }
                //     })
                //     .then(res => {
                //         })
                //         .catch(error => console.log(error));
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

const mapStateToProps = state => ({
	user_infor: state.user_infor,
});

export default connect(mapStateToProps,action)(DashBoardTaskListScreen)

