//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths, TEXT_SIZES } from '../../utils/constants'
import { BLACK, BLUE_1, BLUE_2, GRAY_2, GRAY_3, WHITE } from '../../utils/palette'
import SmallFieldComponent from '../common/small_field.component'
import banner from '../../assets/images/banner.jpg'

import logo from '../../assets/images/logo.png'
class ProjectBudget extends Component {
    render(){
        const budget=this.props.budget;
        return (
            <div style={{width: '100%',height:'60%',borderRadius:6,
                backgroundColor:BLUE_1,display: 'flex',justifyContent: 'center',
                flexDirection:'column',
                alignItems: 'center'}}>
                <text style={{fontSize:TEXT_SIZES.SMALL,color:GRAY_3}}>
                    Chi phí
                </text>

                <text style={{fontSize:TEXT_SIZES.NORMAL,color:WHITE,textAlign:'center'}}>
                    {budget[0]+'vnd - '+budget[1]+'vnd'}
                </text>
            </div>
        )
    }
}
export default class TaskDetailHeaderComponent extends Component {
    render(){
        const task=this.props.task
        console.log('task_header :',task)
        const company=task.company
        return (
            <div style={styles.container}>

            <div style={{flex:1}}/>

            <div style={styles.col1}>
                <img src={company.avatar!==''?company.avatar:logo}
                    style={{width:100,height:100,borderRadius:50}}/>
                
                <div style={styles.infor}>

                    <text style={styles.task_name}>
                        {task.task_name}
                    </text>

                    <Link 
                        to={routePaths.COMPANY_DETAIL+`/${company.id}`}
                        style={styles.company_name}>
                        {company.company_name}
                    </Link>

                </div>
            </div>
            
            <div style={{flex:1}}/>

            <div style={styles.col2}>
                <ProjectBudget budget={[task.min_budget,task.max_budget]}/>

            </div>

            <div style={{flex:1}}/>



        </div>


    
        )
    }
}


const styles={
    container:{
        width:'100%',
        height:150,
        backgroundImage:`url(${banner})`,
        backgroundRepeat:  'no-repeat',
        backgroundSize:'cover',
        display:'flex',
        flexDirection: 'row'
    },
    col1:{
        flex:5,
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    col2:{
        flex:2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar:{
        height: '60%',
        aspectRatio:1,
        borderRadius:'50%'
    },
    infor:{
        marginLeft:15,
        display:'flex',
        flex:1,
        flexDirection: 'column'
    },
    task_name:{
        fontSize:TEXT_SIZES.BIG,
        color:BLACK
    },
    company_name:{
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK,
        marginBottom:5,
        textDecoration:'none'
    }
    
}
