//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths, textSizes } from '../../utils/constants'
import { BLACK, BLUE_1, BLUE_2, GRAY_2, GRAY_3, WHITE } from '../../utils/palette'
import SmallFieldComponent from '../common/small_field.component'
import banner from '../../assets/images/banner.jpg'

class ProjectBudget extends Component {
    render(){
        return (
            <div style={{width: '100%',height:'60%',borderRadius:6,
                backgroundColor:BLUE_1,display: 'flex',justifyContent: 'center',
                flexDirection:'column',
                alignItems: 'center'}}>
                <text style={{fontSize:textSizes.SMALL,color:GRAY_3}}>
                    Project Budget
                </text>

                <text style={{fontSize:textSizes.NORMAL,color:WHITE}}>
                    $2200 - $6000
                </text>
            </div>
        )
    }
}
export default class TaskDetailHeaderComponent extends Component {
    render(){
        return (
            <div style={{width:'100%',height:150,
                backgroundImage:`url(${banner})`,
                backgroundRepeat:  'no-repeat',
                backgroundSize:'cover',
                display:'flex',flexDirection: 'row'}}>

            <div style={{flex:1}}/>
            <div style={{flex:5,display:'flex',flexDirection: 'row',alignItems: 'center'}}>
                <img src='https://randomuser.me/api/portraits/men/17.jpg'
                    style={{height: '60%',aspectRatio:1,borderRadius:'50%'}}/>
                
                <div style={{marginLeft:15,display:'flex',flex:1,flexDirection: 'column'}}>
                    <text style={{fontSize:textSizes.BIG,color:BLACK}}>
                        Food delivery Mobile Application
                    </text>

                    <text style={{fontSize:textSizes.NORMAL,color:BLACK,marginBottom:5}}>
                        A software company
                    </text>
                </div>
            </div>
            <div style={{flex:1}}/>

            <div style={{flex:2,display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                <ProjectBudget/>

            </div>

            <div style={{flex:1}}/>



        </div>


    
        )
    }
}


