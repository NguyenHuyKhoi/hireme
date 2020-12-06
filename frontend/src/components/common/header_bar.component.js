//import from library 
import React, {Component} from 'react'
import{Link,NavLink} from 'react-router-dom'
import {routePaths} from '../../utils/constants'

export default class HeaderBarComponent extends Component {
    render(){
        const is_login=true;
        return (
            <div style={{width:'100vw',height: 60,backgroundColor:'#235893',
            display:'flex',flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between'}} >

                <div style={{flex:1,height:'100%',flexDirection:'row',alignItems: 'center',justifyContent: 'center',
                    backgroundColor: '#935835'}}>
                        h1
                </div>
                <div style={{flex:6,height:'100%',display:'flex',flexDirection:'row',alignItems: 'center',
                    justifyContent:'space-around',
                    backgroundColor: '#635835'}}>
                    <Link to ={routePaths.HOME}
                        style={{fontSize:20,color:'#000000'}}>
                            Home
                    </Link>
                    <Link to ={routePaths.FREELANCER_SEARCH}
                        style={{fontSize:20,color:'#000000'}}>
                            Find Freelancers
                    </Link>

                    <Link to ={routePaths.TASK_SEARCH}
                        style={{fontSize:20,color:'#000000'}}>
                            Find Tasks
                    </Link>

                    {/* <Link to ={routePaths.FREELANCER_SEARCH}
                        style={{fontSize:20,color:'#000000'}}>
                            Guide
                    </Link> */}
                </div>

    
                <div style={{flex:2,height:'100%',display:'flex',flexDirection:'column',alignItems: 'center',justifyContent: 'center',
                    backgroundColor: '#935765'}}>
                    <Link to ={routePaths.DASHBOARD_HOME}
                        style={{fontSize:20,color:'#000000'}}>
                            Account
                    </Link>

                </div>

            </div>
            
        )
    }
}
