//import from library 
import React, {Component} from 'react'
import ChatComponent from '../../components/chat/chat.component'
import LabeledInputComponent from '../../components/input/labeled_input.component'
import LabeledSelectedInputComponent from '../../components/input/labeled_selected_input.component'
import RangeInputComponent from '../../components/input/range_input.component'
import SidebarComponent from '../../components/common/side_bar.component'
import SkillPickerComponent from '../../components/input/skill_picker.component'
import UploadFilesComponent from '../../components/common/upload_files.component'
import SettingAccountComponent from '../../components/setting/setting_account.component'
import SettingPasswordComponent from '../../components/setting/setting_password.component'
import SettingProfileCompanyComponent from '../../components/setting/setting_profile_company.component'
import SettingProfileFreelancerComponent from '../../components/setting/setting_profile_freelancer.component'
import { routePaths, SIDEBAR_RATIO,PADDING_BODY_DASHBOARD } from '../../utils/constants'
import { GRAY_6 } from '../../utils/palette'
import HeaderListComponent from '../../components/common/header_list.component'
import ButtonComponent from '../../components/common/button.component'
import { Link } from 'react-router-dom'

import api from '../../sample_db/fake_api_responses.json'
export default class AdminSettingScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            tasks:[]
        }
    }

    componentDidMount=()=>{
        this.setState({
            tasks:api.get_task_list
        })
    }
    render(){
        return (

            <div style={{width:'100vw',backgroundColor:GRAY_6,
            display:'flex',flexDirection: 'row'}}>

                {/* sidebar */}
                <SidebarComponent is_admin={true} />
                {/* body */}
                <div style={{display:'flex',flex:SIDEBAR_RATIO,
                    padding:PADDING_BODY_DASHBOARD}}>

                    <div style={{display:'flex',flex:1,flexDirection: 'column'}}>

                        {/* header */}
                        <HeaderListComponent title='Setting'/>

                        <div style={{marginTop:30}}>
                            <SettingAccountComponent/>
                        </div>
                    
                        <div style={{marginTop:60}}>
                            <SettingPasswordComponent/>
                        </div>
                        {/* submit button */}


                        <Link 
                             to={routePaths.DASHBOARD_HOME}
                            style={{marginTop:50,width:'25%',textDecoration:'none'}}>
                            <ButtonComponent label='Save Your Changes' height={60}/>
                        </Link>



                    </div>
                </div>

     

               
            </div>
            
        )
    }
}
