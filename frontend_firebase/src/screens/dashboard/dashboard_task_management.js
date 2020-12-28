//import from library 
import React, {Component} from 'react'
import ChatComponent from '../../components/chat/chat.component';
import SidebarComponent from '../../components/common/side_bar.component'
import TaskTabsBarComponent from '../../components/common/task_tabs.component'
import BiddingListComponent from '../../components/task/bidding_list.component';
import PaymentTabComponent from '../../components/task/payment_tab.component';
import StageListComponent from '../../components/task/stage_list.component';
import TaskDetailTabComponent from '../../components/task/task_detail.component';
import TaskDetailTab from '../../components/task/task_detail.component';
import TaskItemBriefComponent from '../../components/task/task_item_brief.component';
import { SIDEBAR_RATIO,PADDING_BODY_DASHBOARD, TEXT_SIZES } from '../../utils/constants';
import { GRAY_6,BLACK } from '../../utils/palette';
import TaskDetailScreen from '../task_detail.screen';
import TaskSearchScreen from '../task_search.screen';
import api from '../../sample_db/fake_api_responses.json'

import {connect }from 'react-redux'
import * as action from '../../redux/action/user.action'

import firebase from '../../firebase/firebase'
import config from '../../firebase/config'

class DashBoardTaskManagementScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            task_id:this.props.match.params.id,//receiver from screen task_list ;
            task:null,
            focus_tab_index:0

        }
    }

    getDetailTask=async ()=>{

        await config.database().ref('/task/'+this.state.task_id)
            .on('value',snapshot=>{
                    let res=snapshot.val()

                    console.log('taskManagement taskChange:',res);

                    this.setState({
                        task:{
                            ...res,
                            biddings:res.biddings===undefined?[]:Object.values(res.biddings),
                            stages:res.stages===undefined?[]:Object.values(res.stages)
                        }
                    })
            })
     
       
    }


    componentDidMount=async()=>{
        await this.getDetailTask();
    }

    renderBody=()=>{
        const type=this.props.user_infor.type
        const st=this.state.task;
        const stb=st.biddings;
        const sts=st.stages
        switch (this.state.focus_tab_index){
            case 0:
                if (st===null) return null;
                return  <TaskDetailTabComponent task={st} />

            case 1:
                if (stb.length===0){
                    return  <text style={{fontSize: TEXT_SIZES.NORMAL,color:BLACK}}>
                        There is not any biddings.Be the first !
                    </text>
                }
                else {
                   return   <BiddingListComponent 
                        type={type}
                        task={st}/>
                }

            case 2:
                return  <div style={{display:'flex',width:'100%',height:'80vh'}}>
                            <ChatComponent 
                                type={type} 
                                task_id={this.state.task_id}/>
                        </div>
             
            case 3:
                return  <div style={{display:'flex',width:'74vw',height:'80vh'}}>
                            <StageListComponent
                                type={type} 
                                stages={sts}
                                task_id={this.state.task_id}/>
                        </div>
            case 4:
                return  <div style={{display:'flex',width:'100%',height:'80vh'}}>
                            <PaymentTabComponent
                                task_id={this.state.task_id}/>
                        </div>
        }
    };



    render(){
        return (
            <div style={styles.container}>

                <SidebarComponent/>


                <div style={styles.body}>
                    <TaskTabsBarComponent 
                        focus_tab_index={this.state.focus_tab_index}
                        onClickTab={(index)=>
                            this.setState({
                                focus_tab_index:index
                            })}/>


                    <div style={{marginTop:20}}>
                        {
                            this.state.task!==null?
                            this.renderBody()
                            :
                            null
                        }
                    </div>    
        
                </div>

            </div>
            
        )
    }
}

const styles={
    container:{
        width:'100vw',
        backgroundColor: GRAY_6,
        display:'flex',
        flexDirection: 'row'
    },
    body:{
        display:'flex',
        flex:SIDEBAR_RATIO,
        flexDirection: 'column',
        padding:PADDING_BODY_DASHBOARD
    }
}

const mapStateToProps = state => ({
	user_infor: state.user_infor,
});

export default connect(mapStateToProps,action)(DashBoardTaskManagementScreen)