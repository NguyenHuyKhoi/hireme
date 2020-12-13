//import from library 
import React, {Component} from 'react'

import LabeledInputComponent from '../input/labeled_input.component'
import LabeledSelectedInputComponent from '../input/labeled_selected_input.component'
import NumberInputComponent from '../input/number_input.component'
import SkillPickerComponent from '../input/skill_picker.component'
import ExperienceListComponent from '../freelancer/experience_list.component'
import HeaderListComponent from '../common/header_list.component'
import { WHITE } from '../../utils/palette'
import AttachmentsComponent from '../input/attachments.component'
import TextareaInputComponent from '../input/textarea_input.component'
import { inputField } from '../../redux/constant/input.constant'
import { categories } from '../../redux/constant/domain_value.constant'

export default class   SettingProfileFreelancerComponent extends Component {



    render(){
        const profile=this.props.profile;
        console.log('profile_freelancer :',profile);
        return (
            <div style={{
                flex:1,display: 'flex',flexDirection:'column',backgroundColor:WHITE,
                borderRadius:8,
                boxShadow:'3px 5px 3px 3px #707070',}}>
                <HeaderListComponent title='Profile' height={40}/>

                <div style={{flex:1,
                    padding:50,
                    display:'flex',justifyContent:'center',flexDirection:'column'}}>

                        <div style={{display:'flex',flexDirection: 'row'}}>
                            {/* col1_1 */}
                            <div style={{display:'flex',flex:1,flexDirection: 'column'}}>

                                <div style={{width:'70%'}}>
                                    <LabeledInputComponent
                                        value={profile.tagline} 
                                        input_field={inputField.TAGLINE}/>
                                </div>

                                <div style={{width:'70%',marginTop:30}}>
                                    <NumberInputComponent 
                                        value={[profile.hourly_rate]}
                                        input_field={inputField.HOURLY_RATE}/>
                                </div>

                                <div style={{width: '100%',marginTop:30}}>
                                    <SkillPickerComponent 
                                        value={profile.skills}
                                        input_field={inputField.SKILLS} />
                                </div>
                              

                            </div>

                            {/* col1_2 */}
                            <div style={{display:'flex',flexDirection: 'column',flex:1,
                                alignItems:'center'}}>

                                <div style={{width:'70%'}}>
                                    <LabeledSelectedInputComponent 
                                        value={profile.category}
                                        input_field={inputField.CATEGORY}/>
                                </div>    

                                <div style={{width:'70%',marginTop:30}}>
                                    <AttachmentsComponent
                                        attachments={profile.attachments}
                                        is_edit={true} input_field={inputField.FILES}/>
                                </div>                          
                            </div>




                        </div>

                      
                            
                        <div style={{width:'100%',marginTop:40}}>
                            <ExperienceListComponent 
                                experiencers={profile.experiencers}
                                header_height={40} 
                                is_edit={true}/>
                        </div>
                        
                        <div style={{marginTop:30}}>
                           <TextareaInputComponent
                            value={profile.description}
                             input_field={inputField.DESCRIPTION} />
                       </div>

                </div>

                  
    
                
            </div>
                    
           
    )
    }
}

