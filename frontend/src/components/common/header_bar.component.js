//import from library 
import React, {Component} from 'react'
import{Link,NavLink} from 'react-router-dom'
import {bullshitIcons, routePaths, TEXT_SIZES} from '../../utils/constants'
import { BLACK, BLUE_1,GRAY_2, WHITE } from '../../utils/palette';
import logo from '../../assets//images/logo.png'
import * as Icons from "react-icons/fa"
import {IconContext} from 'react-icons'
import {connect }from 'react-redux'
import * as action from '../../redux/action/user.action'
import Modal from 'react-modal';
import AuthModal from './auth.modal';


Modal.setAppElement('#root');
const logo123='FaTwitter'



class HeaderBarComponent extends Component {
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
        const is_login=false;
        const IconName=`Icons.FaHome`;
        const user_infor=this.props.user_infor;
        return (
            <div style={styles.container} >

                <Modal
                    isOpen={this.state.auth_modal_open}
                    style={styles.modal}>
                    <AuthModal 
                        onCloseModal={this.closeAuthModal}
                        onClickClose={this.closeAuthModal}/>
                </Modal>
                
                <div style={styles.col1}>
                    <img src={logo} style={styles.logo}/>
                </div>

                <div style={styles.col2}>

                    <Link to ={routePaths.HOME}
                        style={styles.item}>
                            Home
                    </Link>
                    <Link to ={routePaths.FREELANCER_SEARCH}
                        style={styles.item}>
                            Find Freelancers
                    </Link>

                    <Link to ={routePaths.TASK_SEARCH}
                        style={styles.item}>
                            Find Tasks
                    </Link>

                    {/* <Link to ={routePaths.FREELANCER_SEARCH}
                        style={{fontSize:20,color:'#000000'}}>
                            Guide
                    </Link> */}
                </div>

    
                
                <div style={styles.col3}>
                    {
                    user_infor!=={} && user_infor.session_id!==undefined?
                        <Link 
                            to ={user_infor.user_type==='admin'?
                                routePaths.ADMIN_USER_LIST
                                :
                                routePaths.DASHBOARD_TASK_LIST
                            }
                            style={styles.my_account_container}>
                            <img src='https://randomuser.me/api/portraits/women/25.jpg' 
                                style={styles.avatar}/>
                            <text 
                                style={styles.my_account}>
                                    My Account
                            </text>
                        </Link>
                    :
                        <text 
                            onClick={this.openAuthModal}
                            style={styles.login}>
                            Login/Register  
                        </text>
                    }   
                        

                </div>
            </div>
            
        )
    }
}

const styles={
    container:{
        width:'100vw',
        height: 80,
        backgroundColor:WHITE,
        boxShadow:'0px 5px 5px #707070',
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    modal:{ 
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
        } 
    },
    col1:{
        flex:2,
        height:'100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        width:'60%',
        height:'60%'
    },
    col2:{
        flex:7,
        height:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-around'
    },
    item:{
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK,
        textDecoration:'none'
    },
    col3:{
        flex:2,
        height:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    my_account_container:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        textDecoration:'none'
    },
    avatar:{
        width:50,
        height:50,
        borderRadius:25
    },
    my_account:{
        marginLeft:10,
        fontSize:TEXT_SIZES.SMALL,
        color:BLACK
    },
    login:{
        fontSize:TEXT_SIZES.SMALL,
        color:BLACK
    }

}

const mapStateToProps = state => ({
	user_infor: state.user_infor,
});

export default connect(mapStateToProps,action)(HeaderBarComponent)
