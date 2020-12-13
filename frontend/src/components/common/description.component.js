//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK, GRAY_1, WHITE } from '../../utils/palette'

export default class DescriptionComponent extends Component {
    render(){
            
        return (
            <div style={{flex:1,alignSelf: 'baseline',
                display:'flex',flexDirection: 'column'}}>
                <text style={{fontSize:TEXT_SIZES.BIG,color:BLACK}}>
                    {this.props.title}
                </text>

                <text style={{marginTop: 8,fontSize:TEXT_SIZES.NORMAL,color:GRAY_1,textAlign:'left'}}>
                    {this.props.content}
                </text>
            </div>

      
        )
    }
}
