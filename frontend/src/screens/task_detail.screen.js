//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../components/common/button.component';
import DescriptionComponent from '../components/common/description.component';
import FooterBarComponent from '../components/common/footer_bar.component';

import HeaderBarComponent from '../components/common/header_bar.component';
import SkillsListComponent from '../components/common/skills_list.component';
import BiddingListComponent from '../components/task/bidding_list.component';
import TaskDetailHeaderComponent from '../components/task/task_detail_header.component';
import TaskListComponent from '../components/task/task_list.component';
import TaskPlaceBidComponent from '../components/task/task_place_bid.component';
import { BLUE_1, BLUE_2, GREEN_1, GREEN_2, RED_2, WHITE } from '../utils/palette';
import AttachmentsComponent from '../components/input/attachments.component';
import { inputField } from '../redux/constant/input.constant';
import ReportTaskModal from '../components/input/report_task.modal';
export default class TaskDetailScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            open_report_modal:false,
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

    render(){
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
                    
                     <TaskDetailHeaderComponent/>
                    {/* body task detail  */}
 
                    <div style={{width:'100%',display:'flex',flexDirection:'row'}}>
                        <div style={{flex:1}}/>
                        
                        {/* column1 */}
                        <div style={{flex:5,display:'flex',flexDirection: 'column',
                            alignSelf:'baseline'}}>

                            {/* description */}
                            <div style={{marginTop:30}}>
                                <DescriptionComponent 
                                    title='About me'
                                    content='Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.

                                    Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.'/>
                            </div>

                            {/* attachments */}

                            <div style={{marginTop:50}}>
                                <AttachmentsComponent input_field={inputField.FILES}/>
                            </div>
                            
                            {/* biddings */}
                            
                            <div style={{marginTop:50}}>
                                <BiddingListComponent company_view={false}/>
                            </div>
                        </div>

                        <div style={{flex:0.5}}/>

                        {/* column2 */}
                        <div style={{flex:2,display:'flex',flexDirection: 'column',
                            marginLeft:50,  alignSelf:'baseline'}}>

                            {/* skills */}
                            <SkillsListComponent/>

                            {/* times */}
                            <div style={{width: '100%',marginTop:50}}>
                                <ButtonComponent color={GREEN_2} text_color={GREEN_1}
                                    label='6 days, 23 hours'/>
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
               
                </div>


                {/* footer */}
                <FooterBarComponent/>
            </div>
            
        )
    }
}
