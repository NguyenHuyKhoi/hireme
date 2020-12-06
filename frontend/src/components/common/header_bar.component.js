//import from library 
import React, {Component} from 'react'
import{Link,NavLink} from 'react-router-dom'
import {bullshitIcons, routePaths, SHOW_LAYOUT, textSizes} from '../../utils/constants'
import { BLACK, BLUE_1,GRAY_2, WHITE } from '../../utils/palette';
import logo from '../../assets//images/logo.png'
import * as Icons from "react-icons/fa"
import {IconContext} from 'react-icons'

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const logo123='FaTwitter'
export default class HeaderBarComponent extends Component {
    render(){
        const is_login=false;
        const IconName=`Icons.FaHome`;
        return (
            <div style={{width:'100vw',height: 80,backgroundColor:WHITE,
                boxShadow:'0px 5px 5px #707070',
                display:'flex',flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between'}} >

                <div style={{flex:2,height:'100%',display: 'flex',
                    alignItems: 'center',justifyContent: 'center',
                    backgroundColor: SHOW_LAYOUT?'#935835':''
                    }}>
                    <img src={logo} style={{width:'60%',height:'60%'}}/>
                </div>

                <div style={{flex:7,height:'100%',display:'flex',flexDirection:'row',alignItems: 'center',
                    justifyContent:'space-around',
                    backgroundColor: SHOW_LAYOUT?'#635835':''
                    }}>
                    

                    <Link to ={routePaths.HOME}
                        style={{fontSize:textSizes.NORMAL,color:BLACK,textDecoration:'none'}}>
                            Home
                    </Link>
                    <Link to ={routePaths.FREELANCER_SEARCH}
                        style={{fontSize:textSizes.NORMAL,color:BLACK,textDecoration:'none'}}>
                            Find Freelancers
                    </Link>

                    <Link to ={routePaths.TASK_SEARCH}
                        style={{fontSize:textSizes.NORMAL,color:BLACK,textDecoration:'none'}}>
                            Find Tasks
                    </Link>

                    {/* <Link to ={routePaths.FREELANCER_SEARCH}
                        style={{fontSize:20,color:'#000000'}}>
                            Guide
                    </Link> */}
                </div>

    
                
                <div style={{flex:2,height:'100%',display:'flex',flexDirection:'column',
                    alignItems: 'center',justifyContent: 'center',
                    backgroundColor: SHOW_LAYOUT?'#935765':''}}>
                    {
                    is_login?
                        <Link 
                            to ={routePaths.DASHBOARD_HOME}
                            style={{display: 'flex',flexDirection: 'row',alignItems:'center',textDecoration:'none'}}>
                            <img src='https://randomuser.me/api/portraits/women/25.jpg' 
                                style={{width:50,height:50,borderRadius:25}}/>
                            <text 
                                style={{marginLeft:10,fontSize:textSizes.SMALL,color:BLACK}}>
                                    My Account
                            </text>
                        </Link>
                    :
                        <text style={{fontSize:textSizes.SMALL,color:BLACK}}>
                            Login/Register  
                        </text>
                    }   
                        

                </div>
            </div>
            
        )
    }
}
