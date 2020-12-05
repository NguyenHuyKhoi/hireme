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
export default class StageItemComponent extends Component {
    render(){
        return (
            <div style={{width:'30vw',height:500,backgroundColor: '#093853',                  
                display:'flex',flexDirection: 'column'}}>
                
                <div style={{width:'100%',height:60,backgroundColor: '#399853'}}>

                </div>
                <div style={{width:'100%',height:5,backgroundColor: '#694575'}}/>

                <div style={{marginTop: 10,width:'85%',height:35,backgroundColor: '#694575'}}/>

            </div>


        )
    }
}



