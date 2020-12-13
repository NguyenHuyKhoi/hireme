//import from library 
import React, {Component} from 'react'
import { CATEGORIES_DOMAIN, FIXED_PRICE_DOMAIN, HOURLY_RATE_DOMAIN } from '../../utils/constants'
import LabeledInputComponent from '../input/labeled_input.component'
import LabeledSelectedInputComponent from '../input/labeled_selected_input.component'
import RangeInputComponent from '../input/range_input.component'
import SkillPickerComponent from './skill_picker.component'



export default class FilterComponent extends Component {
const 

    render(){
        return (
            <div style={{width:'100%',display:'flex',flexDirection: 'column'}}>

                <LabeledSelectedInputComponent  
                    label='Category '
                    value={CATEGORIES_DOMAIN[0].name}
                    domain={CATEGORIES_DOMAIN.map(item=>item.name)}/>

                
                <div style={{marginTop:20}}>
                    <LabeledInputComponent
                        label='Keyword'
                        />
                </div>

                <div style={{marginTop:20}}>
                    <RangeInputComponent
                        label='Hourly Rate' 
                        domain={HOURLY_RATE_DOMAIN}
                        value={[20,400]}
                         />
                </div>

                <div style={{marginTop:20}}>
                    <RangeInputComponent 
                        label='Fixed Price' 
                        domain={FIXED_PRICE_DOMAIN}
                        value={[1000,5000]}/>
                </div>

                <div style={{marginTop:20}}>
                    <SkillPickerComponent 
                        label="Skills"
                        category_name={CATEGORIES_DOMAIN[0].name}/>
                </div>

            </div>
       
    
        )
    }
}
