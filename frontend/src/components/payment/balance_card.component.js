//import from library 
import React, {Component} from 'react'
import { inputField } from '../../redux/constant/input.constant'
import { textSizes } from '../../utils/constants'
import { BLACK, GRAY_2, GRAY_4, GRAY_5, GREEN_1, WHITE, YELLOW } from '../../utils/palette'
import ButtonComponent from '../common/button.component'
import HeaderListComponent from '../common/header_list.component'

import LabeledInputComponent from '../input/labeled_input.component'
import LabeledSelectedInputComponent from '../input/labeled_selected_input.component'


export default class BalanceCardComponent extends Component {
   

    render(){
        return (
            <div style={{backgroundColor:WHITE,
                height:360,
                boxShadow:'3px 5px 3px 3px #707070',
                display:'flex',flex:1,flexDirection: 'column'}}>

                <HeaderListComponent title='Balance' height={40}/>
                <div style={{flex:1,display:'flex',justifyContent: 'center',alignItems:'center'}}>

                    <div style={{height:'80%',width:'70%',borderRadius:8,
                        backgroundColor:GRAY_4,
                        borderWidth:5,borderColor:BLACK,
                        display:'flex',flexDirection:'column',alignItems:'center',justifyContent: 'center'}}>

                        <text style={{fontSize:textSizes.HEADER,color:GRAY_2}}>
                            Current Account
                        </text>
                        <text style={{fontSize:textSizes.HUGE,color:BLACK,fontWeight:'bold'}}>
                            $2500
                        </text>

                    
                        <div style={{width:'70%',display:'flex',flexDirection:'row'}}>
                            <div style={{flex:4}}>
                                <LabeledInputComponent 
                                    input_field={inputField.TRANSFER_AMOUNT}/>
                            </div>

                            <div style={{flex:1}}/>

                            <div style={{flex:4}}>
                                {
                                    1===0?
                                    <LabeledSelectedInputComponent 
                                        input_field={inputField.TRANSFER_CARD}/>
                                    :
                                    <text style={{fontSize: textSizes.NORMAL,color:BLACK}}>
                                        You have no credit card, please insert one.
                                    </text>
                                }
                             
                            </div>
                          
                        </div>

                        <div style={{width:'90%',marginTop: 20,display:'flex',flexDirection:'row',justifyContent: 'space-between'}}>
                            <div style={{width: '20%'}}>
                                <ButtonComponent label='Withdraw' color={YELLOW}/>
                            </div>

                            <div style={{width: '20%'}}>
                                <ButtonComponent label='Recharge' color={GREEN_1}/>
                            </div>

                        </div>
                    </div>
                </div>
            
        </div>
   
    )
    }
}

