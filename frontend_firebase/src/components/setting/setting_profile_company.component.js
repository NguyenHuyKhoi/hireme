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
            <div style={styles.container}>

                <HeaderListComponent title='Hồ sơ' height={40}/>

                <div style={styles.body}>

                        <div style={styles.row1}>
                            <div style={styles.row1_col1}>

                                <div style={styles.field_container}>
                                    <LabeledInputComponent  
                                        onChange={value=>this.props.updateInputs('profile','company_name',value)}
                                        label='Tên công ty'
                                        value={profile.company_name}/>
                                </div>

                                <div style={styles.field_container}>
                                    <LabeledInputComponent 
                                        onChange={value=>this.props.updateInputs('profile','location',value)}
                                        label='Vị trí' 
                                        value={profile.location}/>
                                </div>
                                <div style={styles.field_container}>
                                    <LabeledInputComponent 
                                         onChange={value=>this.props.updateInputs('profile','tagline',value)}
                                         label='Mô tả ngắn'
                                        value={profile.tagline}/>
                                </div>
                            </div>

                            <div style={styles.row1_col2}>

                                <div style={styles.field_container}>
                                    <LabeledSelectedInputComponent
                                         onChange={(value)=>this.props.updateInputs('profile','employee_size',value)} 
                                        label='Quy mô'
                                        domain={COMPANY_SIZES_DOMAIN}
                                        value={profile.employee_size}/>
                                </div>

                                <div style={styles.field_container}>
                                    <LabeledSelectedInputComponent 
                                        onChange={(value)=>this.props.updateInputs('profile','business_area',value)} 
                                        label='Lĩnh vực'
                                        domain={BUSINESS_AREA_DOMAIN}
                                        value={profile.business_area} />
                                </div>

                                <div style={styles.field_container}>
                                    <LabeledInputComponent
                                        onChange={(value)=>this.props.updateInputs('profile','website_link',value)}
                                        onChange={(value)=>{}}
                                        label='Website' 
                                        value={profile.website_link}/>
                                </div>

                        
                            </div>


                        </div>
                        
                        <div style={styles.row2}>
                            <TextareaInputComponent 
                                 onChange={(value)=>this.props.updateInputs('profile','description',value)}
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
        marginTop:40
    }
}

