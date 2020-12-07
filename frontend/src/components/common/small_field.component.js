//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
export default class SmallFieldComponent extends Component {
    render(){
        return (
            <text style={{fontSize:textSizes.SMALL,color:this.props.label_color,
                paddingTop:2,paddingLeft:2,paddingLeft:5,paddingRight:5,
                backgroundColor: this.props.background_color,borderRadius:5}}>
                {this.props.label}
            </text>
        )
    }
}
