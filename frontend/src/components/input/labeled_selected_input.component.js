//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK } from '../../utils/palette'

export default class LabeledSelectedInputComponent extends Component {
    render(){
        return (

            <div style={{display:'flex',width: '100%',flexDirection: 'column'}}>
                <text style={{fontSize:textSizes.NORMAL,color:BLACK}}>
                    {this.props.label}
                </text>
                
                <input style={{width:'100%',height:30,marginTop:15,fontSize:textSizes.NORMAL}} placeholder='Computer science'/>
            </div>
        )
    }
}