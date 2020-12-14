//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { routePaths, TEXT_SIZES } from '../../utils/constants'
import { BLUE_1, GRAY_2, WHITE } from '../../utils/palette';
import ButtonComponent from './button.component';
import logo from '../../assets/images/logo.png'
import CustomIconComponent from './custom_icon.component';
import {connect }from 'react-redux'
import * as action from '../../redux/action/user.action'
const sidebarItems=[

    {
        label:'Tasks',
        screen:routePaths.DASHBOARD_TASK_LIST,
        icon:'task'
    },
    {
        label:'Chat',
        screen:routePaths.DASHBOARD_CHAT,
        icon:'chat'
    },
    {
        label:'Payment',
        screen:routePaths.DASHBOARD_PAYMENT,
        icon:'payment'
    },
    {
        label:'Setting',
        screen:routePaths.DASHBOARD_SETTING_FREELANCER,
        icon:'setting'
    },
    {
        label:'Logout',
        screen:routePaths.HOME,
        icon:'logout'
    },

]

const sidebarAdminItems=[
    {
        label:'User',
        screen:routePaths.ADMIN_USER_LIST,
        icon:'user'
    },
    {
        label:'Task',
        screen:routePaths.ADMIN_TASK_LIST,
        icon:'task'
    },
    {
        label:'Chat',
        screen:routePaths.ADMIN_CHAT,
        icon:'chat'
    },
    {
        label:'Setting',
        screen:routePaths.ADMIN_SETTING,
        icon:'setting'
    },
    {
        label:'Logout',
        screen:routePaths.HOME,
        icon:'logout'
    },

]
class Item extends Component{
    constructor(props){
        super(props);
        this.state={
            hover:false
        }
    }

    render(){
        const item=this.props.item;
        const user_type=this.props.user_type;

        return (
            <Link 
                onMouseLeave={()=>this.setState({hover:false})}
                onMouseEnter={()=>this.setState({hover:true})}
                onClick={()=>{
                    if (item.label==='Logout') this.props.clickLogout();
                }}
                to={item.label!=='Setting' || user_type==='admin'?
                    item.screen
                        : user_type==='company'?
                            routePaths.DASHBOARD_SETTING_COMPANY
                            :
                            routePaths.DASHBOARD_SETTING_FREELANCER
                }
                style={{display:'flex',width:'100%',
                alignSelf:'center',textDecoration:'none',
                flexDirection: 'row',alignItems: 'center'}}>
                <CustomIconComponent name={item.icon} color={this.state.hover?BLUE_1: GRAY_2}/>
                <text style={{marginLeft:20,fontSize:TEXT_SIZES.NORMAL,
                    color:this.state.hover?BLUE_1: GRAY_2}}
                   >
                    {item.label}
                </text>
            </Link>
        )
    }
}

class SidebarComponent extends Component {

    logout=()=>{
        //CALL_API_HERE: LOGOUT
        this.props.logoutSuccess({});
    }

    render(){
        const user_type=this.props.user_infor.user_type;
     
        const items=user_type==='admin'?sidebarAdminItems:sidebarItems;
        return (
            <div style={{flex:1,height:'100vh',display:'flex',flexDirection: 'column',backgroundColor: WHITE,
                boxShadow:'3px 0px 10px 3px #707070'
            }}>
            
                <div 
                    style={{flex:3,display:'flex',justifyContent:'center',alignItems:'center'}}>

                    <Link to={routePaths.HOME}
                        style={{textDecoration:'none',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <img src={logo} style={{width: '60%',aspectRatio:1.5}}/>
                    </Link>
                </div>

                <div style={{flex:5,display:'flex',flexDirection:'row'}}>
                        <div style={{flex:1}}/>
                        <div style={{flex:3,display:'flex',flexDirection:'column',
                        justifyContent:'space-between'}}>
                        {
                            items.map((item,index)=>
                                <Item 
                                    user_type={user_type}
                                    clickLogout={this.logout}
                                    key={''+index}
                                    item={item} />
                            )
                        }
                        </div>
                        <div style={{flex:1}}/>
                        
            
                
                </div>
               
                <div style={{flex:3,display:'flex',justifyContent:'center',alignItems:'center'}}>
                    {
                        user_type==='company'?
                        <Link 
                            to={routePaths.DASHBOARD_TASK_POST}
                            style={{width:'60%',textDecoration:'none'}}>
                            <ButtonComponent label='Post A Task'/>
                        </Link>
                        :
                        '.'
                    }
                    
                </div>

        </div>

        )
    }
}

const mapStateToProps = state => ({
	user_infor: state.user_infor,
});

export default connect(mapStateToProps,action)(SidebarComponent)
