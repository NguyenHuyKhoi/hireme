//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../common/button.component'
import RateScoreComponent from '../common/rate_score.component'
// * bidding [
//     {
//       * id
//       * freelancer : {id ,name ,avatar ,rate_score}
//       * intended_time , intended_cost
//       * post_time
//     }
//   ]
export default class BiddingItemComponent extends Component {
    render(){
        const bidding = this.props.bidding
        const freelancer= bidding.freelancer
        return (
            <div  style={{marginTop:20,width:'95%', padding:20,flexDirection:'row', display:'flex',
                backgroundColor:this.props.index%2==0?'#ffffff':'#F0F0F0'}}>    

                    <img 
                        src={freelancer.avatar}  style={styles.avatar}/>
                        
                    <div style={styles.center}>

                        <text style={styles.freelancer_name}>
                            {freelancer.name}
                        </text>

                        <RateScoreComponent score={freelancer.rate_score} />

                        <div style={styles.company_actions}>
                            <ButtonComponent color='#3F50CD' label='Accept'/>
                            <ButtonComponent color='#FEBE42' label='Chat'/>
                            <ButtonComponent color='#707070' label='Remove'/>
                        </div>
                    </div> 

                    <div style={styles.bidder_infor}>

                        <text style={styles.intended_cost}>
                            {'$'+bidding.intended_cost}
                        </text>

                        <text style={styles.intended_time}>
                            {'in '+bidding.intended_time+' day'}
                        </text>
                    </div>

            
              
            </div>
        )
    }
}

const styles={
    
    company_actions:{
        width:'100%',
        marginTop:20,
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
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
    freelancer_name :{
        fontSize: 25,
        color: '#000000',
        marginBottom: 5
    },
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

