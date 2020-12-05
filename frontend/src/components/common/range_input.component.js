//import from library 
import React, {Component} from 'react'

export default class RangeInputComponent extends Component {
    render(){
        return (
            <div style={{marginTop:20,display:'flex',flex:1,flexDirection: 'column'}}>
                <text style={{fontSize:20,color:'#000000'}}>
                    Estimated buget
                </text>
                
                <div style={{marginTop:15,width:'80%',height:5,backgroundColor: '#392583'}}/>
            </div>
        )
    }
}