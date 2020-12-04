//import from library 
import React, {Component} from 'react'

export default class HeaderBarComponent extends Component {
    render(){
        const is_login=true;
        return (
            <div style={{width: '100%',height: 60,backgroundColor: '#f0f0f0',
                display:'flex',flexDirection: 'row'}}>

                <div style={{flex:1,display:'flex',justifyContent: 'center',alignItems: 'center'}}>
                    <text style={{fontSize: 40,color:'#290353'}}>
                        Logo
                    </text>
                </div>

                <div style={{flex:7,backgroundColor: '#958538'}}>
                
                </div>
                <div style={{flex:2,backgroundColor: '#032853',display:'flex',alignItems: 'center',justifyContent: 'center'}}>
                    {
                        is_login?
                        <div style={{display:'flex',flexDirection: 'row'}}>
                            <img src='https://randomuser.me/api/portraits/women/13.jpg' style={{width:40,height:40,borderRadius: 20}}/>
                            <text style={{fontSize: 20,color:'#000000',marginLeft:10}}>
                                My account
                            </text>
                        </div>
                        : 
                        <div style={{display:'flex',flexDirection: 'row'}}>
                            
                        </div>
                    }
                </div>
            </div>
            
        )
    }
}
