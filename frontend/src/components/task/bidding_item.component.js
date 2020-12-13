//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths, TEXT_SIZES } from '../../utils/constants'
import { BLACK, BLUE_1, BLUE_2, GRAY_3, WHITE, YELLOW_1 } from '../../utils/palette'
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
        const intended_time=this.props.intended_time!==undefined?this.props.intended_time:10
        const intended_cost=this.props.intended_cost!==undefined?this.props.intended_cost:200

        return (
            <div style={{width: '100%',height:80,borderRadius:6,
            
                backgroundColor:BLUE_1,display: 'flex',justifyContent: 'center',
                flexDirection:'column',
                alignItems: 'center'}}>
                <text style={{fontSize:TEXT_SIZES.NORMAL,color:WHITE}}>
                    {'$'+intended_cost}
                </text>
                <text style={{fontSize:TEXT_SIZES.SMALL,color:GRAY_3}}>
                    in {intended_time} days
                </text>

                
            </div>
        )
    }
}

export default class BiddingItemComponent extends Component {
    render(){
        const bidding = this.props.bidding;
        const freelancer= bidding.freelancer
        const company_view=this.props.company_view;
        console.log('bidding_item',bidding.intended_time);
        return (
            <div style={{width:'100%',display:'flex',flexDirection:'column',
                backgroundColor:this.props.index%2==0?WHITE:BLUE_2}}>
                <div  style={{width:'100%',height:160,flexDirection:'row', display:'flex',
                    alignItems: 'center',
                    backgroundColor:this.props.index%2==0?WHITE:BLUE_2}}>   

                        <div style={{flex:1}}/>
                    
                        <div style={{flex:1.5,height:'100%',
                            display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <img 
                                src={freelancer.avatar} 
                                style={{height: '50%',aspectRatio:1,borderRadius:'50%'}}/>
                        </div>
                            
                        <div style={{display:'flex',flex:7,marginLeft:15,
                                justifyContent: 'center',
                                flexDirection: 'column'}}>

                            <Link
                                to={routePaths.FREELANCER_DETAIL}
                                style={{ textDecoration:'none',fontSize: TEXT_SIZES.BIG,  
                                color: BLACK,marginBottom: 5}}>
                                {freelancer.name}
                            </Link>

                            <div style={{marginTop:3}}>
                                <SmallFieldComponent 
                                    background_color={YELLOW_1} 
                                    label_color={WHITE} 
                                    label={freelancer.rate_score}/>
                            </div>
                        


                            
                        </div> 

                        <div style={{flex:1.5,height:'100%',display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
                            <BiddingBudget 
                                intended_time={bidding.intended_time}
                                intended_cost={bidding.intended_cost}/>

                        </div>
                
                        <div style={{flex:1}}/>

                
                
                </div>

                {
                company_view!==undefined && company_view===true ?
                <div style={{width:'100%',alignSelf:'baseline', paddingBottom:30,display: 'flex',
                    justifyContent:'space-between',alignItems: 'center',
                }}> 
                    <div style={{flex:1.5}}/>
                    <div style={{flex:1,marginRight:20}}>
                        <ButtonComponent color={BLUE_1} label='Accept'/>
                    </div>
                    <div style={{flex:0.3}}/>
                    <div style={{flex:1,marginRight:20}}>
                        <ButtonComponent color={YELLOW_1} label='Chat'/>
                    </div>
                    <div style={{flex:0.3}}/>
                    <div style={{flex:1}}>
                        <ButtonComponent color={GRAY_3} label='Remove'/>
                    </div>
                    <div style={{flex:1.5}}/>
                </div>

                :
                null
                }
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

