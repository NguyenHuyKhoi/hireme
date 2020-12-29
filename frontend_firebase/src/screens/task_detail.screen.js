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
import SingleFieldComponent from '../components/common/single_field.component'
import api from '../sample_db/fake_api_responses.json'
import { TEXT_SIZES } from '../utils/constants';
import { convertFullDateToOnlyDay,convertFullDateToHour, toArray, convertDateToHour } from '../utils/helper';

import firebase from '../firebase/firebase'
import firebaseConfig from '../firebase/config'

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

    componentDidMount= ()=>{
        firebaseConfig.database().ref().child(this.path)
            .on('value',snapshot=>{
                let data=snapshot.val();
                console.log('updateTaskDetail:',data);
                this.setState({
                    task:{
                        ...data,
                        biddings:toArray(data.biddings),
                        skills:toArray(data.skills)
                    },
                  //  reviews:api.get_reviews_freelancer
                })
            })

       
    }
    

    updateInput=(part,field,value)=>{
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
            alert('Vui lòng đăng nhập để có thể đấu giá.!');
            return ;
        };

        if (u.type==='company' || u.type==='admin'){
            alert('Chỉ tài khoản freelancer mới có thể đấu giá.');
            return ;
        };

        let myBidding=await firebase.get(this.path+'/biddings/'+u.id);

        console.log('taskDetail myBidding',myBidding)
        if (myBidding!==null && myBidding!==undefined){
            alert('Bạn không thể đấu giá lại dự án này.');
            return ;
        }


        let bi=this.state.bidding;

        if (bi===undefined || bi.budget===undefined || bi.duration===undefined){
            alert('Vui lòng điền đủ các trường !');
            return ;
        }
        let user={
            id:u.id,
            username:u.username,
            avatar:u.avatar===undefined?'':u.avatar
        };

        console.log('placeBidding:',bi)

        console.log('placeBidding:',{
                ...bi,
                poster:user,
                post_time:convertDateToHour(new  Date())
            })

        await firebase.set(this.path+'/biddings/'+u.id,{
            ...bi,
            id:u.id,
            freelancer:user,
            post_time:convertDateToHour(new  Date())
        });

     
        let company=await firebase.get(this.path+'/company/');

        console.log('taskDetail placeBidding 2 partner:',company,u)
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
                    username:company.company_name,
                    avatar:company.avatar!==undefined?company.avatar:''

                },
            ]
        });

        await firebase.push('/chat/'+chat_key+'/messages/',{
            post_time:convertDateToHour(new  Date()),
            content:' I want to bidding this task with budget :'+this.state.bidding.budget 
                +' on duration :'+this.state.bidding.duration,
            user: {
                id:u.id,
                username:u.username,
                avatar:u.avatar!==undefined?u.avatar:''
            }  
        });

        alert('Đấu giá thành công!');


    }

    reportTask=()=>{
      
    }

    render(){
        const task=this.state.task;
        console.log('taskDetail render')
        return (

            <div style={styles.container}>

                {/* header */}
                <HeaderBarComponent/>

                <ReportTaskModal
                    updateInput={this.updateInput}
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
                                        title='Về dự án:'
                                        content={task.description}/>
                                </div>

                                <div style={{marginTop:50}}>
                                    <BiddingListComponent 
                                            task={task}/>

                           
                                    
                                </div>
                            
                            </div>

                            <div style={{flex:0.5}}/>

                            <div style={styles.task_body_col2}>
                                <div style={{marginTop:20}}>
                                    <SingleFieldComponent field={{
                                        key:'Danh mục:',
                                        value:task.category
                                    }}/>
                                </div>

                                <div style={{marginTop:20}}>
                                    <SkillsListComponent skills={task.skills}/>
                                </div>
                                <div style={{width: '100%',marginTop:50}}>
                                    <ButtonComponent color={GREEN_2} text_color={GREEN_1}
                                        label={task.post_time}/>
                                </div>

                                {
                                    task.state==='bidding'?
                                    <div style={{marginTop:50}}>
                                        <TaskPlaceBidComponent
                                        placeBidding={this.placeBidding}
                                        updateInput={this.updateInput}/>
                                    </div>
                                    :
                                    null
                                }



                               

                                <div style={{width: '100%',marginTop:50}}>
                                    <ButtonComponent 
                                        onClick={this.openReportModal}
                                        color={RED_2} text_color={WHITE}
                                        label='Báo cáo'/>
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