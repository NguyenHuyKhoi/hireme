//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { routePaths, TEXT_SIZES } from '../../utils/constants';
import { collapseText, convertFullDateToHour } from '../../utils/helper';
import { BLACK, BLUE_2, WHITE, YELLOW_1 } from '../../utils/palette';
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
        const reviewer =review.reviewer;
        const task=review.task;
        return (
            <div  style={{
                ...styles.container,
                backgroundColor:this.props.index%2==0?WHITE:BLUE_2}}>    

                <div style={{flex:1}}/>

                <div style={{flex:2}}>
                    <img src={reviewer.avatar} style={styles.avatar}/>
                </div>
                    
                <div style={styles.body}>

                    <Link
                        to={routePaths.TASK_DETAIL+`/${task.id}`}
                        style={styles.task_name}>
                        {'On task : '+collapseText(task.name,30)} 
                    </Link>

                    <div style={styles.row}>
                        <Link
                            to={review.is_company?
                                routePaths.COMPANY_DETAIL+`/${reviewer.id}`
                                :
                                routePaths.FREELANCER_DETAIL+`/${reviewer.id}`}
                            style={styles.reviewer_name}>
                                    {reviewer.name}
                        </Link>
                    
                        <text style={{fontSize:TEXT_SIZES.SMALL,color:BLACK}}>
                            {convertFullDateToHour(review.time)}
                        </text>

                        <SmallFieldComponent 
                            background_color={YELLOW_1} 
                            label_color={WHITE} 
                            label={review.rate_score}/>
                
                    </div>

                    <text style={styles.review_content}>
                        {collapseText(review.content,100)}
                    </text>
                </div> 
                <div style={{flex:1}}/>
         
            
              
            </div>
        )
    }
}


const styles={
    container:{
        width:'100%',
        height:150, 
        flexDirection:'row', 
        display:'flex',
        alignItems: 'center',
    },
    avatar:{
        width: '80%',
        aspectRatio:1,
        borderRadius:'50%'
    },
    body:{
        display:'flex',
        flex:8,
        marginLeft:20,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    task_name:{
        fontSize:TEXT_SIZES.BIG,
        color:BLACK,
        textDecoration:'none'
    },
    row:{
        display:'flex',
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:10
    },
    reviewer_name:{
        fontSize:TEXT_SIZES.SMALL,
        color:BLACK,
        textDecoration:'none'
    },
    review_content:{
        marginTop:5,
        fontSize:TEXT_SIZES.SMALL,
        color:BLACK
    }

}

