//import from library 
import React, {Component} from 'react'
import { inputField } from '../../redux/constant/input.constant'
import { textSizes } from '../../utils/constants'
import { BLACK, GRAY_1, GRAY_2, GRAY_3, GRAY_4,GRAY_5, WHITE } from '../../utils/palette'
import ButtonComponent from '../common/button.component'
import NumberInputComponent from '../input/number_input.component'

export default class TaskPlaceBidComponent extends Component {
    render(){
        return (
            
            <div style={{width:'100%',borderRadius:10,height: 400,
            boxShadow:'5px 5px 5px #707070',
            display:'flex',flexDirection: 'column',alignSelf: 'baseline'}}>

                <div style={{flex:1,
                    display:'flex',justifyContent: 'center',alignItems: 'center',backgroundColor:GRAY_4}}>
                    <text style={{fontSize:textSizes.NORMAL,color:BLACK}}>
                            Bidding on task
                    </text>
                </div>
                <div style={{flex:5,
                        padding:20,
                        display:'flex',flexDirection: 'column',
                        justifyContent: 'center',alignItems: 'center',
                        backgroundColor: GRAY_5}}>
                        
                        <NumberInputComponent   input_field={inputField.BIDDING_COST}/>
                     

                        <div style={{width: '100%',marginTop:20}}>
                            <NumberInputComponent
                                input_field={inputField.BIDDING_TIME}/>

                        </div>
                      

                        <div style={{marginTop: 40,width: '100%'}}>
                            <ButtonComponent  label='Place A Bid'/>
                        </div>
                    
                </div>

                <div style={{flex:1,
                    display:'flex',justifyContent: 'center',alignItems: 'center',
                        backgroundColor: GRAY_2}}>
                    <text style={{fontSize:textSizes.SMALL,color:WHITE}}>
                        More feasible cost, more chances.
                    </text>
                </div>
            </div>
                        
        
    
        )
    }
}
