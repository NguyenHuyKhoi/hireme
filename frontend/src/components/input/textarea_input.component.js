//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, GRAY_1, GRAY_3, WHITE } from '../../utils/palette'

export default class TextareaInputComponent extends Component {
    render(){

        return (
            <div style={{display:'flex',width:'100%',height:240,alignSelf:'baseline',
                flexDirection: 'column'}}>
                <text style={{fontSize:textSizes.NORMAL,color:BLACK}}>
                    {this.props.label}
                </text> 
                <textarea  style={{marginTop:20,flex:1,padding:10,backgroundColor: WHITE,
                    fontSize:textSizes.NORMAL,
                    borderColor:GRAY_3,borderWidth:2,borderRadius:10}}
                    placeholder={this.props.placeholder}
                    color={GRAY_1}/>
            </div>
        )
    }
}