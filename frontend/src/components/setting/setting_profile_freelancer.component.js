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
import { CATEGORIES_DOMAIN, HOURLY_RATE_DOMAIN } from '../../utils/constants'

export default class   SettingProfileFreelancerComponent extends Component {



    render(){
        const profile=this.props.profile;
        console.log('profile_freelancer :',profile.description);
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
                                        onChange={(value)=>this.props.updateInputs('tagline',value)}
                                        label='Tagline'
                                        value={profile.tagline} />
                                </div>

                                <div style={{width:'70%',marginTop:30}}>
                                    <NumberInputComponent 
                                        label='Hourly Rate'
                                        onChange={(value)=>this.props.updateInputs('hourly_rate',value[0])}
                                        domain={HOURLY_RATE_DOMAIN}
                                        value={[profile.hourly_rate]}/>
                                </div>

                             
                              

                            </div>

                            {/* col1_2 */}
                            <div style={{display:'flex',flexDirection: 'column',flex:1,
                                alignItems:'center'}}>

                                <div style={{width:'70%'}}>
                                    <LabeledSelectedInputComponent 
                                        onChange={value=>this.props.updateInputs('category',value)}
                                        label='Category'
                                        domain={CATEGORIES_DOMAIN.map(item=>item.name)}
                                        value={profile.category}/>
                                </div>    
                                <div style={{width: '70%',marginTop:30}}>
                                    <SkillPickerComponent 
                                        onChange={value=>this.props.updateInputs('skills',value)}
                                        label='Skills'
                                        category_name={profile.category}/>
                                </div>

                                {/* <div style={{width:'70%',marginTop:30}}>
                                    <AttachmentsComponent
                                        label='Attachments'
                                        is_edit={true}
                                        attachments={profile.attachments}/>
                                </div>                           */}
                            </div>

                        </div>

                            
                        {/* <div style={{width:'100%',marginTop:40}}>
                            <ExperienceListComponent
                                onChange={value=>this.props.updateInputs('experiences',value)} 
                                experiences={profile.experiences}
                                header_height={40} 
                                is_edit={true}/>
                        </div> */}
                        
                        <div style={{marginTop:30}}>
                           <TextareaInputComponent
                                onChange={value=>this.props.updateInputs('description',value)} 
                                label='Description'
                                value={profile.description} />
                       </div>

                </div>

                  
    
                
            </div>
                    
           
    )
    }
}

