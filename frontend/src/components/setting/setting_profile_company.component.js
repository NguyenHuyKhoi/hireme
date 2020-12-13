//import from library 
import React, {Component} from 'react'
import { inputField } from '../../redux/constant/input.constant'
import { WHITE } from '../../utils/palette'
import HeaderListComponent from '../common/header_list.component'

import LabeledInputComponent from '../input/labeled_input.component'
import LabeledSelectedInputComponent from '../input/labeled_selected_input.component'
import TextareaInputComponent from '../input/textarea_input.component'


export default class SettingProfileCompanyComponent extends Component {
   

    render(){
        const profile=this.props.profile;
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
                                        value={profile.company_name}
                                        input_field={inputField.COMPANY_NAME}/>
                                </div>

                                <div style={{width:'70%',marginTop:30}}>
                                    <LabeledInputComponent  
                                        value={profile.location}
                                        input_field={inputField.LOCATION}/>
                                </div>
                                <div style={{width:'70%',marginTop:30}}>
                                    <LabeledInputComponent 
                                        value={profile.tagline}
                                        input_field={inputField.TAGLINE}/>
                                </div>
                            </div>

                            {/* col1_2 */}
                            <div style={{display:'flex',flexDirection: 'column',flex:1,
                                alignItems:'center'}}>

                                <div style={{width:'70%'}}>
                                    <LabeledSelectedInputComponent 
                                        value={profile.employee_size}
                                        input_field={inputField.COMPANY_SIZE}/>
                                </div>

                                <div style={{width:'70%',marginTop:30}}>
                                    <LabeledSelectedInputComponent 
                                        value={profile.business_area} 
                                        input_field={inputField.BUSINESS_AREA}/>
                                </div>

                                <div style={{width:'70%',marginTop:30}}>
                                    <LabeledInputComponent 
                                        value={profile.website_link}
                                        input_field={inputField.LINK}/>
                                </div>

                        
                            </div>


                        </div>
                        
                        <div style={{marginTop:40}}>
                            <TextareaInputComponent 
                                input_field={inputField.DESCRIPTION} />
                        </div>

                </div>
                  
                
            </div>
                    
           
    )
    }
}

