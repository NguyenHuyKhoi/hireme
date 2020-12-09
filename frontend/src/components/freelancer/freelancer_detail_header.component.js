//import from library 
import React, {Component} from 'react'
import RateScoreComponent from '../common/rate_score.component'
import banner from '../../assets/images/banner.jpg'
import { BLACK, WHITE, YELLOW_1 } from '../../utils/palette'
import SmallFieldComponent from '../common/small_field.component'
import { textSizes } from '../../utils/constants'
export default class FreelancerDetailHeaderComponent extends Component {
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
                        Freelancer 1
                    </text>

                    <text style={{fontSize:textSizes.NORMAL,color:BLACK,marginBottom:5}}>
                        A software developments
                    </text>
                    <div style={{}}>
                        <SmallFieldComponent 
                            background_color={YELLOW_1} 
                            label_color={WHITE} 
                            label={'4.2'}/>
                    </div>
                  
                </div>
            </div>

            <div style={{flex:4}}/>



        </div>

        
    
        )
    }
}
