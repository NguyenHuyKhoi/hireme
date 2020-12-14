//import from library 
import React, {Component} from 'react'
import { BLACK, GRAY_1, GRAY_2, GRAY_3, WHITE } from '../../utils/palette'

import LabeledInputComponent from '../input/labeled_input.component'
import TextareaInputComponent from '../input/textarea_input.component'
import LabeledSelectedInputComponent from '../input/labeled_selected_input.component'
import RangeInputComponent from '../input/range_input.component'
import SkillPickerComponent from '../input/skill_picker.component'
import UploadFilesComponent from '../common/upload_files.component'
import ExperienceListComponent from '../freelancer/experience_list.component'
import AttachmentsComponent from '../input/attachments.component'
import { CATEGORIES_DOMAIN, FIXED_PRICE_DOMAIN, TASKS_TYPE_DOMAIN, TEXT_SIZES } from '../../utils/constants'
import HeaderListComponent from '../common/header_list.component'

export default class PostTaskProfileComponent extends Component {

    render(){
        return (

            <div style={{
                flex:1,display: 'flex',flexDirection:'column',backgroundColor:WHITE,
                borderRadius:8,
                boxShadow:'3px 5px 3px 3px #707070',}}>
                <HeaderListComponent title='Complete This Form' height={40}/>

                <div style={{flex:1,
                    padding:50,
                    display:'flex',justifyContent:'center',flexDirection:'column'}}>
                
                        {/* row1 */}
                        <div style={{display:'flex',flexDirection: 'row'}}>
                            {/* col1_1 */}
                            <div style={{display:'flex',flex:1,flexDirection: 'column'}}>

                                <div style={{width:'70%'}}>
                                    <LabeledInputComponent 
                                        onChange={(value)=>this.props.updateInputs('name',value)}
                                        label='Task Name'/>
                                </div>

                                <div style={{width:'80%',marginTop:30}}>
                                    <RangeInputComponent 
                                        onChange={(value)=>{
                                            this.props.updateInputs('min_suggested_price',value[0]);
                                            this.props.updateInputs('max_suggested_price',value[1])
                                        }}
                                        label='What is your estimated budget?' 
                                        domain={FIXED_PRICE_DOMAIN}
                                        value={[1000,5000]}/>
                                </div>

                                <div style={{width:'100%',marginTop:30}}>
                                    <SkillPickerComponent  
                                        onChange={(value)=>this.props.updateInputs('skills',value)}
                                        label='Required Skills'
                                        category_name={CATEGORIES_DOMAIN[0].name} />
                                </div>


                            </div>

                                {/* col1_2 */}
                            <div style={{display:'flex',flexDirection: 'column',flex:1,
                                alignItems:'center'}}>

                                <div style={{width:'70%'}}>
                                    <LabeledSelectedInputComponent  
                                         onChange={(value)=>this.props.updateInputs('category',value)}
                                        label='Category'
                                        domain={CATEGORIES_DOMAIN.map(item=>item.name)}
                                        value={CATEGORIES_DOMAIN[0].name}/>
                                </div>

                                <div style={{width:'70%',marginTop:30}}>
                                    <LabeledSelectedInputComponent
                                        onChange={(value)=>this.props.updateInputs('price_type',value)}
                                        label='Type'
                                        domain={TASKS_TYPE_DOMAIN}
                                        value={TASKS_TYPE_DOMAIN[0]} />
                                </div>

                                {/* <div style={{width:'70%',marginTop:30}}>
                                    <AttachmentsComponent
                                        label='Attachments'
                                        onChange={(value)=>this.props.updateInputs('attachments',value)}
                                        is_edit={true} />
                                </div> */}
                            </div>

                        
                        </div>

                        {/* row2 */}

                       <div style={{marginTop:30}}>
                           <TextareaInputComponent 
                              onChange={(value)=>this.props.updateInputs('description',value)}
                            label='Descrition'/>
                       </div>
                    
                
                        
        
                    
                </div>
              
            </div>
                  
           
    )
    }
}

