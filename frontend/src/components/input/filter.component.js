//import from library 
import React, {Component} from 'react'
import LabeledInputComponent from '../input/labeled_input.component'
import LabeledSelectedInputComponent from '../input/labeled_selected_input.component'
import RangeInputComponent from '../input/range_input.component'
import ListPickerComponent from './list_picker.component'

import { inputField } from '../../redux/constant/input.constant'


export default class FilterComponent extends Component {


    render(){
        return (
            <div style={{width:'100%',display:'flex',flexDirection: 'column'}}>

                <LabeledSelectedInputComponent 
                    input_field={inputField.CATEGORY}/>

                
                <div style={{marginTop:20}}>
                    <LabeledInputComponent 
                        input_field={inputField.KEYWORD}/>
                </div>

                <div style={{marginTop:20}}>
                    <RangeInputComponent 
                        input_field={inputField.HOURLY_RATE}/>
                </div>

                <div style={{marginTop:20}}>
                    <RangeInputComponent
                        input_field={inputField.FIXED_PRICE} />
                </div>

                <div style={{marginTop:20}}>
                    <ListPickerComponent 
                        input_field={inputField.SKILLS}/>
                </div>

            </div>
       
    
        )
    }
}
