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
        const user_type=this.props.user_type;
        console.log('bidding_item',bidding.intended_time);
        return (
            <div style={{
                ...styles.container,
                backgroundColor:this.props.index%2==0?WHITE:BLUE_2}}>

                <div  style={{
                    ...styles.row1,
                    backgroundColor:this.props.index%2==0?WHITE:BLUE_2}}>   

                        <div style={{flex:1}}/>
                    
                        <div style={styles.row1_col1}>
                            <img 
                                src={freelancer.avatar} 
                                style={{width:80,height:80,borderRadius:40}}/>
                        </div>
                            
                        <div style={styles.row1_col2}>

                            <Link
                                to={routePaths.FREELANCER_DETAIL+`/${freelancer.id}`}
                                style={styles.freelancer_name}>
                                {freelancer.name}
                            </Link>

                            <div style={{marginTop:3}}>
                                <SmallFieldComponent 
                                    background_color={YELLOW_1} 
                                    label_color={WHITE} 
                                    label={freelancer.rate_score}/>
                            </div>
                        


                            
                        </div> 

                        <div style={styles.row1_col3}>
                            <BiddingBudget 
                                intended_time={bidding.intended_time}
                                intended_cost={bidding.intended_cost}/>

                        </div>
                
                        <div style={{flex:1}}/>

                
                
                </div>

                {
                    user_type!==undefined && user_type==='company' ?
                    <div style={styles.row2}> 

                        <div style={{flex:1.5}}/>

                        <div style={styles.btn_container}>
                            <ButtonComponent color={BLUE_1} label='Accept'/>
                        </div>

                        <div style={{flex:0.3}}/>

                        <div style={styles.btn_container}>
                            <ButtonComponent color={YELLOW_1} label='Chat'/>
                        </div>

                        <div style={{flex:0.3}}/>

                        <div style={styles.btn_container}>
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
    container:{
        width:'100%',
        display:'flex',
        flexDirection:'column'
    },
    row1:{
        width:'100%',
        height:160,
        flexDirection:'row', 
        display:'flex',
        alignItems: 'center',
    },

    row1_col1:{
        flex:1.5,
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    avatar:{
        height: '50%',
        aspectRatio:1,
        borderRadius:'50%'
    },
    row1_col2:{
        display:'flex',
        flex:7,
        marginLeft:15,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    freelancer_name:{ 
        textDecoration:'none',
        fontSize: TEXT_SIZES.BIG,  
        color: BLACK,
        marginBottom: 5
    },
    row1_col3:{
        flex:1.5,
        height:'100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    row2:{
        width:'100%',
        alignSelf:'baseline', 
        paddingBottom:30,
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    btn_container:{
        flex:1,
        marginRight:20
    }
}

