//import from library 
import React, {Component} from 'react'

export default class SingleFieldComponent extends Component {
    render(){
        
        return (
            <div style={{marginTop:20,width:'100%',display:'flex',flexDirection: 'column',alignSelf: 'baseline',backgroundColor: '#395933'}}>

            <text style={{fontSize:22,color:'#000000'}}>
                Business 
            </text>

            <text style={{marginLeft:20,fontSize:22,color:'#000000'}}>
                Fin tech
            </text>
           
        </div> 
        )
    }
}
