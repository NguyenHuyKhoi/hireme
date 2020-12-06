//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
export default class SmallFieldComponent extends Component {
    render(){
        return (
            <div style={{
                backgroundColor: this.props.background_color,borderRadius:5,
                alignSelf: 'baseline',
                display: 'flex',justifyContent: 'center',alignItems: 'center',
                paddingTop:2,paddingLeft:2,paddingLeft:5,paddingRight:5 }}>
                <text style={{fontSize:textSizes.SMALL,color:this.props.label_color}}>
                    {this.props.label}
                </text>
            </div>
        )
    }
}
