//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { GRAY_2 } from '../../utils/palette'

export default class NumberInputComponent extends Component {
    render(){
        return (
            <div style={{display:'flex',width:'100%',flexDirection: 'column'}}>
                <text style={{fontSize:textSizes.NORMAL,color:GRAY_2}}>
                    Set your buget
                </text>
                
                <div style={{marginTop:35,width:'80%',height:5,backgroundColor: '#392583'}}/>
            </div>
        )
    }
}