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
        {
            title : 'Khi dự án đang chạy, nhấn vào đây để từ bỏ và chịu phạt 50% chi phí dự án.',
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
            modals:[false,false,false],
            modal_content:'',
            rate_score:2.5
        }
    }

    switchModal=(index,state)=>{

        let modals=this.state.modals;
        modals[index]=state;
        this.setState({
            modals
        })
    }

    giveupTask=()=>{
        let body_req={
            task_id:this.state.task_id,
            content:this.state.modal_content
        };
        this.switchModal(0,false);
    }

    reviewTask=()=>{
        let body_req={
            task_id:this.state.task_id,
            content:this.state.modal_content
        };
        this.switchModal(1,false);
    }

    reportTask=()=>{
        let body_req={
            task_id:this.state.task_id,
            content:this.state.modal_content
        };
        this.switchModal(2,false);
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
                        <ProjectDetail/>
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
