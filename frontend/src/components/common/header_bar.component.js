//import from library 
import React, {Component} from 'react'
import{Link,NavLink} from 'react-router-dom'
import {bullshitIcons, routePaths, textSizes} from '../../utils/constants'
import { BLACK, BLUE_1,GRAY_2, WHITE } from '../../utils/palette';
import logo from '../../assets//images/logo.png'
import * as Icons from "react-icons/fa"
import {IconContext} from 'react-icons'

import Modal from 'react-modal';
import AuthModal from './auth.modal';
Modal.setAppElement('#root');
const logo123='FaTwitter'
export default class HeaderBarComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            auth_modal_open:false
        }
    }

    openAuthModal=()=>{
        this.setState({
            auth_modal_open:true
        })
    }

    closeAuthModal=()=>{
        this.setState({
            auth_modal_open:false
        })
    }
    render(){
        const is_login=true;
        const IconName=`Icons.FaHome`;
        return (
            <div style={{width:'100vw',height: 80,backgroundColor:WHITE,
                boxShadow:'0px 5px 5px #707070',
                display:'flex',flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between'}} >

                <Modal
                    isOpen={this.state.auth_modal_open}
                    style={{ 
                        content : {
                            top                   : '50%',
                            left                  : '50%',
                            right                 : 'auto',
                            bottom                : 'auto',
                            marginRight           : '-50%',
                            transform             : 'translate(-50%, -50%)'
                          } }}>
                    <AuthModal 
                        onClickBtn={this.closeAuthModal}
                        onClickClose={this.closeAuthModal}/>
                </Modal>
                
                <div style={{flex:2,height:'100%',display: 'flex',
                    alignItems: 'center',justifyContent: 'center'
                    }}>
                    <img src={logo} style={{width:'60%',height:'60%'}}/>
                </div>

                <div style={{flex:7,height:'100%',display:'flex',flexDirection:'row',alignItems: 'center',
                    justifyContent:'space-around'
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
                    alignItems: 'center',justifyContent: 'center'}}>
                    {
                    is_login?
                        <Link 
                            to ={routePaths.ADMIN_HOME}
                            style={{display: 'flex',flexDirection: 'row',alignItems:'center',textDecoration:'none'}}>
                            <img src='https://randomuser.me/api/portraits/women/25.jpg' 
                                style={{width:50,height:50,borderRadius:25}}/>
                            <text 
                                style={{marginLeft:10,fontSize:textSizes.SMALL,color:BLACK}}>
                                    My Account
                            </text>
                        </Link>
                    :
                        <text 
                            onClick={this.openAuthModal}
                            style={{fontSize:textSizes.SMALL,color:BLACK}}>
                            Login/Register  
                        </text>
                    }   
                        

                </div>
            </div>
            
        )
    }
}
