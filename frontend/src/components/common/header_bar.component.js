//import from library 
import React, {Component} from 'react'

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
                    <text style={{fontSize:20,color:'#000000'}}>
                        Find freelancer
                    </text>

                    <text style={{fontSize:20,color:'#000000'}}>
                        Find task
                    </text>

                    <text style={{fontSize:20,color:'#000000'}}>
                        Guide
                    </text>
                </div>

    
                <div style={{flex:2,height:'100%',display:'flex',flexDirection:'column',alignItems: 'center',justifyContent: 'center',
                    backgroundColor: '#935765'}}>
                    <text style={{fontSize:20,color:'#000000'}}>
                        Login/Register
                    </text>
                </div>

            </div>
            
        )
    }
}
