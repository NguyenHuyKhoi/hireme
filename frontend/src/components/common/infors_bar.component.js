//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK, GRAY_1, WHITE } from '../../utils/palette'

export default class InforsBarComponent extends Component {
    render(){
        const fields=this.props.fields;
        return (
            <div style={{width:'100%',display:'flex',flexDirection: 'row',
                justifyContent: 'space-between',alignItems: 'center'}}>
                {
                   fields.map((item,index)=>
                   <div 
                        key={''+index}
                        style={{display:'flex',flexDirection: 'column',alignItems: 'center'}}>
                       <text style={{fontSize:TEXT_SIZES.NORMAL,color:BLACK}}>
                           {item.value}
                       </text>
                       <text style={{fontSize:TEXT_SIZES.SMALL,color:GRAY_1,textAlign:'center'}}>
                           {item.key}
                       </text>
                   </div>
               ) 
                }
            </div>
      
        )
    }
}
