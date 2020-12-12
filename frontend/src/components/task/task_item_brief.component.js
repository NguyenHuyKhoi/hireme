//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths, textSizes } from '../../utils/constants'
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
            
            <div style={{display:'flex',width:'100%',height:80,alignSelf:'baseline',
                backgroundColor:index%2===0?WHITE:GRAY_3,
                flexDirection: 'row'}}>
    
                <div style={{flex:0.5}}/>
                <div style={{display:'flex',flex:8,flexDirection: 'column',justifyContent:'center'}}>

                    <div style={{display:'flex',flexDirection:'row'}}>
                        <text style={{fontSize:textSizes.NORMAL,color:BLACK }}>
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

                      

                        <div style={{display:'flex',flex:1}}    >
                            {
                                task.post_time!==undefined?
                                <text style={{fontSize:textSizes.SMALL,color:BLACK}}>
                                    {'Posted :'+convertFullDateToOnlyDay(task.post_time)}
                                </text>
                                :
                                null
                            }
                        </div>

                        <div style={{display:'flex',flex:1}}    >
                            {
                                task.undertaked_time!==undefined?
                                <text style={{fontSize:textSizes.SMALL,color:BLACK}}>
                                    {'Posted :'+convertFullDateToOnlyDay(task.undertaked_time)}
                                </text>
                                :
                                null
                            }
                        </div>

                        <div style={{display:'flex',flex:1}}>
                            {
                                task.done_time!==undefined?
                                <text style={{fontSize:textSizes.SMALL,color:BLACK}}>
                                    {'Posted :'+convertFullDateToOnlyDay(task.done_time)}
                                </text>
                                :
                                null
                            }
                         
                        </div>
                    </div>
                
        
                </div>

                <div style={{flex:1,display:'flex',justifyContent: 'center',alignItems: 'center'}}>
                    <Link 
                        to={routePaths.DASHBOARD_TASK_MANAMENT}
                        style={{textDecoration:'none',width:'80%'}}>
                        <ButtonComponent label='Detail'/>
                    </Link>
                </div>
                
                        
        
                <div style={{flex:0.5}}/>
            </div>


    
        )
    }
}
