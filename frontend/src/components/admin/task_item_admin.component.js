//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths, TEXT_SIZES } from '../../utils/constants'
import { WHITE,GRAY_4, BLACK, YELLOW_1, GRAY_2, GRAY_3, RED_1, RED_2, BLUE_1, GREEN_1 } from '../../utils/palette';
import ButtonComponent from '../common/button.component';
import RateScoreComponent from '../common/rate_score.component'
import SmallFieldComponent from '../common/small_field.component';
import BanTaskModal from './ban_task.modal';
import ViewReportsModal from './view_reports.modal';
import {collapseText, convertFullDateToOnlyDay} from '../../utils/helper'
export default class TaskItemBriefAdminComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            open_ban_modal:false,
            open_view_reports_modal:false
        }
    }

    openBanModal=()=>{
        this.setState({
            open_ban_modal:true
        })
    }

    closeBanModal=()=>{
        this.setState({
            open_ban_modal:false
        })
    }
    openViewReportsModal=()=>{
        this.setState({
            open_view_reports_modal:true
        })
    }

    closeViewReportsModal=()=>{
        this.setState({
            open_view_reports_modal:false
        })
    }

    banTask=()=>{
        alert('Ban task :');
        this.closeBanModal();
    }

    rejectReport=(review)=>{
        alert('Reject report :');
        this.closeViewReportsModal();
    }

    banTaskFromReport=(review)=>{
        alert('Ban task from report :');
        this.closeViewReportsModal();
    }
    render(){
        const index=this.props.index;
        const task=this.props.task;
        const company=task.company

        return (
            
            <div style={{display:'flex',width:'100%',height:80,alignSelf:'baseline',
                backgroundColor:index%2===0?WHITE:GRAY_3,
                flexDirection: 'row'}}>

                <BanTaskModal is_open={this.state.open_ban_modal}
                    clickBack={this.closeBanModal}
                    clickBan={this.banTask} />

                <ViewReportsModal 
                    is_open={this.state.open_view_reports_modal}
                    clickClose={this.closeViewReportsModal}
                    clickReject={(review)=>this.rejectReport(review)}
                    clickBanTask={(review)=>this.banTaskFromReport(review)}/>
    
                <div style={{flex:0.5}}/>
                <div style={{display:'flex',flex:6,flexDirection: 'column',justifyContent:'center'}}>

                    <div style={{display:'flex',flexDirection:'row'}}>
                        <text style={{fontSize:TEXT_SIZES.NORMAL,color:BLACK }}>
                            {collapseText(task.name,30)}
                        </text>

                        <div style={{marginLeft:30}}>
                            <SmallFieldComponent 
                                background_color={
                                    task.status==='bidding'?YELLOW_1
                                        :task.status==='doing'?BLUE_1
                                            :task.status==='done'?GREEN_1
                                                :task.status==='canceled' 
                                                    || task.status==='reported'?RED_1:GRAY_2
                                } 
                                label_color={WHITE} 
                                label={task.status}/>
                        </div>
                     
                    </div>

                    <div style={{width:'100%',display:'flex',flexDirection:'row',
                        justifyContent: 'space-between'}}>

                        <div style={{display:'flex',flex:1}}>
                            <text style={{fontSize:TEXT_SIZES.SMALL,color:BLACK}}>
                                {'Posted :'+company.name}
                                
                            </text>
                        </div>

                        <div style={{display:'flex',flex:1}}    >
                            <text style={{fontSize:TEXT_SIZES.SMALL,color:BLACK}}>
                                {'On : '+convertFullDateToOnlyDay(task.post_time)}
                            </text>
                        </div>
                    </div>
                
        
                </div>

                <div style={{flex:4,display:'flex',justifyContent: 'center',alignItems: 'center'}}>
                    <Link 
                        to={routePaths.TASK_DETAIL}
                        style={{textDecoration:'none',width:'80%',marginRight: 15}}>
                        <ButtonComponent label='Detail' color={BLUE_1}/>
                    </Link>

                    <div 
                        onClick={this.openBanModal}  
                        style={{textDecoration:'none',width:'80%',marginRight: 15}}>
                        <ButtonComponent label='Ban' color={RED_1}/>
                    </div>

                    <div 
                        onClick={this.openViewReportsModal}  
                        style={{textDecoration:'none',width:'100%',marginRight: 15}}>
                        <ButtonComponent label='View Reports' color={YELLOW_1}/>
                    </div>
                </div>
                
                        
        
                <div style={{flex:0.5}}/>
            </div>


    
        )
    }
}
