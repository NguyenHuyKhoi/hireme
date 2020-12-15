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
            <div style={styles.container}>

            <div style={{flex:1}}/>

            <div style={styles.body}>
                <img src={freelancer.avatar}  style={styles.avatar}/>
                
                <div style={styles.content}>
                    <text style={styles.freelancer_name}>
                        {freelancer.name}
                    </text>

                    <text style={styles.freelancer_tagline}>
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
    body:{
        flex:5,
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar:{
        height: '60%',
        aspectRatio:1,
        borderRadius:'50%'
    },
    content:{
        marginLeft:15,
        display:'flex',
        flex:1,
        flexDirection: 'column'
    },
    freelancer_name:{
        fontSize:TEXT_SIZES.BIG,
        color:BLACK
    },
    freelancer_tagline:{
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK,
        marginBottom:5
    }
}