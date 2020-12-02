//import from library 
import React, {Component} from 'react'

export default class ButtonComponent extends Component {
    render(){
        const color= this.props.color
        const label=this.props.label
        return (
            <div 
                onClick={this.props.onClick}
                style={{...styles.container,backgroundColor: color
            }}>
                <text style={styles.label}>
                   {label}
                </text>
            </div>
        )
    }
}

const styles= {
    container : {
        display: 'flex',
        height:40,
        width:120,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 5
    },
    label :{
        fontSize: 20,
        color: '#ffffff'
    }
}