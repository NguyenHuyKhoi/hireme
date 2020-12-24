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
            
            <div style={styles.container}>
    
                <div style={styles.col1}>

                    <div style={{flex:3,display:'flex',flexDirection:'column'}}>
                        <text style={styles.task_name}>
                            {task.task_name}
                        </text>

                        <text style={styles.task_time}>
                            {task.post_time}
                        </text>

                        <text style={styles.task_description}>
                            {collapseText(task.description,180)}
                        </text>
                    </div>

                    <div style={styles.skills_container}>
                        <SkillsListComponent skills={task.skills} hide_title={true}/>
                    </div>
                    
                
                </div>

                <div style={styles.col2}>
                    <text style={styles.task_budget}>
                        {'$'+task.min_suggested_price+' - '+'$'+task.max_suggested_price}
                    </text>

                    <text style={styles.task_price}>
                        {task.price_type}
                    </text>

                    <Link  
                        to={routePaths.TASK_DETAIL+`/${task.id}`}
                        style={styles.btn_container}>
                        <ButtonComponent label='Bid Now'/>
                    </Link>
                        
                </div>

            </div>


    
        )
    }
}


const styles={
    container:{
        width:'55vw',
        height:250,
        backgroundColor: WHITE,
        boxShadow:'3px 3px 3px 3px #707070',
        marginTop:40,            
        display:'flex',
        flexDirection: 'row'
    },
    col1:{
        flex:8,
        display:'flex',
        flexDirection: 'column',
        padding: 20
    },
    task_name:{
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK
    },
    task_time:{
        fontSize:TEXT_SIZES.SMALL,
        color:GRAY_2
    },
    task_description:{
        marginTop:10,
        fontSize:TEXT_SIZES.SMALL,
        color:GRAY_2  
    },
    skills_container:{
        display:'flex',
        flex:1  
    },
    col2:{
        flex:4,
        display:'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: GRAY_5
    },
    task_budget:{
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK
    },
    task_price:{
        fontSize:TEXT_SIZES.SMALL,
        color:GRAY_2
    },
    btn_container:{
        marginTop:15,
        width:'60%',
        textDecoration:'none'
    }
}
