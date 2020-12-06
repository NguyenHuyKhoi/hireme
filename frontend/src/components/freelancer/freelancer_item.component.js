//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths, textSizes } from '../../utils/constants'
import { BLACK, BLUE_0, GRAY_1, GRAY_3, WHITE, YELLOW } from '../../utils/palette'
import ButtonComponent from '../common/button.component'
import InforsBarComponent from '../common/infors_bar.component'
import SmallFieldComponent from '../common/small_field.component'

export default class FreelancerItemComponent extends Component {
    render(){
        return (
            
            <div style={{width:'20vw',height:450,backgroundColor: WHITE,  
                boxShadow:'5px 5px 5px 5px #707070',
                padding:20, marginBottom:50,           
                display:'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
            
                <img src='https://randomuser.me/api/portraits/men/17.jpg' 
                    style={{width:'40%',height:'25%',borderRadius:'50%'}}/>

                <text style={{marginTop:20,fontSize:textSizes.NORMAL,color:BLACK
                    }}>
                    Freelancers1
                </text>
                <text style={{fontSize:textSizes.SMALL,color:GRAY_1,textAlign:'center',marginBottom:10}}>
                    UI/UX designer..
                </text>

                <SmallFieldComponent 
                    background_color={YELLOW} 
                    label_color={WHITE} 
                    label={'123'}/>



                <div style={{width: '100%',marginTop:60}}>
                    <InforsBarComponent/>
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
