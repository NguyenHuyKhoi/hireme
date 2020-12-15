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
            
            <div style={{
                ...styles.container,
                backgroundColor:index%2===0?WHITE:GRAY_3}}>

                <BanTaskModal is_open={this.state.open_ban_modal}
                    clickBack={this.closeBanModal}
                    clickBan={this.banTask} />

                <ViewReportsModal 
                    is_open={this.state.open_view_reports_modal}
                    clickClose={this.closeViewReportsModal}
                    clickReject={(review)=>this.rejectReport(review)}
                    clickBanTask={(review)=>this.banTaskFromReport(review)}/>
    
                <div style={{flex:0.5}}/>

                <div style={styles.col1}>

                    <div style={styles.col1_row1}>
                        <text style={styles.normal_text}>
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

                    <div style={styles.col1_row2}>

                        <div style={styles.field_container}>
                            <text style={styles.small_text}>
                                {'Posted :'+company.name}
                                
                            </text>
                        </div>

                        <div style={styles.field_container}    >
                            <text style={styles.small_text}>
                                {'On : '+convertFullDateToOnlyDay(task.post_time)}
                            </text>
                        </div>
                    </div>
                
        
                </div>

                <div style={styles.col2}>
                    <Link 
                        to={routePaths.TASK_DETAIL+`/${task.id}`}
                        style={styles.btn_container}>
                        <ButtonComponent label='Detail' color={BLUE_1}/>
                    </Link>

                    <div 
                        onClick={this.openBanModal}  
                        style={styles.btn_container}>
                        <ButtonComponent label='Ban' color={RED_1}/>
                    </div>

                    <div 
                        onClick={this.openViewReportsModal}  
                        style={styles.btn_container}>
                        <ButtonComponent label='View Reports' color={YELLOW_1}/>
                    </div>
                </div>
                
                        
        
                <div style={{flex:0.5}}/>
            </div>


    
        )
    }
}


const styles={
    container:{
        display:'flex',
        width:'100%',
        height:80,
        alignSelf:'baseline',
        flexDirection: 'row'
    },
    col1:{
        display:'flex',
        flex:6,
        flexDirection: 'column',
        justifyContent:'center'
    },
    col1_row1:{
        display:'flex',
        flexDirection:'row'
    },
    normal_text:{
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK 
    },
    col1_row2:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    field_container:{
        display:'flex',
        flex:1
    },
    small_text:{
        fontSize:TEXT_SIZES.SMALL,
        color:BLACK
    },
    col2:{
        flex:4,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn_container:{
        textDecoration:'none',
        width:'80%',
        marginRight: 15
    }
}
