//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../common/button.component'
import RateScoreComponent from '../common/rate_score.component'
// + id (integer )
//    + time (string)
//    + score (float)
//    + content (string)
//    + reviewer : { id ,name ,avatar } ,trong bảng Review_Task
//        ** is_company == true => reviewer là 1 company ,đánh giá freelancer
//        ** is_company == false => reviewer là 1 freelancer ,đánh giá company 
//    + task : { id ,name }

export default class ExperienceItemComponent extends Component {
    render(){
        return (
            <div  style={{width:'100%', 
                paddingTop:20,paddingBottom:20,
                flexDirection:'row', display:'flex',
                alignItems: 'center',
                backgroundColor:this.props.index%2==0?'#ffffff':'#F0F0F0'}}>    

                    <img 
                        src='https://randomuser.me/api/portraits/men/22.jpg'  
                        style={{width:70,height:70,borderRadius:35,marginLeft:50}}/>
                        
                    <div style={{display:'flex',flex:1,marginLeft:20,paddingRight:50,
                        flexDirection: 'column'}}>

                        <text style={{fontSize:25,color:'#000000',fontWeight:'bold'}}>
                            Team Lead
                        </text>

                        <div style={{display:'flex',width:'100%',flexDirection: 'row',
                            justifyContent: 'space-between',alignItems: 'center'}}>
                            <text style={{fontSize:17,color:'#000000'}}>
                                on Facebook
                            </text>
                            <text style={{fontSize:17,color:'#000000'}}>
                                14/02/2019
                            </text>
                    
                        </div>

                        <text style={{marginTop:10,fontSize:17,color:'#000000'}}>
                            Great company and especially ideal for the career-minded individual. The company is large enough to offer a variety of jobs in all kinds of interesting locations. Even if you never change roles, your job changes and evolves as the company grows, keeping things fresh.
                        </text>
                    </div> 

            
              
            </div>
        )
    }
}

