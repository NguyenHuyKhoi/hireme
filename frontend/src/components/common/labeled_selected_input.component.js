//import from library 
import React, {Component} from 'react'

export default class LabeledSelectedInputComponent extends Component {
    render(){
        const color= this.props.color
        const label=this.props.label
        return (

            <div style={{marginTop:20,display:'flex',flex:1,flexDirection: 'column'}}>
                <text style={{fontSize:20,color:'#000000'}}>
                    Hourly Rate
                </text>
                
                <input style={{width:'100%',height:30,marginTop:7}} placeholder='Computer science'/>
            </div>
        )
    }
}