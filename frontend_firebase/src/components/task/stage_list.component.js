//import from library 
import React, {Component} from 'react'
import { TASK_TRANSACTION, TEXT_SIZES } from '../../utils/constants'
import { convertFullDateToOnlyDay } from '../../utils/helper'
import { BLACK, GREEN_1, RED_1, WHITE } from '../../utils/palette'
import ButtonComponent from '../common/button.component'
import NewStageItemComponent from './new_stage_item.component'
import StageItemComponent from './stage_item.component'


import firebase from '../../firebase/firebase'

import firebaseConfig from '../../firebase/config'
export default class StageListComponent extends Component {

    confirmDoneTask=async ()=>{
        await firebase.taskTransact(this.props.task,TASK_TRANSACTION.DONE_PAY)
        alert('Xác nhận hoàn thành dự án thành công, tiền đã chuyển cho freelancer');
    }

    notifyDoneTask=()=>{
        alert('Đã gửi thông báo hoàn thành dự án cho công ty. ');
    }
    render(){
        const task=this.props.task;
        const stages=task.stages;
        const type=this.props.type;
        console.log('stage_list:',stages);
        return (
            <div style={styles.container}>

                    {
                        stages.map((item,index)=>
                            <div style={{width:'40vw'}}>
                                <StageItemComponent 
                                    stage={item}
                                    is_edit={type==='freelancer'}
                                    task_id={task.id}
                                    key={''+index}/>
                            </div>
                            
                        )
                    
                    }

                    {
                        type==='freelancer' && task.process<100?
                        <div style={{width:'40vw'}}>
                            <NewStageItemComponent
                                task={task}
                                />
                        </div>
                        :
                        null
                    }

                  

                    <div style={styles.last_col}>
                        <div style={{...styles.deadline_container,
                            backgroundColor: task.process!==100?RED_1:GREEN_1}}>
                            <text style={styles.deadline_header}>
                                DEADLINE
                            </text>
                            <text style={styles.deadline_time}>
                                {convertFullDateToOnlyDay(task.deadline)}
                            </text>

                            <text style={styles.deadline_time}>
                                {'Đã xong:'+(task.process)+'%'}
                            </text>
                        </div>


                        

                        {
                            task.process==100?
                                type==='company'?
                                    task.state==='doing'?
                                        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                            <text style={styles.confirm_notif}>
                                                    Dự án đã đạt 100% tiến độ, xác nhận hoàn thành để thanh toán tiền cho freelancer :
                                            </text>

                                            <div style={styles.btn_container}>
                                                <ButtonComponent 
                                                    color={GREEN_1}
                                                    onClick={this.confirmDoneTask}
                                                    label='Xác nhận hoàn thành'/>
                                            </div>
                                        </div>
                                        :
                                        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                            <text style={styles.confirm_notif}>
                                                    Dự án đã được xác nhận hoàn thành. Chi phí cũng đã được thanh toán cho freelancer
                                            </text>
                                        </div>

                                :
                                    task.state==='doing'?
                                        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                            <text style={styles.confirm_notif}>
                                                    Dự án đã đạt 100% tiến độ, thông báo công ty thanh toán dự án:
                                            </text>

                                            <div style={styles.btn_container}>
                                                <ButtonComponent 
                                                    color={GREEN_1}
                                                    onClick={this.notifyDoneTask}
                                                    label='Gửi thông báo'/>
                                            </div>
                                        </div>
                                        :
                                        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                                            <text style={styles.confirm_notif}>
                                                    Dự án đã được xác nhận hoàn thành. Bạn đã nhận được chi phí cho dự án này. Hãy kiểm tra trong lịch sử giao dịch.
                                            </text>
                                        </div>

                            :
                            null
                      
                        }
                      
                    </div>

                   
         

            </div>
                    
    
        )
    }
}


const styles={
    container:{ 
        display:'flex',
        flexDirection: 'row',
        backgroundColor:WHITE, 
        overflowX:'scroll',
        paddingLeft:30,
        boxShadow:'5px 5px 25px 3px #707070'
    },
    last_col:{
        display:'flex',
        width:400,
        paddingTop:50,
        flexDirection:'column',
        alignItems: 'center'
    },
    deadline_container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width: 150,
        padding:15,
        flexDirection:'column',
        borderRadius:4,
        backgroundColor: RED_1
    },
    deadline_header:{
        fontSize:TEXT_SIZES.NORMAL,
        color:WHITE
    },
    deadline_time:{
        fontSize:TEXT_SIZES.SMALL,
        color:WHITE
    },
    confirm_notif:{
        marginTop:20,
        fontSize:TEXT_SIZES.NORMAL,
        width: 360,
        color:BLACK,
        textAlign:'center'
    },
    btn_container:{
        marginTop:20,
        width:200
    }
}
