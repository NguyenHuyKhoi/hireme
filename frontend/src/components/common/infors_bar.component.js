//import from library 
import React, {Component} from 'react'

export default class InforsBarComponent extends Component {
    render(){
        const Bar=
            [1,2,3].map((item)=>
                <div style={{display:'flex',flexDirection: 'column',alignItems: 'center'}}>
                    <text style={{marginTop:10,fontSize:20,color:'#000000',fontWeight:'bold',marginLeft:20,marginRight:20}}>
                        $35
                    </text>
                    <text style={{marginTop:10,fontSize:14,color:'#ffffff',marginTop:8,textAlign:'center',marginLeft:20,marginRight:20}}>
                        Hourly Rate
                    </text>
                </div>
            )
            
        return (
            <Bar/>
        )
    }
}
