//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLUE_1, WHITE } from '../../utils/palette'

export default class ButtonComponent extends Component {
    render(){
        const label=this.props.label
        const color=this.props.color;
        const text_color=this.props.text_color;
        const height=this.props.height;
        return (
            <div 
                onClick={this.props.onClick}
                style={{...styles.container,
                    backgroundColor: color!==undefined?color:BLUE_1,
                    height: height!==undefined?height:45
                    }}>
                <text style={{ fontSize: TEXT_SIZES.NORMAL,color:text_color!==undefined?text_color:WHITE}}>
                   {label}
                </text>
            </div>
        )
    }
}

const styles= {
    container : {
        display: 'flex',
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 5
    }
}