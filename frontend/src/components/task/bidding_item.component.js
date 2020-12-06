//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths, textSizes } from '../../utils/constants'
import { BLACK, BLUE_1, BLUE_2, GRAY_3, WHITE, YELLOW } from '../../utils/palette'
import ButtonComponent from '../common/button.component'
import RateScoreComponent from '../common/rate_score.component'
import SmallFieldComponent from '../common/small_field.component'
// * bidding [
//     {
//       * id
//       * freelancer : {id ,name ,avatar ,rate_score}
//       * intended_time , intended_cost
//       * post_time
//     }
//   ]

class BiddingBudget extends Component {
    render(){
        return (
            <div style={{width: '85%',height:'65%',borderRadius:6,
                backgroundColor:BLUE_1,display: 'flex',justifyContent: 'center',
                flexDirection:'column',
                alignItems: 'center'}}>
                <text style={{fontSize:textSizes.NORMAL,color:WHITE}}>
                    $2200
                </text>
                <text style={{fontSize:textSizes.SMALL,color:GRAY_3}}>
                    in 7 days
                </text>

                
            </div>
        )
    }
}

export default class BiddingItemComponent extends Component {
    render(){
        const bidding = this.props.bidding
        const freelancer= bidding.freelancer
        const company_view=false;
        return (
            <div  style={{width:'100%',height:160,flexDirection:'row', display:'flex',
                alignItems: 'center',
                backgroundColor:this.props.index%2==0?WHITE:BLUE_2}}>   

                    <div style={{flex:0.5}}/>
                   
                    <div style={{flex:2}}>
                        <img 
                        src='https://randomuser.me/api/portraits/men/22.jpg'  
                            style={{width: '80%',aspectRatio:1,borderRadius:'50%'}}/>
                    </div>
                        
                    <div style={{display:'flex',flex:7,marginLeft:5,
                            justifyContent: 'center',
                            flexDirection: 'column'}}>

                        <Link
                            to={routePaths.FREELANCER_DETAIL}
                            style={{ textDecoration:'none',fontSize: textSizes.BIG,  
                            color: BLACK,marginBottom: 5}}>
                            {freelancer.name}
                        </Link>

                        <SmallFieldComponent 
                            background_color={YELLOW} 
                            label_color={WHITE} 
                            label={'4.2'}/>

                        {
                            company_view ?
                            <div style={{width:'100%', marginTop:20,display: 'flex',
                                justifyContent:'space-between',alignItems: 'center',
                            }}>
                                <div style={{flex:1,marginRight:20}}>
                                    <ButtonComponent color={BLUE_1} label='Accept'/>
                                </div>
                                <div style={{flex:1,marginRight:20}}>
                                    <ButtonComponent color={YELLOW} label='Chat'/>
                                </div>
                              
                                <div style={{flex:1}}>
                                    <ButtonComponent color={GRAY_3} label='Remove'/>
                                </div>
                            </div>
                    
                            :
                            null
                        }
                        
                    </div> 

                    <div style={{flex:2,display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                        <BiddingBudget/>

                    </div>
            
                    <div style={{flex:0.5}}/>

            
              
            </div>
        )
    }
}

const styles={
    
    company_actions:{
        width:'100%', marginTop:20,display: 'flex',justifyContent:'space-between',alignItems: 'center',
    },
    avatar:{ 
        width:70,
        height:70,
        borderRadius: 35
    },
    center:{
        marginLeft:15,
        flexDirection: 'column',
        display:'flex',
        flex:1,
    },
    freelancer_name :{ fontSize: 25,  color: '#000000',marginBottom: 5},
    bidder_infor:{
        borderRadius: 5,
        width:100,
        height:60,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3F50CD',
        display:'flex',
        alignSelf: 'baseline'
    },
    intended_cost :{
        fontSize: 20,color:'#ffffff'
    },
    intended_time :{
        fontSize: 15,color:'#ffffff'
    }
}

