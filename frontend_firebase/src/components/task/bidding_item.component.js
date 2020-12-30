//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths, TEXT_SIZES } from '../../utils/constants'
import { BLACK, BLUE_1, BLUE_2, GRAY_3, GREEN_1, WHITE, YELLOW_1 } from '../../utils/palette'
import ButtonComponent from '../common/button.component'
import RateScoreComponent from '../common/rate_score.component'
import SmallFieldComponent from '../common/small_field.component'


import logo from '../../assets/images/logo.png'

class BiddingBudget extends Component {
    render(){
        const {duration,budget}=this.props;

        return (
            <div style={{width: '100%',height:80,borderRadius:6,
            
                backgroundColor:BLUE_1,display: 'flex',justifyContent: 'center',
                flexDirection:'column',
                alignItems: 'center'}}>
                <text style={{fontSize:TEXT_SIZES.NORMAL,color:WHITE}}>
                    {'$'+budget}
                </text>
                <text style={{fontSize:TEXT_SIZES.SMALL,color:GRAY_3}}>
                    trong {duration} ngày
                </text>

                
            </div>
        )
    }
}

export default class BiddingItemComponent extends Component {

    render(){
        const bidding = this.props.bidding;
        const state=this.props.state;
        const freelancer= bidding.freelancer
        const type=this.props.type;
        const is_accepted=this.props.is_accepted
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
                                src={freelancer.avatar===''?logo:freelancer.avatar} 
                                style={{width:80,height:80,borderRadius:40}}/>
                        </div>
                            
                        <div style={styles.row1_col2}>

                            <Link
                                to={routePaths.FREELANCER_DETAIL+`/${freelancer.id}`}
                                style={styles.freelancer_name}>
                                {freelancer.username}
                            </Link>

                            {
                                is_accepted?
                                <div style={{marginTop:3}}>
                                    <SmallFieldComponent 
                                        background_color={GREEN_1} 
                                        label_color={WHITE} 
                                        label={'Người được chọn!'}/>
                                </div>
                                :
                                null
                            }
                           
                        


                            
                        </div> 

                        <div style={styles.row1_col3}>
                            <BiddingBudget 
                                budget={bidding.budget}
                                duration={bidding.duration}/>

                        </div>
                
                        <div style={{flex:1}}/>

                
                
                </div>

                {
                    type!==undefined 
                    && type==='company'
                    &&  state==='bidding'?
                    <div style={styles.row2}> 

                        <div style={{flex:1.5}}/>

                        <div style={styles.btn_container}>
                            <ButtonComponent 
                                onClick={this.props.acceptBidding}
                                color={BLUE_1} label='Chấp nhận'/>
                        </div>

                        <div style={{flex:0.3}}/>

                        <Link 
                            to={routePaths.FREELANCER_DETAIL+`/${freelancer.id}`}
                            style={{...styles.btn_container,textDecoration: 'none'}}>
                            <ButtonComponent 
                                onClick={this.props.navToChat}
                                color={YELLOW_1} label='Xem thông tin'/>
                        </Link>

                        <div style={{flex:0.3}}/>

                        {/* <div style={styles.btn_container}>
                            <ButtonComponent 
                                onClick={this.props.removeBidding}
                                color={GRAY_3} label='Xóa'/>
                        </div> */}

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
        flex:2.5,
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

