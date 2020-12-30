//import from library 
import React, {Component} from 'react'
import TaskListAdminComponent from '../../components/admin/task_list_admin.component'
import SidebarComponent from '../../components/common/side_bar.component'
import { SIDEBAR_RATIO,PADDING_BODY_DASHBOARD, TEXT_SIZES } from '../../utils/constants'
import { BLACK, GRAY_6 } from '../../utils/palette'

import api from '../../sample_db/fake_api_responses.json'
import { toArray } from '../../utils/helper'

import firebase from '../../firebase/firebase'
export default class AdminTaskListScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            tasks:[]
        }
    }

    componentDidMount=async ()=>{
        let tasks= await firebase.get('/task/');
        await this.setState({
            tasks:toArray(tasks)
        })
    }
    render(){
        const tasks=this.state.tasks

        return (

            <div style={styles.container}>

              
                <SidebarComponent is_admin={true} />
              
                <div style={styles.body}>
                    {
                        tasks.length===0?
                        <text style={styles.text}>
                            Hiện hệ thống chưa có dự án nào được đăng.
                        </text>
                        :
                        <TaskListAdminComponent tasks={tasks}/>
                    }
                </div>

            </div>
            
        )
    }
}

const styles={
    container:{
        width:'100vw',
        height:'100vh',
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
