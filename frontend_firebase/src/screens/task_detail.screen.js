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

import firebase from '../firebase/firebase'

import {connect }from 'react-redux'
import * as action from '../redux/action/user.action'

class TaskDetailScreen extends Component {
    constructor(props){
        super(props);

        this.state={
            open_report_modal:false,
            task:null,
            biddings:[],
            task_id:this.props.match.params.id
        };
        this.path='/task/'+this.state.task_id
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
    };

    getTaskDetail=async ()=>{
        let res=await firebase.get(this.path)
        console.log('task_detail:',res);
        await this.setState({
            task:{
                ...res,
                biddings:res.biddings===undefined?[]:Object.values(res.biddings)
            },
          //  reviews:api.get_reviews_freelancer
        })
    }

    componentDidMount=async ()=>{

        await this.getTaskDetail();
      
    }
    

    updateInputs=(part,field,value)=>{
        console.log('update_input:',part,field,value)

        this.setState({
            [part]:{
                ...this.state[part],
                [field]:value
            }
          
        })
    }

    placeBidding=async ()=>{  

        
        let u=this.props.user_infor;

        console.log('userInfor :',u);
        if (u.id===undefined){
            alert('Please sigin  in to place a bid !');
            return ;
        };

        if (u.type==='company' || u.type==='admin'){
            alert('Only freelancer can place a bid !!! ');
            return ;
        };

        let myBidding=await firebase.get(this.path+'/biddings/'+u.id);

        console.log('taskDetail myBidding',myBidding)
        if (myBidding!==null && myBidding!==undefined){
            alert('You bidded this task !!!');
            return ;
        }

        let user={
            id:u.id,
            username:u.username,
            avatar:u.avatar===undefined?'':u.avatar
        };

        console.log('placeBidding:',this.state.bidding)

        console.log('placeBidding:',{
                ...this.state.bidding,
                poster:user,
                post_time:(new Date()).toDateString()
            })

        await firebase.set(this.path+'/biddings/'+u.id,{
            ...this.state.bidding,
            id:u.id,
            freelancer:user,
            post_time:(new Date()).toDateString()
        });

        await this.getTaskDetail();
     
        let company=await firebase.get(this.path+'/company/');

        console.log('taskDetail placeBidding company:',company)
        let chat_key=await firebase.push('/chat/',{
            task_id:this.state.task_id,
            users:[
                {
                    id:u.id,
                    username:u.username,
                    avatar:u.avatar!==undefined?u.avatar:''
                },
                {
                    id:company.id,
                    username:company.username,
                    avatar:company.avatar!==undefined?company.avatar:''

                },
            ]
        });

        await firebase.push('/chat/'+chat_key+'/messages/',{
            post_time:(new Date()).toDateString(),
            content:' I want to bidding this task with budget :'+this.state.bidding.budget 
                +' on duration :'+this.state.bidding.duration,
            user: {
                id:u.id,
                username:u.username,
                avatar:u.avatar!==undefined?u.avatar:''
            }  
        });

        alert('Place a bid successfully!');


    }

    reportTask=()=>{
      
    }

    render(){
        const task=this.state.task;
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

                        <div style={styles.task_body}>
                            <div style={{flex:1}}/>
                                
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
                                        task.biddings.length===0?
                                        <text style={{fontSize: TEXT_SIZES.NORMAL,color:BLACK}}>
                                            There is not any biddings.Be the first !
                                        </text>
                                        :
                                        <BiddingListComponent 
                                            task={task}/>

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

                                {/* {
                                    task.state==='bidding'?
                                    <div style={{marginTop:50}}>
                                        <TaskPlaceBidComponent
                                        placeBidding={this.placeBidding}
                                        updateInputs={this.updateInputs}/>
                                    </div>
                                    :
                                    null
                                } */}

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

const mapStateToProps = state => ({
	user_infor: state.user_infor,
});

export default connect(mapStateToProps,action)(TaskDetailScreen)