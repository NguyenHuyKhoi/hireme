//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK } from '../../utils/palette'

export default class LabeledInputComponent extends Component {
    render(){

        return (

            <div style={{display:'flex',width: '100%',flexDirection: 'column'}}>
                <text style={{fontSize:textSizes.BIG,color:BLACK}}>
                    {this.props.label}
                </text>
                
                <input style={{width:'100%',height:30,marginTop:7}} placeholder='Computer science'/>
            </div>
        )
    }
}