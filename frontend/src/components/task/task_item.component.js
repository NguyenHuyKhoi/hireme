//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths, textSizes } from '../../utils/constants'
import { BLACK, GRAY_2, GRAY_5, WHITE } from '../../utils/palette'
import ButtonComponent from '../common/button.component'
import SkillsListComponent from '../common/skills_list.component'
export default class TaskItemComponent extends Component {
    render(){
        return (
            
            <div style={{width:'55vw',height:220,backgroundColor: WHITE,
                boxShadow:'3px 3px 3px 3px #707070',
                marginTop:40,            
                display:'flex',flexDirection: 'row'}}>
    
                <div style={{flex:8,display:'flex',flexDirection: 'column',padding: 20}}>

                    <text style={{fontSize:textSizes.NORMAL,color:BLACK}}>
                        Task name1
                    </text>

                    <text style={{fontSize:textSizes.SMALL,color:GRAY_2}}>
                        5 minute ago
                    </text>

                    <text style={{marginTop:10,fontSize:textSizes.SMALL,color:GRAY_2  }}>
                        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. 
                    </text>

                    
                    <SkillsListComponent hide_title={true}/>
                </div>

                <div style={{flex:4,display:'flex',justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',backgroundColor: GRAY_5}}>
                    <text style={{fontSize:18,color:BLACK}}>
                        $456
                    </text>

                    <text style={{fontSize:16,color:GRAY_2}}>
                        Fixed Price
                    </text>

                    <Link  
                        to={routePaths.TASK_DETAIL}
                        style={{marginTop:15,width:'60%',textDecoration:'none'}}>
                        <ButtonComponent label='Bid Now'/>
                    </Link>
                        
                </div>

                

                    


              
                                                

            </div>


    
        )
    }
}
