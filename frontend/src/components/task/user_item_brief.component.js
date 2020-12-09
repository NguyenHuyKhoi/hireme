//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths, textSizes } from '../../utils/constants'
import { WHITE,GRAY_4, BLACK, YELLOW, GRAY_2, GRAY_3 } from '../../utils/palette';
import ButtonComponent from '../common/button.component';
import RateScoreComponent from '../common/rate_score.component'
import SmallFieldComponent from '../common/small_field.component';

export default class UserItemBriefComponent extends Component {
    render(){
        const index=this.props.index;
        return (
            
            <div style={{display:'flex',width:'100%',height:80,alignSelf:'baseline',
                backgroundColor:index%2===0?WHITE:GRAY_3,
                flexDirection: 'row'}}>
    
                <div style={{flex:0.5}}/>
                <div style={{display:'flex',flex:8,flexDirection: 'column',justifyContent:'center'}}>

                    <div style={{display:'flex',flexDirection:'row'}}>
                        <text style={{fontSize:textSizes.NORMAL,color:BLACK }}>
                            Username 1
                        </text>

                        <div style={{marginLeft:30}}>
                            <SmallFieldComponent 
                                background_color={YELLOW} 
                                label_color={WHITE} 
                                label={'123'}/>
                        </div>
                     
                    </div>

                    <div style={{width:'100%',display:'flex',flexDirection:'row',
                        justifyContent: 'space-between'}}>

                        <div style={{display:'flex',flex:1}}>
                            <text style={{fontSize:textSizes.SMALL,color:BLACK}}>
                                Type : Freelancer
                            </text>
                        </div>

                        <div style={{display:'flex',flex:1}}    >
                            <text style={{fontSize:textSizes.SMALL,color:BLACK}}>
                                Email : uesr@gmail.com
                            </text>
                        </div>
                    </div>
                
        
                </div>

                <div style={{flex:1,display:'flex',justifyContent: 'center',alignItems: 'center'}}>
                    <Link 
                        to={routePaths.ADMIN_USER_MANAGEMENT}
                        style={{textDecoration:'none',width:'80%'}}>
                        <ButtonComponent label='Detail'/>
                    </Link>
                </div>
                
                <div style={{flex:0.5}}/>
            </div>


    
        )
    }
}
