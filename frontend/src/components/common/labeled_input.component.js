//import from library 
import React, {Component} from 'react'

export default class LabeledInputComponent extends Component {
    render(){

        return (

            <div style={{marginTop:20,display:'flex',flex:1,flexDirection: 'column'}}>
                <text style={{fontSize:20,color:'#000000'}}>
                    {this.props.label}
                </text>
                
                <input style={{width:'100%',height:30,marginTop:7}} placeholder='Computer science'/>
            </div>
        )
    }
}