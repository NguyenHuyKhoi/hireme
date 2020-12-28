//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK, RED_1, WHITE } from '../../utils/palette'
import ButtonComponent from '../common/button.component'
import NewStageItemComponent from './new_stage_item.component'
import StageItemComponent from './stage_item.component'

export default class StageListComponent extends Component {
    render(){
        const stages=this.props.stages!==undefined?this.props.stages:[];
        const type=this.props.type;
        console.log('stage_list:',stages);
        return (
            <div style={styles.container}>

                    {
                        stages.map((item,index)=>
                            <div style={{width:'40vw'}}>
                                <StageItemComponent 
                                    stage={item}
                                    key={''+index}/>
                            </div>
                            
                        )
                    
                    }

                    {
                        type==='freelancer'?
                        <div style={{width:'40vw'}}>
                            <NewStageItemComponent
                                task_id={this.props.task_id}
                                />
                        </div>
                        :
                        null
                    }

                  

                    <div style={styles.last_col}>


                        <div style={styles.deadline_container}>

                            <text style={styles.deadline_header}>
                                DEADLINE
                            </text>
                            <text style={styles.deadline_time}>
                                08:00
                            </text>
                            <text style={styles.deadline_time}>
                                02/12/2020
                            </text>
                        </div>

                        

                        <text style={styles.confirm_notif}>
                                Nếu dự án đạt 100% tiến độ, xác nhận hoàn thành để thanh toán tiền cho freelancer :
                        </text>

                        <div style={styles.btn_container}>
                            <ButtonComponent 
                                label='Xác nhận hoàn thành'/>
                        </div>
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
