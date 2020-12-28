//import from library 
import React, {Component} from 'react'
import SidebarComponent from '../../components/common/side_bar.component'
import TaskListBriefComponent from '../../components/task/task_list_brief.component'
import { SIDEBAR_RATIO,PADDING_BODY_DASHBOARD, TEXT_SIZES } from '../../utils/constants'
import { BLACK, GRAY_6 } from '../../utils/palette'
import api from '../../sample_db/fake_api_responses.json'
import {connect }from 'react-redux'
import * as action from '../../redux/action/user.action'


import firebase from '../../firebase/firebase'


class DashBoardTaskListScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            tasks:[],
            id:this.props.user_infor.id,
            type:this.props.user_infor.type
        }
    }

    componentDidMount=async ()=>{
        let tasks=[];
        if (this.state.type==='freelancer'){
            tasks=await firebase.findTaskForFreelancer(this.state.id);
        }
        else {
            tasks=await firebase.findTaskForCompany(this.state.id)
        };

        console.log('taskList :',tasks)
        await this.setState({
            tasks
        });
    }

    render(){
        const tasks=this.state.tasks
        return (

            <div style={styles.container}>

                <SidebarComponent/>

                <div style={styles.body}>
                    {
                        tasks.length===0?
                        <text style={styles.text}>
                            Bạn chưa đăng hay đấu giá bất kỳ dự án nào...
                        </text>
                        :
                        <TaskListBriefComponent tasks={tasks}/>
                    } 
                </div>

                
            </div>
            
        )
    }
}


const styles={
    container:{
        width:'100vw',
        height:'100%',
        backgroundColor: GRAY_6,
        display:'flex',
        flexDirection: 'row'
    },
    body:{
        display:'flex',
        flex:SIDEBAR_RATIO,
        padding:PADDING_BODY_DASHBOARD
    },
    text:{
        fontSize: TEXT_SIZES.NORMAL,
        color:BLACK
    }
}


const mapStateToProps = state => ({
	user_infor: state.user_infor,
});

export default connect(mapStateToProps,action)(DashBoardTaskListScreen)

