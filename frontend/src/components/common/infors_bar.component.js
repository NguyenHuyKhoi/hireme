//import from library 
import React, {Component} from 'react'

export default class InforsBarComponent extends Component {
    render(){
            
        return (
            <div style={{marginTop:60,width:'100%',display:'flex',flexDirection: 'row',
                justifyContent: 'space-between',alignItems: 'center'}}>
                {
                   [1,2,3].map((item)=>
                   <div style={{display:'flex',flexDirection: 'column',alignItems: 'center'}}>
                       <text style={{fontSize:20,color:'#000000',fontWeight:'bold'}}>
                           $35
                       </text>
                       <text style={{fontSize:14,color:'#ffffff',textAlign:'center'}}>
                           Hourly Rate
                       </text>
                   </div>
               ) 
                }
            </div>
      
        )
    }
}
