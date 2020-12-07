//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { routePaths, textSizes } from '../../utils/constants'
import { BLUE_1, GRAY_2, WHITE } from '../../utils/palette';
import ButtonComponent from './button.component';
import logo from '../../assets/images/logo.png'
import CustomIconComponent from './custom_icon.component';
const sidebarItems=[
    {
        label:'Dashboard',
        screen:routePaths.DASHBOARD_HOME
    },
    {
        label:'Tasks',
        screen:routePaths.DASHBOARD_TASK_LIST
    },
    {
        label:'Chat',
        screen:routePaths.DASHBOARD_CHAT
    },
    {
        label:'Payment',
        screen:routePaths.DASHBOARD_PAYMENT
    },
    {
        label:'Settinggg',
        screen:routePaths.DASHBOARD_SETTING_COMPANY
    },
    {
        label:'Logout',
        screen:routePaths.HOME
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
        return (
            <Link 
                onMouseLeave={()=>this.setState({hover:false})}
                onMouseEnter={()=>this.setState({hover:true})}
                to={item.screen}
                style={{display:'flex',width:'100%',
                alignSelf:'center',textDecoration:'none',
                flexDirection: 'row',alignItems: 'center'}}>
                <CustomIconComponent name='home' color={this.state.hover?BLUE_1: GRAY_2}/>
                <text style={{marginLeft:20,fontSize:textSizes.NORMAL,
                    color:this.state.hover?BLUE_1: GRAY_2}}
                   >
                    {item.label}
                </text>
            </Link>
        )
    }
}
export default class SidebarComponent extends Component {

    render(){
        return (
            <div style={{flex:1,height:'100vh',display:'flex',flexDirection: 'column',backgroundColor: WHITE,
                boxShadow:'5px 0px 3px 3px #707070'
            }}>
            
                <Link 
                     to={routePaths.HOME}
                    style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center',
                        textDecoration:'none'}}>
                    <img src={logo} style={{width:'60%',height:'80%'}}/>
                </Link>
                <div style={{flex:2,display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Link 
                        to={routePaths.DASHBOARD_TASK_POST}
                        style={{width:'60%',textDecoration:'none'}}>
                        <ButtonComponent label='Post A Task'/>
                    </Link>
                </div>

                <div style={{flex:4,display:'flex',flexDirection:'row'}}>
                        <div style={{flex:1}}/>
                        <div style={{flex:3,display:'flex',flexDirection:'column',
                        justifyContent:'space-between'}}>
                        {
                            sidebarItems.map((item,index)=>
                                <Item 
                                    item={item} />
                            )
                        }
                        </div>
                        <div style={{flex:1}}/>
                        
            
                
                </div>
                <div style={{flex:3}}/>     
        </div>

        )
    }
}
