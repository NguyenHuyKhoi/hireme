//import from library 
import React, {Component} from 'react'
import { WHITE } from '../../utils/palette'
import HeaderListComponent from '../common/header_list.component'

import LabeledInputComponent from '../input/labeled_input.component'
import LabeledSelectedInputComponent from '../input/labeled_selected_input.component'
import TextareaInputComponent from '../input/textarea_input.component'
import {BUSINESS_AREA_DOMAIN, COMPANY_SIZES_DOMAIN} from '../../utils/constants'

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
                                        label='Company Name'
                                        value={profile.company_name}/>
                                </div>

                                <div style={{width:'70%',marginTop:30}}>
                                    <LabeledInputComponent 
                                        label='Location' 
                                        value={profile.location}/>
                                </div>
                                <div style={{width:'70%',marginTop:30}}>
                                    <LabeledInputComponent 
                                         label='Tagline'
                                        value={profile.tagline}/>
                                </div>
                            </div>

                            {/* col1_2 */}
                            <div style={{display:'flex',flexDirection: 'column',flex:1,
                                alignItems:'center'}}>

                                <div style={{width:'70%'}}>
                                    <LabeledSelectedInputComponent 
                                        label='Employee Size'
                                        domain={COMPANY_SIZES_DOMAIN}
                                        value={profile.employee_size}/>
                                </div>

                                <div style={{width:'70%',marginTop:30}}>
                                    <LabeledSelectedInputComponent 
                                        label='Business Area'
                                        domain={BUSINESS_AREA_DOMAIN}
                                        value={profile.business_area} />
                                </div>

                                <div style={{width:'70%',marginTop:30}}>
                                    <LabeledInputComponent
                                        label='Website Link' 
                                        value={profile.website_link}/>
                                </div>

                        
                            </div>


                        </div>
                        
                        <div style={{marginTop:40}}>
                            <TextareaInputComponent 
                                label='Description' />
                        </div>

                </div>
                  
                
            </div>
                    
           
    )
    }
}

