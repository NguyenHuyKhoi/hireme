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
import { convertFullDateToOnlyDay, displayState } from '../../utils/helper';

const chats=sample_db.chats   ;

const action_buttons=[
        {
            title : 'Khi dự án đang triển khai, nhấn vào đây để từ bỏ và chịu phạt 50% chi phí dự án.',
            background:YELLOW_1,
            code:'give_up'
        },
        {
            title : 'Khi dự án hoàn thành, nhấn vào đây để gửi nhận xét về dự án và đối tác.',
            background:GREEN_1,
            code:'review'
        },
        {
            title : 'Khi dự án có vần đề gì đó, nhấn vào đây để gửi báo cáo lên quản trị viên.',
            background:RED_1,
            code:'report'
        }
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
        const {budget,company_name,freelancer_name,deadline,state}=this.props.infor
        return (
            <div style={{flex:1,alignSelf:'center',padding:20, backgroundColor: BLUE_1,borderRadius: 6}}>

                <div style={{display:'flex',flexDirection: 'row',
                    marginBottom:20,
                    justifyContent: 'space-between',alignItems: 'center'}}>
                        
                    <SingleField label='Kinh phí dự án' big={true}/>
                    <SingleField label={budget+'vnd'} big={true}/>
                </div>

                <div style={{display:'flex',flexDirection: 'row',justifyContent:'space-between'}}>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <SingleField label='Công ty '/>
                        <SingleField label='Freelancer  '/>
                        <SingleField label='Deadline  '/>
                        <SingleField label='Trạng thái  '/>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
                        <SingleField label={company_name}/>
                        <SingleField label={freelancer_name}/>
                        <SingleField label={deadline}/>
                        <SingleField label={state}/>
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
            task:this.props.task,
            modals:[false,false,false],
            modal_content:'',
            rate_score:2.5
        }
    }

    switchModal=(index,state)=>{

        console.log('paymentTab switchModal ,',index,this.state.task.state);
        if (index===0 && this.state.task.state!=='doing'){
            alert('Dự án đã qua giai đoạn "Đang triển khai", không thể hủy.');
            return; 
        }

        if (index===1 && this.state.task.state!=='done'){
            alert('Dự án chưa hoàn thành, không thể gửi phản hồi.');
            return; 
        }


        if (index===2 && this.state.task.state==='done'){
            alert('Dự án đã hoàn thành, không thể gửi báo cáo.');
            return; 
        }
        let modals=this.state.modals;
        modals[index]=state;
        this.setState({
            modals
        })
    }

    giveupTask=()=>{
        this.switchModal(0,false);
    }

    reviewTask=()=>{
        this.switchModal(1,false);
    }

    reportTask=()=>{
        this.switchModal(2,false);
    }

    updateInputs=(field,value)=>{
        this.setState({
            [field]:value
        })
    }

    render(){
        const company_view=false;
        const task=this.props.task;
        const accepted_bidding=task.accepted_bidding;
        console.log('paymentTab:',task,accepted_bidding)
        return (
            <div  style={styles.container }> 
                <GiveupTaskModal
                    updateInputs={this.updateInputs}
                    is_open={this.state.modals[0]}
                    clickBack={()=>this.switchModal(0,false)}
                    clickGiveup={this.giveupTask}/>

                <ReviewTaskModal
                    updateInputs={this.updateInputs} 
                    onChangeRate={value=>this.setState({rate_score:value[0]})}
                    is_open={this.state.modals[1]}
                    clickBack={()=>this.switchModal(1,false)}
                    clickReview={this.props.reviewTask}/>

                <ReportTaskModal
                    updateInputs={this.updateInputs}
                    is_open={this.state.modals[2]}
                    clickBack={()=>this.switchModal(2,false)}
                    clickReport={this.props.reportTask}/>

                <div style={{flex:1}}/>

                <div style={styles.body}>
                    
                    <div style={styles.col1}>
                        <ProjectDetail infor={{
                            budget:accepted_bidding.budget,
                            company_name:task.company.company_name,
                            freelancer_name:accepted_bidding.freelancer.username,
                            deadline:convertFullDateToOnlyDay(task.deadline),
                            state:displayState(task.state)
                        }}/>
                    </div>
                  
                    <div style={styles.col2}>
                        {
                            action_buttons.map((item,index)=>
                                
                                <ActionButtons 
                                    key={''+index}
                                    data={item} 
                                    onClick={()=>this.switchModal(index,true)}/>
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
