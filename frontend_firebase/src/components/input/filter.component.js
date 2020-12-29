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
        const category=this.props.category;

        const is_freelancer_search=this.props.is_freelancer_search!==undefined?this.props.is_freelancer_search:false
        console.log('category_filter:',category)
        return (
            <div style={styles.container}>

                <div style={styles.btn_container}>
                    <ButtonComponent label='Tìm' height={45} onClick={this.props.clickSearch}/>
                </div>
                
                <LabeledSelectedInputComponent  
                    label='Danh mục '
                    onChange={(value)=>this.props.updateInput('filter','category',value)}
                    value={''}
                    domain={CATEGORIES_DOMAIN.map(item=>item.name)}/>

                {
                    category===''?
                    null
                    :
                    <div style={styles.field_container}>
                        <SkillPickerComponent 
                            onChange={value=>this.props.updateInput('filter','skills',value)}
                            label="Kỹ năng"
                            category={category}/>
                    </div>
                }
               
                
                <div style={styles.field_container}>
                    <LabeledInputComponent
                        onChange={(value)=>this.props.updateInput('filter','keyword',value)}
                        label='Từ khóa'
                        />
                </div>

                
                <div style={styles.field_container}>
                {
                    is_freelancer_search?
                    <RangeInputComponent
                        label='Giá theo giờ' 
                        step={10000}
                        unit='vnd'
                        onChange={(value)=>this.props.updateInput('filter','hourly_rate',value)}
                        domain={HOURLY_RATE_DOMAIN}
                        value={HOURLY_RATE_DOMAIN}
                    />
                    :
                    <RangeInputComponent 
                        label='Giá dự án' 
                        step={100000}
                        unit='vnd'
                        onChange={(value)=>this.props.updateInput('filter','fixed_price',value)}
                        domain={FIXED_PRICE_DOMAIN}
                        value={FIXED_PRICE_DOMAIN}/>
                }
                   
                </div>

                <div style={styles.field_container}>
                   
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

