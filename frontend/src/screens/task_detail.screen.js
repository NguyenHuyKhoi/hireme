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
import { BLACK, BLUE_1, BLUE_2, GREEN_1, GREEN_2, RED_2, WHITE } from '../utils/palette';
import AttachmentsComponent from '../components/input/attachments.component';
import ReportTaskModal from '../components/input/report_task.modal';

import api from '../sample_db/fake_api_responses.json'
import { TEXT_SIZES } from '../utils/constants';
import { convertFullDateToOnlyDay,convertFullDateToHour } from '../utils/helper';
export default class TaskDetailScreen extends Component {
    constructor(props){
        super(props);

        this.state={
            open_report_modal:false,
            task:null,
            biddings:[],
            task_id:this.props.match.params.id
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

    componentDidMount=()=>{
        // //Call_API_Here
        // axios.get(BASE_URL+`/get_detail_task`,{
        //         data:{
        //             task_id:this.state.task_id
        // 
        //         }
        //     })
        //     .then(res => {
        //     })
        //     .catch(error => console.log(error));

        // //Call_API_Here
        // axios.get(BASE_URL+`/get_bidding_list`,{
        //         data:{
        //             task_id:this.state.task_id
        // 
        //         }
        //     })
        //     .then(res => {
        //     })
        //     .catch(error => console.log(error));
        alert('Call API get_detail_task and get_bidding_list with task_id= '+this.state.task_id)
        this.setState({
            task:api.get_detail_task,
            biddings:api.get_bidding_list
        })
    }

    updateInputs=(field,value)=>{
        console.log('update_input:',field,value)
        this.setState({
            [field]:value
        })
    }

    placeBidding=()=>{
      
        if (this.state.bidding_time===undefined){
            alert('Please enter estimated time .')
        }
        else  if (this.state.bidding_cost===undefined){
            alert('Please enter estimated cost .')
        }
        else {
            let body_req={
                task_id:this.state.task.id,
                bidding_time:this.state.bidding_time,
                bidding_cost:this.state.bidding_cost
            }
            alert('Call API place_bidding with body =  '+JSON.stringify(body_req))
            //Call_API_Here
            // axios.get(BASE_URL+`/place_bidding`,{
            //         data:{
            //         }
            //     })
            //     .then(res => {
            //     })
            //     .catch(error => console.log(error));

        } 
    }

    reportTask=()=>{
        if (this.state.modal_content===undefined || this.state.modal_content===''){
            alert('Please enter the reason why you report this task !')
        }
        else {
            let body_req={
                task_id:this.state.task.id,
                content:this.state.modal_content,
            }
            //Call_API_Here
            // axios.get(BASE_URL+`/report_task`,{
            //         data:{
            //         }
            //     })
            //     .then(res => {
            //     })
            //     .catch(error => console.log(error));
            alert('Call API report_task with body =  '+JSON.stringify(body_req));
            this.closeReportModal();
        }
    }

    render(){
        const task=this.state.task;
        const biddings=this.state.biddings;
        return (

            <div style={styles.container}>

                {/* header */}
                <HeaderBarComponent/>

                <ReportTaskModal
                    updateInputs={this.updateInputs}
                    is_open={this.state.open_report_modal} 
                    clickBack={this.closeReportModal}
                    clickReport={this.reportTask}
                />

                {
                    task===null?
                    null
                    :
                    <div style={styles.body}>
                        <TaskDetailHeaderComponent task={task}/>

                        <div style={styles.task_body}/>
                            <div style={{flex:1}}>
                                
                            <div style={styles.task_body_col1}>

                                <div style={{marginTop:30}}>
                                    <DescriptionComponent 
                                        title='About task:'
                                        content={task.description}/>
                                </div>

                                <div style={{marginTop:50}}>
                                    <AttachmentsComponent  attachments={task.attachments}/>
                                </div>

                                <div style={{marginTop:50}}>
                                    {
                                        biddings.length===0?
                                        <text style={{fontSize: TEXT_SIZES.NORMAL,color:BLACK}}>
                                            There is not any biddings.Be the first !
                                        </text>
                                        :
                                        <BiddingListComponent 
                                            biddings={biddings}
                                            company_view={false}/>

                                    }
                                    
                                </div>
                            </div>

                            <div style={{flex:0.5}}/>

                            <div style={styles.task_body_col2}>

                                <SkillsListComponent skills={task.skills}/>

                                <div style={{width: '100%',marginTop:50}}>
                                    <ButtonComponent color={GREEN_2} text_color={GREEN_1}
                                        label={convertFullDateToOnlyDay(task.post_time)}/>
                                </div>

                                <div style={{marginTop:50}}>
                                    <TaskPlaceBidComponent
                                        placeBidding={this.placeBidding}
                                        updateInputs={this.updateInputs}/>
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


                }
               

                {/* footer */}
                <FooterBarComponent/>
            </div>
            
        )
    }
}


const styles={
    container:{
        width:'100vw',
        backgroundColor: WHITE,
        display:'flex',
        flexDirection: 'column'
    },
    body:{
        width:'100vw',
        display:'flex',
        flexDirection: 'column',
        paddingBottom:60,
        overflowX:'hidden',
        alignSelf: 'baseline'
    },
    task_body:{
        width:'100%',
        display:'flex',
        flexDirection:'row'
    },
    task_body_col1:{
        flex:5,
        display:'flex',
        flexDirection: 'column',
        alignSelf:'baseline'
    },
    task_body_col2:{
        flex:2,
        display:'flex',
        flexDirection: 'column',
        marginLeft:50,  
        alignSelf:'baseline'
    }
   
}