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
import { SIDEBAR_RATIO,PADDING_BODY_DASHBOARD } from '../../utils/constants';
import { GRAY_6 } from '../../utils/palette';
import TaskDetailScreen from '../task_detail.screen';
import TaskSearchScreen from '../task_search.screen';
import api from '../../sample_db/fake_api_responses.json'
export default class DashBoardTaskManagementScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            task_id:1,//receiver from screen task_list ;
            task:null,
            biddings:[],
            stages:[],

        }
    }

    componentDidMount=()=>{
        this.setState({
            task:api.get_detail_task,
            biddings:api.get_bidding_list,
            stages:api.get_stage_list,
        })
    }

    renderBody=()=>{
        switch (this.state.focus_tab_index){
            case 0:
                if (this.state.task===null) return null;
                return  <TaskDetailTabComponent task={this.state.task} />
            case 1:
                return  <BiddingListComponent biddings={this.state.biddings} task_id={this.state.task_id}/>
            case 2:
                return  <div style={{display:'flex',width:'100%',height:'80vh'}}>
                            <ChatComponent  task_id={this.state.task_id}/>
                        </div>
             
            case 3:
                return  <div style={{display:'flex',width:'74vw',height:'80vh'}}>
                            <StageListComponent stages={this.state.stages} task_id={this.state.task_id}/>
                        </div>
            case 4:
                return  <div style={{display:'flex',width:'100%',height:'80vh'}}>
                            <PaymentTabComponent  task_id={this.state.task_id}/>
                        </div>
        }
    }
    render(){
        return (

            <div style={{width:'100vw',backgroundColor: GRAY_6,
                display:'flex',flexDirection: 'row'}}>

                {/* sidebar */}
                <SidebarComponent/>
                {/* body */}
                <div style={{display:'flex',flex:SIDEBAR_RATIO,flexDirection: 'column',padding:PADDING_BODY_DASHBOARD}}>
                    <TaskTabsBarComponent 
                        focus_tab_index={this.state.focus_tab_index}
                        onClickTab={(index)=>
                            this.setState({
                                focus_tab_index:index
                            })}/>

                    <div style={{marginTop:20}}>
                        {
                            this.renderBody()
                        }
                    </div>
                    
        
                </div>

            </div>
            
        )
    }
}
