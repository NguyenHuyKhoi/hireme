//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { routePaths, textSizes } from '../../utils/constants';
import { BLACK, BLUE_2, WHITE, YELLOW } from '../../utils/palette';
import ButtonComponent from '../common/button.component'
import RateScoreComponent from '../common/rate_score.component'
import SmallFieldComponent from '../common/small_field.component';
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
            <div  style={{width:'100%',height:150, 
                flexDirection:'row', display:'flex',
                alignItems: 'center',
                backgroundColor:this.props.index%2==0?WHITE:BLUE_2}}>    

                <div style={{flex:1}}/>
                <div style={{flex:2}}>
                    <img 
                    src='https://randomuser.me/api/portraits/men/22.jpg'  
                        style={{width: '80%',aspectRatio:1,borderRadius:'50%'}}/>
                </div>
                    
                <div style={{display:'flex',flex:8,marginLeft:20,
                    justifyContent: 'center',
                    flexDirection: 'column'}}>

                    <Link
                        to={routePaths.TASK_DETAIL}
                        style={{fontSize:textSizes.BIG,color:BLACK,textDecoration:'none'}}>
                        Develope a ecommercer app 
                    </Link>

                    <div style={{display:'flex',width:'100%',flexDirection: 'row',
                        justifyContent: 'space-between',alignItems: 'center'}}>
                        <Link
                            to={review.is_company?routePaths.COMPANY_DETAIL:routePaths.FREELANCER_DETAIL}
                            style={{fontSize:textSizes.SMALL,color:BLACK,textDecoration:'none'}}>
                                {
                                    review.is_company?
                                    'Facebook'
                                    :
                                    'Freelancer'
                                }
                        </Link>
                    
                        <text style={{fontSize:textSizes.SMALL,color:BLACK}}>
                            14/02/2019
                        </text>

                        <SmallFieldComponent 
                            background_color={YELLOW} 
                            label_color={WHITE} 
                            label={'4.2'}/>
                
                    </div>

                    <text style={{marginTop:5,fontSize:textSizes.SMALL,color:BLACK}}>
                        Great company and especially ideal for the career-minded individual. The company is large enough to offer a variety of jobs.
                    </text>
                </div> 
                <div style={{flex:1}}/>
         
            
              
            </div>
        )
    }
}

