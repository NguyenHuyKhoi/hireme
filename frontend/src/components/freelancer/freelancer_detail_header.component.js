//import from library 
import React, {Component} from 'react'
import RateScoreComponent from '../common/rate_score.component'
import banner from '../../assets/images/banner.jpg'
import { BLACK, WHITE, YELLOW_1 } from '../../utils/palette'
import SmallFieldComponent from '../common/small_field.component'
import { TEXT_SIZES } from '../../utils/constants'
export default class FreelancerDetailHeaderComponent extends Component {
    render(){
        const freelancer=this.props.freelancer;
        return (
            <div style={{width:'100%',height:150,
                backgroundImage:`url(${banner})`,
                backgroundRepeat:  'no-repeat',
                backgroundSize:'cover',
                display:'flex',flexDirection: 'row'}}>

            <div style={{flex:1}}/>
            <div style={{flex:5,display:'flex',flexDirection: 'row',alignItems: 'center'}}>
                <img src={freelancer.avatar}
                    style={{height: '60%',aspectRatio:1,borderRadius:'50%'}}/>
                
                <div style={{marginLeft:15,display:'flex',flex:1,flexDirection: 'column'}}>
                    <text style={{fontSize:TEXT_SIZES.BIG,color:BLACK}}>
                        {freelancer.name}
                    </text>

                    <text style={{fontSize:TEXT_SIZES.NORMAL,color:BLACK,marginBottom:5}}>
                        {freelancer.tagline}
                    </text>
                    <div style={{flex:1}}>
                        <SmallFieldComponent 
                            background_color={YELLOW_1} 
                            label_color={WHITE} 
                            label={freelancer.rate_score}/>
                    </div>
                  
                </div>
            </div>

            <div style={{flex:4}}/>



        </div>

        
    
        )
    }
}
