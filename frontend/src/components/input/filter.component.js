//import from library 
import React, {Component} from 'react'
import { CATEGORIES_DOMAIN, FIXED_PRICE_DOMAIN, HOURLY_RATE_DOMAIN } from '../../utils/constants'
import ButtonComponent from '../common/button.component'
import LabeledInputComponent from '../input/labeled_input.component'
import LabeledSelectedInputComponent from '../input/labeled_selected_input.component'
import RangeInputComponent from '../input/range_input.component'
import SkillPickerComponent from './skill_picker.component'



export default class FilterComponent extends Component {


    render(){
        return (
            <div style={{width:'100%',display:'flex',flexDirection: 'column'}}>

                <div style={{width:'100%',marginBottom:10}}>
                    <ButtonComponent label='Search' height={45} onClick={this.props.clickSearch}/>
                </div>
                
                <LabeledSelectedInputComponent  
                    label='Category '
                    onChange={(value)=>this.props.updateInputs('category',value)}
                    value={CATEGORIES_DOMAIN[0].name}
                    domain={CATEGORIES_DOMAIN.map(item=>item.name)}/>

                
                <div style={{marginTop:20}}>
                    <LabeledInputComponent
                        onChange={(value)=>this.props.updateInputs('keyword',value)}
                        label='Keyword'
                        />
                </div>

                <div style={{marginTop:20}}>
                    <RangeInputComponent
                        label='Hourly Rate' 
                        onChange={(value)=>this.props.updateInputs('hourly_rate',value)}
                        domain={HOURLY_RATE_DOMAIN}
                        value={[20,400]}
                         />
                </div>

                <div style={{marginTop:20}}>
                    <RangeInputComponent 
                        label='Fixed Price' 
                        onChange={(value)=>this.props.updateInputs('fixed_price',value)}
                        domain={FIXED_PRICE_DOMAIN}
                        value={[1000,5000]}/>
                </div>

                <div style={{marginTop:20}}>
                    <SkillPickerComponent 
                        onChange={value=>this.props.updateInputs('skills',value)}
                        label="Skills"
                        category_name={CATEGORIES_DOMAIN[0].name}/>
                </div>

            </div>
       
    
        )
    }
}
