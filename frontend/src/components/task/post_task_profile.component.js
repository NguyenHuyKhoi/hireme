//import from library 
import React, {Component} from 'react'
import { BLACK, GRAY_1, GRAY_2, GRAY_3, WHITE } from '../../utils/palette'

import LabeledInputComponent from '../input/labeled_input.component'
import TextareaInputComponent from '../input/textarea_input.component'
import LabeledSelectedInputComponent from '../input/labeled_selected_input.component'
import RangeInputComponent from '../input/range_input.component'
import ListPickerComponent from '../input/list_picker.component'
import UploadFilesComponent from '../common/upload_files.component'
import ExperienceListComponent from '../freelancer/experience_list.component'
import AttachmentsComponent from '../input/attachments.component'
import { textSizes } from '../../utils/constants'
import HeaderListComponent from '../common/header_list.component'
import { inputField } from '../../redux/constant/input.constant'

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
                                    <LabeledInputComponent input_field={inputField.TASK_NAME}/>
                                </div>

                                <div style={{width:'80%',marginTop:30}}>
                                    <RangeInputComponent input_field={inputField.TASK_BUDGET}/>
                                </div>

                                <div style={{width:'100%',marginTop:30}}>
                                    <ListPickerComponent input_field={inputField.SKILLS}/>
                                </div>


                            </div>

                                {/* col1_2 */}
                            <div style={{display:'flex',flexDirection: 'column',flex:1,
                                alignItems:'center'}}>

                                <div style={{width:'70%'}}>
                                    <LabeledSelectedInputComponent input_field={inputField.CATEGORY}/>
                                </div>

                                <div style={{width:'70%',marginTop:30}}>
                                    <LabeledSelectedInputComponent input_field={inputField.TASK_TYPE}/>
                                </div>

                                <div style={{width:'70%',marginTop:30}}>
                                    <AttachmentsComponent is_edit={true} 
                                        input_field={inputField.FILES}/>
                                </div>
                            </div>

                        
                        </div>

                        {/* row2 */}

                       <div style={{marginTop:30}}>
                           <TextareaInputComponent label='Description' placeholder='Describe Your Task'/>
                       </div>
                    
                
                        
        
                    
                </div>
              
            </div>
                  
           
    )
    }
}

