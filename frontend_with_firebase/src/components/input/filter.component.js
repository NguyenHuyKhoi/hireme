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
        const category=this.props.category!==undefined?this.props.category:CATEGORIES_DOMAIN[0].name;

        console.log('category_filter:',category)
        return (
            <div style={styles.container}>

                <div style={styles.btn_container}>
                    <ButtonComponent label='Search' height={45} onClick={this.props.clickSearch}/>
                </div>
                
                <LabeledSelectedInputComponent  
                    label='Category '
                    onChange={(value)=>this.props.updateInputs('category',value)}
                    value={CATEGORIES_DOMAIN[0].name}
                    domain={CATEGORIES_DOMAIN.map(item=>item.name)}/>

                <div style={styles.field_container}>
                    <SkillPickerComponent 
                        onChange={value=>this.props.updateInputs('skills',value)}
                        label="Skills"
                        category={category}/>
                </div>
                
                <div style={styles.field_container}>
                    <LabeledInputComponent
                        onChange={(value)=>this.props.updateInputs('keyword',value)}
                        label='Keyword'
                        />
                </div>

                <div style={styles.field_container}>
                    <RangeInputComponent
                        label='Hourly Rate' 
                        onChange={(value)=>this.props.updateInputs('hourly_rate',value)}
                        domain={HOURLY_RATE_DOMAIN}
                        value={[20,400]}
                         />
                </div>

                <div style={styles.field_container}>
                    <RangeInputComponent 
                        label='Fixed Price' 
                        onChange={(value)=>this.props.updateInputs('fixed_price',value)}
                        domain={FIXED_PRICE_DOMAIN}
                        value={[1000,5000]}/>
                </div>

                

            </div>
       
    
        )
    }
}

const styles={
    container:{
        width:'100%',
        display:'flex',
        flexDirection: 'column'
    },
    btn_container:{
        width:'100%',
        marginBottom:10
    },
    field_container:{
        marginTop:20
    }
}

