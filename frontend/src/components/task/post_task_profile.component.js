//import from library 
import React, {Component} from 'react'
import { BLACK, GRAY_1, GRAY_2, GRAY_3, WHITE } from '../../utils/palette'

import LabeledInputComponent from '../input/labeled_input.component'
import TextareaInputComponent from '../input/textarea_input.component'
import LabeledSelectedInputComponent from '../input/labeled_selected_input.component'
import RangeInputComponent from '../input/range_input.component'
import SkillsPickerComponent from '../input/skills_picker.component'
import UploadFilesComponent from '../common/upload_files.component'
import ExperienceListComponent from '../freelancer/experience_list.component'
import AttachmentsComponent from './attachments.component'
import { textSizes } from '../../utils/constants'
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
                                    <LabeledInputComponent label='Project Name'/>
                                </div>

                                <div style={{width:'80%',marginTop:30}}>
                                    <RangeInputComponent label='Budget'/>
                                </div>

                                <div style={{width:'100%',marginTop:30}}>
                                    <SkillsPickerComponent/>
                                </div>


                            </div>

                                {/* col1_2 */}
                            <div style={{display:'flex',flexDirection: 'column',flex:1,
                                alignItems:'center'}}>

                                <div style={{width:'70%'}}>
                                    <LabeledSelectedInputComponent label='Category'/>
                                </div>

                                <div style={{width:'70%',marginTop:30}}>
                                    <LabeledSelectedInputComponent label='Type'/>
                                </div>

                                <div style={{width:'70%',marginTop:30}}>
                                    <AttachmentsComponent can_upload={true}/>
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

