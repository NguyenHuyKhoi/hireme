//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths, textSizes } from '../../utils/constants'
import { BLACK, BLUE_0, GRAY_1, GRAY_3, WHITE, YELLOW_1 } from '../../utils/palette'
import ButtonComponent from '../common/button.component'
import InforsBarComponent from '../common/infors_bar.component'
import SmallFieldComponent from '../common/small_field.component'

export default class FreelancerItemComponent extends Component {
    render(){
        const freelancer=this.props.freelancer
        return (
            <div style={{width:'20vw',height:450,backgroundColor: WHITE,  
                boxShadow:'5px 5px 5px 5px #707070',
                padding:20, marginBottom:50,           
                display:'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
            
                <img src={freelancer.avatar} 
                    style={{width:'40%',height:'25%',borderRadius:'50%'}}/>

                <text style={{marginTop:20,fontSize:textSizes.NORMAL,color:BLACK
                    }}>
                    {freelancer.name}
                </text>
                <text style={{fontSize:textSizes.SMALL,color:GRAY_1,textAlign:'center',marginBottom:10}}>
                    {freelancer.tagline}
                </text>

                <SmallFieldComponent 
                    background_color={YELLOW_1} 
                    label_color={WHITE} 
                    label={freelancer.rate_score}/>



                <div style={{width: '100%',marginTop:60}}>
                    <InforsBarComponent fields={[
                        {
                            key:'Hourly Rate',value:freelancer.hourly_rate
                        },
                        {
                            key:'Done Tasks',value:freelancer.done_tasks
                        },
                        {
                            key:'Income($)',value:freelancer.income
                        }
                    ]}/>
                </div>
                <Link 
                    to={routePaths.FREELANCER_DETAIL}
                    style={{width: '100%',marginTop:10,textDecoration:'none'}}>
                    <ButtonComponent label='View Profile '/>
                </Link>
               
        
                                                

            </div>


    
        )
    }
}
