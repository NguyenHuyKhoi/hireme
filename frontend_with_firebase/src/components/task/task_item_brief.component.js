//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths, TEXT_SIZES } from '../../utils/constants'
import { collapseText, convertFullDateToOnlyDay } from '../../utils/helper';
import { WHITE,GRAY_4, BLACK, YELLOW_1, GRAY_2, GRAY_3, BLUE_1, GREEN_1, RED_1 } from '../../utils/palette';
import ButtonComponent from '../common/button.component';
import RateScoreComponent from '../common/rate_score.component'
import SmallFieldComponent from '../common/small_field.component';

export default class TaskItemBriefComponent extends Component {
    render(){
        const task=this.props.task
        const index=this.props.index;

        console.log('task_status',task.status);
        return (
            
            <div style={{...styles.container,
                backgroundColor:index%2===0?WHITE:GRAY_3}}>
    
                <div style={{flex:0.5}}/>

                <div style={styles.col1}>

                    <div style={styles.col1_row1}>
                        <text style={styles.task_name}>
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

                        <div style={styles.time_part}>
                            {
                                task.post_time!==undefined?
                                <text style={styles.time_text}>
                                    {'Posted :'+convertFullDateToOnlyDay(task.post_time)}
                                </text>
                                :
                                null
                            }
                        </div>

                        <div style={styles.time_part}    >
                            {
                                task.undertaked_time!==undefined?
                                <text style={styles.time_text}>
                                    {'Posted :'+convertFullDateToOnlyDay(task.undertaked_time)}
                                </text>
                                :
                                null
                            }
                        </div>

                        <div style={styles.time_part}>
                            {
                                task.done_time!==undefined?
                                <text style={styles.time_text}>
                                    {'Posted :'+convertFullDateToOnlyDay(task.done_time)}
                                </text>
                                :
                                null
                            }
                         
                        </div>
                    </div>
                
        
                </div>

                <div style={styles.col2}>
                    <Link 
                        to={routePaths.DASHBOARD_TASK_MANAMENT+`/${task.id}`}
                        style={styles.btn_container}>
                        <ButtonComponent label='Detail'/>
                    </Link>
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
        flex:8,
        flexDirection: 'column',
        justifyContent:'center'
    },
    col1_row1:{
        display:'flex',
        flexDirection:'row'
    },
    col1_row2:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    task_name:{
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK
    },
    time_part:{
        display:'flex',
        flex:1
    },
    time_text:{
        fontSize:TEXT_SIZES.SMALL,
        color:BLACK
    },
    col2:{
        flex:1,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn_container:{
        textDecoration:'none',
        width:'80%'
    }
}