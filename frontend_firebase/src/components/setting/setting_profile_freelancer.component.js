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
import { toArray } from '../../utils/helper'

export default class   SettingProfileFreelancerComponent extends Component {



    render(){
        const profile=this.props.profile;
        const category=profile.category;
        const skills=toArray(profile.skills)
        const experiences=toArray(profile.experiences)

        console.log('settingFreelancer:',category,skills)
        // const picked_skills=this.props.picked_skills
        return (
            <div style={styles.container}>

                <HeaderListComponent title='Profile' height={40}/>

                <div style={styles.body}>

                        <div style={styles.row1}>
                            

                            <div style={styles.row1_col1}>

                                <div style={styles.field_container}>
                                    <LabeledInputComponent
                                        onChange={(value)=>this.props.updateInput('profile','tagline',value)}
                                        label='Mô tả ngắn'
                                        value={profile.tagline} />
                                </div>

                                <div style={styles.field_container}>
                                    <NumberInputComponent 
                                        label='Giá thuê theo giờ'
                                        unit=''
                                        step={10000}
                                        onChange={(value)=>this.props.updateInput('profile','hourly_rate',value)}
                                        domain={HOURLY_RATE_DOMAIN}
                                        value={[profile.hourly_rate]}/>
                                </div>


                             
                              

                            </div>

                            {/* col1_2 */}
                            <div style={styles.row1_col2}>

                                <div style={styles.field_container}>
                                    <LabeledSelectedInputComponent 
                                        onChange={value=>this.props.updateInput('profile','category',value)}
                                        label='Lĩnh vực'
                                        domain={CATEGORIES_DOMAIN.map(item=>item.name)}
                                        value={profile.category}/>
                                </div>  

                                <div style={styles.field_container}>
                                    <SkillPickerComponent 
                                        onChange={value=>this.props.updateInput('profile','skills',value)}
                                        label='Skills'
                                        picked_skills={skills}
                                        category={category}/>
                                </div>

                                                 
                            </div>

                        </div>

                            
                        <div style={{width:'100%',marginTop:40}}>
                            <ExperienceListComponent
                                onChange={value=>this.props.updateInput('profile','experiences',value)} 
                                experiences={experiences}
                                header_height={40} 
                                is_edit={true}/>
                        </div>
                        
                        <div style={styles.row2}>
                           <TextareaInputComponent
                                onChange={value=>this.props.updateInput('profile','description',value)} 
                                label='Mô tả chi tiết'
                                value={profile.description} />
                       </div>

                </div>

                  
    
                
            </div>
                    
           
    )
    }
}

const styles={
    container:{
        flex:1,
        display: 'flex',
        flexDirection:'column',
        backgroundColor:WHITE,
        borderRadius:8,
        boxShadow:'3px 5px 3px 3px #707070'
    },
    body:{
        flex:1,
        padding:50,
        display:'flex',
        justifyContent:'center',
        flexDirection:'column'
    },
    row1:{
        display:'flex',
        flexDirection: 'row'
    },
    row1_col1:{
        display:'flex',
        flex:1,
        flexDirection: 'column'
    },
    field_container:{
        width:'70%',
        marginTop:30
    },
    row1_col2:{
        display:'flex',
        flexDirection: 'column',
        flex:1,
        alignItems:'center'
    },
    row2:{
        marginTop:30
    }
}
