//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, GRAY_1, WHITE } from '../../utils/palette'

export default class InforsBarComponent extends Component {
    render(){
            
        return (
            <div style={{width:'100%',display:'flex',flexDirection: 'row',
                justifyContent: 'space-between',alignItems: 'center'}}>
                {
                   [1,2,3].map((item)=>
                   <div style={{display:'flex',flexDirection: 'column',alignItems: 'center'}}>
                       <text style={{fontSize:textSizes.NORMAL,color:BLACK}}>
                           $35
                       </text>
                       <text style={{fontSize:textSizes.SMALL,color:GRAY_1,textAlign:'center'}}>
                           Hourly Rate
                       </text>
                   </div>
               ) 
                }
            </div>
      
        )
    }
}
