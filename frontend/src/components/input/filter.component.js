//import from library 
import React, {Component} from 'react'
import LabeledInputComponent from '../input/labeled_input.component'
import LabeledSelectedInputComponent from '../input/labeled_selected_input.component'
import RangeInputComponent from '../input/range_input.component'
import SkillsPickerComponent from '../input/skills_picker.component'

export default class FilterComponent extends Component {
    render(){
        return (
            <div style={{width:'100%',display:'flex',flexDirection: 'column'}}>

                <LabeledSelectedInputComponent label='Category'/>

                
                <div style={{marginTop:20}}>
                    <LabeledInputComponent label='Keyword'/>
                </div>

                <div style={{marginTop:20}}>
                    <RangeInputComponent label='Hourly Rate'/>
                </div>

                <div style={{marginTop:20}}>
                    <RangeInputComponent label='Fixed Price'/>
                </div>

                <SkillsPickerComponent/>
            </div>
       
    
        )
    }
}
