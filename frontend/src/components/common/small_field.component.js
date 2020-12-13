//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
export default class SmallFieldComponent extends Component {
    render(){
        return (
            <text style={{fontSize:TEXT_SIZES.SMALL,color:this.props.label_color,
                paddingTop:2,paddingLeft:2,paddingLeft:5,paddingRight:5,
                backgroundColor: this.props.background_color,borderRadius:5}}>
                {this.props.label}
            </text>
        )
    }
}
