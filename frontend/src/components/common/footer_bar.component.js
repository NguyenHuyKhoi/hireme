//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths, TEXT_SIZES } from '../../utils/constants'
import { BLUE_1, GRAY_1, GRAY_2, WHITE } from '../../utils/palette'
import ButtonComponent from './button.component'

export default class FooterBarComponent extends Component {
    render(){
        return (
            <div style={{width:'100vw',height:250,backgroundColor: GRAY_1,
            flexDirection:'row', display:'flex'}}>

            <div style={{flex:1}}/>
            <div style={{flex:8,flexDirection:'column'}}>
                <div style={{width:'100%',display:'flex',alignSelf:'baseline',flexDirection:'column',
                    paddingTop:25,
                    alignItems:'center'}}>
                    <text style={{fontSize:TEXT_SIZES.BIG, color:WHITE}}>
                        About us
                    </text>
                    <text style={{fontSize:TEXT_SIZES.NORMAL, color:GRAY_2}}>
                        The best platform for freelancers and companies ,and more....
                    </text>
                </div>
                <div style={{width:'100%',flex:1,flexDirection:'row',display:'flex',
                    paddingTop:15}}>
                    <div style={{flex:2 ,display:'flex',
                        flexDirection:'column'}}>
                        <text style={{fontSize:TEXT_SIZES.NORMAL, color:WHITE}}>
                            HIREME
                        </text>
                        <text style={{marginTop:10,fontSize:TEXT_SIZES.SMALL, color:GRAY_2}}>
                            Contact us: 
                        </text>
                        <text style={{fontSize:TEXT_SIZES.SMALL, color:GRAY_2}}>
                            hireme.contact@gmail.com
                        </text>
                    </div>

                    <div style={{flex:2, display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <text style={{fontSize:TEXT_SIZES.NORMAL, color:WHITE}}>
                            Usefull links
                        </text>
                        <div style={{marginTop:10,width:'100%',flex:1,flexDirection:'row',display:'flex'}}>
                            <div style={{flex:1,flexDirection:'column',display:'flex',alignItems:'center'}}>
                                <Link
                                    to={routePaths.TASK_SEARCH}
                                    style={{fontSize:TEXT_SIZES.SMALL, color:GRAY_2,textDecoration:'none'}}>
                                    Find Tasks 
                                </Link>
                                <Link
                                    to={routePaths.FREELANCER_SEARCH}
                                    style={{fontSize:TEXT_SIZES.SMALL, color:GRAY_2,textDecoration:'none'}}>
                                    Find Freelancers 
                                </Link>
                            </div>

                            <div style={{flex:1,flexDirection:'column',display:'flex',alignItems:'center'}}>
                                <Link
                                    to={routePaths.HOME}
                                    style={{fontSize:TEXT_SIZES.SMALL, color:GRAY_2,textDecoration:'none'}}>
                                    Guides
                                </Link>
                                <Link
                                    to={routePaths.HOME}
                                    style={{fontSize:TEXT_SIZES.SMALL, color:GRAY_2,textDecoration:'none'}}>
                                    About us 
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div style={{flex:2,display:'flex',
                        alignItems:'flex-end',
                        flexDirection:'column'}}>
                        <text style={{marginTop:10,fontSize:TEXT_SIZES.NORMAL, color:WHITE}}>
                            Register news from us :
                        </text>

                        <div style={{marginTop:10,display:'flex',flexDirection:'row'}}>
                            <input style={{height:30,backgroundColor:'#262626',color:GRAY_2,borderRadius:6,

                                    fontSize:TEXT_SIZES.SMALL}} placeholder='Enter your email ...'/>

                            <div style={{width:35,marginLeft:10}}>
                                <ButtonComponent label={'->'} height={35}/>
                            </div>
                          
                        </div>
                      
                    </div>
                </div>
             
            </div>
           
            <div style={{flex:1}}/>
        
                        
           
        </div>
          
        )
    }
}
