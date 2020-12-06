//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { routePaths } from '../../utils/constants';
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

export default class ReviewItemComponent extends Component {
    render(){
        const review=this.props.review;
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

                        <Link 
                            to={routePaths.TASK_DETAIL}
                            style={{textDecoration:'none',fontSize:25,color:'#000000',fontWeight:'bold'}}>
                            Develope a ecommercer app 
                        </Link>

                        <div style={{display:'flex',width:'100%',flexDirection: 'row',
                            justifyContent: 'space-between',alignItems: 'center'}}>
                            <Link   
                                to={review.is_company?routePaths.COMPANY_DETAIL:routePaths.FREELANCER_DETAIL}
                                style={{fontSize:17,color:'#000000',textDecoration:'none'}}>
                                {
                                    review.is_company?
                                    'Facebook'
                                    :
                                    'Freelancer'
                                }
                            </Link>
                            <text style={{fontSize:17,color:'#000000'}}>
                                14/02/2019
                            </text>
                            <RateScoreComponent score={4.2} />
                        </div>

                        <text style={{marginTop:10,fontSize:17,color:'#000000'}}>
                            Great company and especially ideal for the career-minded individual. The company is large enough to offer a variety of jobs in all kinds of interesting locations. Even if you never change roles, your job changes and evolves as the company grows, keeping things fresh.
                        </text>
                    </div> 

            
              
            </div>
        )
    }
}

