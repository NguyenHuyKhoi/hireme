//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../components/common/button.component';
import DescriptionComponent from '../components/common/description.component';
import FooterBarComponent from '../components/common/footer_bar.component';

import HeaderBarComponent from '../components/common/header_bar.component';
import SkillsListComponent from '../components/common/skills_list.component';
import BiddingListComponent from '../components/task/bidding_list.component';
import TaskDetailHeaderComponent from '../components/task/task_detail_header.component';
import TaskPlaceBidComponent from '../components/task/task_place_bid.component';
import { BLUE_1, BLUE_2, GREEN_1, GREEN_2, RED_2, WHITE } from '../utils/palette';
import AttachmentsComponent from '../components/input/attachments.component';
import ReportTaskModal from '../components/input/report_task.modal';

import api from '../sample_db/fake_api_responses.json'
export default class TaskDetailScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            open_report_modal:false,
            task:null,
            biddings:[]
        }
    }

    openReportModal=()=>{
        this.setState({
            open_report_modal:true
        })
    }

    closeReportModal=()=>{
        this.setState({
            open_report_modal:false
        })
    }

    reportTask=()=>{
        alert('report task  ');
        this.closeReportModal();
    }

    componentDidMount=()=>{
        this.setState({
            task:api.get_detail_task,
            biddings:api.get_bidding_list
        })
    }

    render(){
        const task=this.state.task;
        const biddings=this.state.biddings;
        return (

            <div style={{width:'100vw',backgroundColor: WHITE,
                display:'flex',flexDirection: 'column'}}>

                {/* header */}
                <HeaderBarComponent/>

                <ReportTaskModal
                    is_open={this.state.open_report_modal} 
                    clickBack={this.closeReportModal}
                    clickReport={this.reportTask}
                />

                {/* body */}
                <div style={{width:'100vw',display:'flex',flexDirection: 'column',
                    paddingBottom:60,
                    overflowX:'hidden',
                    alignSelf: 'baseline'}}>

                    
                    {/* header task detail */}
                    {
                        task===null?
                        null
                        :
                        <TaskDetailHeaderComponent task={task}/>
                    }
                   
                    {/* body task detail  */}
 
                    {
                        task===null?
                        null
                        :
                        <div style={{width:'100%',display:'flex',flexDirection:'row'}}>
                            <div style={{flex:1}}/>
                        
                            {/* column1 */}
                            <div style={{flex:5,display:'flex',flexDirection: 'column',
                                alignSelf:'baseline'}}>

                                {/* description */}
                                <div style={{marginTop:30}}>
                                    <DescriptionComponent 
                                        title='About task:'
                                        content={task.description}/>
                                </div>

                                {/* attachments */}

                                <div style={{marginTop:50}}>
                                    <AttachmentsComponent 
                                        attachments={task.attachments}/>
                                </div>
                                
                                {/* biddings */}

                                <div style={{marginTop:50}}>
                                    <BiddingListComponent 
                                        biddings={biddings}
                                        company_view={false}/>
                                </div>
                            </div>

                            <div style={{flex:0.5}}/>

                            {/* column2 */}
                            <div style={{flex:2,display:'flex',flexDirection: 'column',
                                marginLeft:50,  alignSelf:'baseline'}}>

                                {/* skills */}
                                <SkillsListComponent skills={task.skills}/>

                                {/* times */}
                                <div style={{width: '100%',marginTop:50}}>
                                    <ButtonComponent color={GREEN_2} text_color={GREEN_1}
                                        label={task.post_time}/>
                                </div>
                                {/* place bid */}

                                <div style={{marginTop:50}}>
                                    <TaskPlaceBidComponent/>
                                </div>

                                <div style={{width: '100%',marginTop:50}}>
                                    <ButtonComponent 
                                        onClick={this.openReportModal}
                                        color={RED_2} text_color={WHITE}
                                        label='Report Task'/>
                                </div>
                            </div>
                            <div style={{flex:1}}/>

                        </div>
               
                    }
                    
                </div>


                {/* footer */}
                <FooterBarComponent/>
            </div>
            
        )
    }
}
