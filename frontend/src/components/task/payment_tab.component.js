//import from library 
import React, {Component} from 'react'
import sample_db from '../../sample_db/fake_api_responses'
import { TEXT_SIZES } from '../../utils/constants';
import { BLUE_1, GRAY_2, GREEN_1, RED_1, WHITE, YELLOW_1 } from '../../utils/palette';
import ButtonComponent from '../common/button.component';
import ButtonInputComponent from '../input/button_input.component';
import ReportTaskModal from '../input/report_task.modal';
import ReviewTaskModal from '../input/review_task.modal';
import GiveupTaskModal from '../input/giveup_task.modal'

const chats=sample_db.chats   ;

const action_buttons=[
    [
        {
            title : 'When task is on process,  press to give up, get refund 50% budget.',
            background:YELLOW_1,
            code:'give_up'
        },
        {
            title : 'When task is confirmed as complete, leave a review about freelance below.',
            background:GREEN_1,
            code:'review'
        },
        {
            title : 'When task has any problem, press to send report.',
            background:RED_1,
            code:'report'
        }
    ],
    [
        {
            title : 'When task is on process,press to give up and get fine 20% budget.',
            background:YELLOW_1,
            code:'give_up'
        },
        {
            title : 'When task is confirm as complete,leave a review about company below. ',
            background:GREEN_1,
            code:'review'
        },
        {
            title : 'When task has any problem, press to send report.',
            background:RED_1,
            code:'report'
        }
    ]
]

class ActionButtons extends Component{
    render(){
        const data=this.props.data; 
        return (
            <div 
                onClick={this.props.onClick}
                style={{width:'100%',height:'25%', borderRadius: 5,
                    boxShadow:'3px 3px 3px 3px #707070',
                    backgroundColor: data.background,
                    display:'flex',justifyContent: 'center',alignItems: 'center'}}>
                <text style={{color:WHITE,fontSize: TEXT_SIZES.NORMAL,marginLeft:10}}>
                    {data.title}
                </text>
            </div>  
        )
    }
}

class SingleField extends Component {
    render(){
        return (
            <text style={{
                fontSize:this.props.big!==undefined?TEXT_SIZES.HUGE:TEXT_SIZES.NORMAL,
                color:WHITE}}>
                {this.props.label}
            </text>
        )
    }
}
class ProjectDetail extends Component {
    render(){
        return (
            <div style={{flex:1,alignSelf:'center',padding:20, backgroundColor: BLUE_1,borderRadius: 6}}>

                <div style={{display:'flex',flexDirection: 'row',
                    marginBottom:20,
                    justifyContent: 'space-between',alignItems: 'center'}}>
                        
                    <SingleField label='Project Budget' big={true}/>
                    <SingleField label='$3500' big={true}/>
                </div>

                <div style={{display:'flex',flexDirection: 'row',justifyContent:'space-between'}}>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <SingleField label='Company '/>
                        <SingleField label='Freelancer  '/>
                        <SingleField label='Deadline  '/>
                        <SingleField label='State  '/>
                        <SingleField label='Payment  '/>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
                        <SingleField label=' Facebook'/>
                        <SingleField label=' Freelancer1'/>
                        <SingleField label=' 14/02/2020'/>
                        <SingleField label=' Complete'/>
                        <SingleField label=' Unpaid'/>
                    </div>


                </div>
            </div>
        )
    }
};

export default class PaymentTabComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            task_id:this.props.task_id,
            open_giveup_modal:false,
            open_review_modal:false,
            open_report_modal:false,
            modal_content:'',
            rate_score:2.5
        }
    }

    openGiveupModal=()=>{
        this.setState({
            open_giveup_modal:true
        })
    }

    closeGiveupModal=()=>{
        this.setState({
            open_giveup_modal:false
        })
    }

    openReviewModal=()=>{
        this.setState({
            open_review_modal:true
        })
    }

    closeReviewModal=()=>{
        this.setState({
            open_review_modal:false
        })
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

    onClickBtn=(code)=>{
        switch (code){
            case 'give_up':
                this.openGiveupModal();
                break;
            case 'review':
                this.openReviewModal();
                break;
            case 'report':
                this.openReportModal();
                break;
        }
    }

    giveupTask=()=>{
        let body_req={
            task_id:this.state.task_id,
            content:this.state.modal_content
        };
        alert('Call API give_up_task with body = '+JSON.stringify(body_req))
        // //Call_API_Here
        // axios.get(BASE_URL+`/give_up_task`,{
        //         data:{
        //         }
        //     })
        //     .then(res => {
  
        //         })
        //         .catch(error => console.log(error));
        this.closeGiveupModal();
    }

    reviewTask=()=>{
        let body_req={
            task_id:this.state.task_id,
            content:this.state.modal_content
        };
        alert('Call API review_task with body = '+JSON.stringify(body_req))
        // //Call_API_Here
        // axios.get(BASE_URL+`/review_task`,{
        //         data:{
        //         }
        //     })
        //     .then(res => {
        //         })
        //         .catch(error => console.log(error));
        this.closeReviewModal();
    }

    reportTask=()=>{
        let body_req={
            task_id:this.state.task_id,
            content:this.state.modal_content
        };
        alert('Call API report_task with body = '+JSON.stringify(body_req))
        // //Call_API_Here
        // axios.get(BASE_URL+`/report_task`,{
        //         data:{
        //         }
        //     })
        //     .then(res => {
  
        //         })
        //         .catch(error => console.log(error));
        this.closeReportModal();
    }

    updateInputs=(field,value)=>{
        this.setState({
            [field]:value
        })
    }

    render(){
        const company_view=false;
        console.log('modal_content:',this.state.modal_content)
        return (
            <div  style={styles.container }> 
                <GiveupTaskModal
                    updateInputs={this.updateInputs}
                    is_open={this.state.open_giveup_modal}
                    clickBack={this.closeGiveupModal}
                    clickGiveup={this.giveupTask}/>

                <ReviewTaskModal
                    updateInputs={this.updateInputs} 
                    onChangeRate={value=>this.setState({rate_score:value[0]})}
                    is_open={this.state.open_review_modal}
                    clickBack={this.closeReviewModal}
                    clickReview={this.props.reviewTask}/>

                <ReportTaskModal
                    updateInputs={this.updateInputs}
                    is_open={this.state.open_report_modal}
                    clickBack={this.closeReportModal}
                    clickReport={this.props.reportTask}/>

                <div style={{flex:1}}/>

                <div style={styles.body}>
                    
                    <div style={styles.col1}>
                        <ProjectDetail/>
                    </div>
                  
                    <div style={styles.col2}>
                        {
                            action_buttons[company_view===true?0:1].map((item,index)=>
                                
                                <ActionButtons 
                                    key={''+index}
                                    data={item} 
                                    onClick={()=>this.onClickBtn(item.code)}/>
                            )
                        }
                    </div>
                  
                </div>  
                <div style={{flex:1}}/>
            </div>
        )
    }
}



const styles={
    container:{
        flex:1,
        flexDirection:'column',
        display:'flex'
    },
    body:{
        flex:5,
        width:'100%',
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    col1:{
        flex:1
    },
    col2:{
        flex:1,
        marginLeft:60,
        height:'100%',
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
}
