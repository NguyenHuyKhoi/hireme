//import from library 
import React, {Component} from 'react'
import ChatComponent from '../../components/chat/chat.component';
import SidebarComponent from '../../components/common/side_bar.component'
import TaskTabsBaComponent from '../../components/common/task_tabs.component'
import BiddingListComponent from '../../components/task/bidding_list.component';
import PaymentTabComponent from '../../components/task/payment_tab.component';
import TaskAttachmentsComponent from '../../components/task/task_attachments.component';
import TaskDetailTabComponent from '../../components/task/task_detail.component';
import TaskDetailTab from '../../components/task/task_detail.component';
import TaskFilterComponent from '../../components/task/task_filter.component';
import TaskItemBriefComponent from '../../components/task/task_item_brief.component';
import TaskDetailScreen from '../task_detail.screen';
import TaskSearchScreen from '../task_search.screen';

export default class DashBoardTaskManagementScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            tab_index:0
        }
    }
    renderBody=()=>{
        switch (this.state.tab_index){
            case 0:
                return <TaskDetailTabComponent/>
            case 1:
                return <BiddingListComponent/>
            case 2:
                return <ChatComponent/>
            case 3:
                return <TaskItemBriefComponent/>
            case 4:
                return <PaymentTabComponent/>
        }
    }
    render(){
        return (

            <div style={{width:'100vw',height:'100vh',backgroundColor: '#392855',
                display:'flex',flexDirection: 'row'}}>

                {/* sidebar */}
                <SidebarComponent/>
                {/* body */}
                <div style={{display:'flex',flex:4,flexDirection: 'column',
                    backgroundColor: '#902823',
                    padding:60}}>

                    <TaskTabsBaComponent onClickTab={(index)=>
                        this.setState({
                            tab_index:index
                        })
                    }/>
                    {
                        this.renderBody()
                    }
                </div>

            </div>
            
        )
    }
}
