//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK } from '../../utils/palette'

export default class RangeInputComponent extends Component {
    render(){
        return (
            <div style={{display:'flex',width: '100%',flexDirection: 'column'}}>
                <text style={{fontSize:textSizes.NORMAL,color:BLACK}}>
                    {this.props.label===undefined?'No Label':this.props.label}
                </text>
                
                <div style={{marginTop:15,width:'80%',height:5,backgroundColor: '#392583'}}/>
            </div>
        )
    }
}