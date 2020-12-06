//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { routePaths } from '../../utils/constants'

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
        label:'Setting',
        screen:routePaths.DASHBOARD_SETTING_FREELANCER
    },
    {
        label:'Logout',
        screen:routePaths.HOME
    },

]
class Item extends Component{
    render(){
        const item=this.props.item;
        return (
            <div style={{height:50,width:'100%',display:'flex',
                flexDirection: 'row',alignItems: 'center',
                justifyContent: 'center',backgroundColor: '#935735'}}>
                <Link style={{fontSize:20,color:'#205823',textDecoration:'none'}}
                    to={item.screen}>
                    {item.label}
                </Link>
            </div>
        )
    }
}
export default class SidebarComponent extends Component {
    render(){
        return (
            <div style={{flex:1,display:'flex',flexDirection: 'column',
            alignItems: 'center',backgroundColor: '#302585'}}>
            
            <div style={{width:'100%',display: 'flex',height:30,
                flexDirection: 'row',justifyContent:'center'}}>
                <Link to={routePaths.HOME} 
                    style={{width:'60%',height:60,marginTop:15,textDecoration:'none',backgroundColor:'#929355'}}>
                     
                </Link>
            </div>
            <Link 
                to={routePaths.DASHBOARD_TASK_POST}
                style={{textDecoration:'none',marginTop:60,width:120,height:40,borderRadius:10,
                display:'flex',justifyContent: 'center',alignItems: 'center',
                
                left:60,
                backgroundColor: '#023583'}}>
                     <text style={{fontSize:20,color:'#205823'}}>
                        Post Task
                    </text>
            </Link>
            <div style={{marginTop:30,display:'flex',width:'100%',flexDirection: 'column'}}>

                {
                    sidebarItems.map((item,index)=>
                        <Item item={item}/>
                    )
                }
                
            </div>
        </div>

        )
    }
}
