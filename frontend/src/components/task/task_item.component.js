//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths, TEXT_SIZES } from '../../utils/constants'
import { collapseText } from '../../utils/helper'
import { BLACK, GRAY_2, GRAY_5, WHITE } from '../../utils/palette'
import ButtonComponent from '../common/button.component'
import SkillsListComponent from '../common/skills_list.component'
export default class TaskItemComponent extends Component {

    render(){
        const task=this.props.task;
        return (
            
            <div style={{width:'55vw',height:250,backgroundColor: WHITE,
                boxShadow:'3px 3px 3px 3px #707070',
                marginTop:40,            
                display:'flex',flexDirection: 'row'}}>
    
                <div style={{flex:8,display:'flex',flexDirection: 'column',padding: 20}}>

                    <div style={{flex:3,display:'flex',flexDirection:'column'}}>
                        <text style={{fontSize:TEXT_SIZES.NORMAL,color:BLACK}}>
                            {task.task_name}
                        </text>

                        <text style={{fontSize:TEXT_SIZES.SMALL,color:GRAY_2}}>
                            {task.post_time}
                        </text>

                        <text style={{marginTop:10,fontSize:TEXT_SIZES.SMALL,color:GRAY_2  }}>
                            {collapseText(task.description,180)}
                        </text>
                    </div>

                    <div style={{display:'flex',flex:1  }}>
                        <SkillsListComponent skills={task.skills} hide_title={true}/>
                    </div>
                    
                
                </div>

                <div style={{flex:4,display:'flex',justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',backgroundColor: GRAY_5}}>
                    <text style={{fontSize:18,color:BLACK}}>
                        {'$'+task.min_suggested_price+' - '+'$'+task.max_suggested_price}
                    </text>

                    <text style={{fontSize:16,color:GRAY_2}}>
                        {task.price_type}
                    </text>

                    <Link  
                        to={routePaths.TASK_DETAIL+`/${task.id}`}
                        style={{marginTop:15,width:'60%',textDecoration:'none'}}>
                        <ButtonComponent label='Bid Now'/>
                    </Link>
                        
                </div>

                

                    


              
                                                

            </div>


    
        )
    }
}
