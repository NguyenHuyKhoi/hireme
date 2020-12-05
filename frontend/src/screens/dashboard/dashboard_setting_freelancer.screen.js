//import from library 
import React, {Component} from 'react'
import ChatComponent from '../../components/chat/chat.component'
import LabeledInputComponent from '../../components/common/labeled_input.component'
import LabeledSelectedInputComponent from '../../components/common/labeled_selected_input.component'
import RangeInputComponent from '../../components/common/range_input.component'
import SidebarComponent from '../../components/common/side_bar.component'
import SkillsPickerComponent from '../../components/common/skills_picker.component'
import UploadFilesComponent from '../../components/common/upload_files.component'
import SettingAccountComponent from '../../components/setting/setting_account.component'
import SettingPasswordComponent from '../../components/setting/setting_password.component'
import SettingProfileFreelancerComponent from '../../components/setting/setting_profile_freelancer.component'
export default class DashboardSettingFreelancerScreen extends Component {
    render(){
        return (

            <div style={{width:'100vw',backgroundColor: '#392855',
                display:'flex',flexDirection: 'row'}}>

                {/* sidebar */}
                <SidebarComponent/>
                {/* body */}
                <div style={{display:'flex',flex:4,
                    paddingLeft:30,paddingRight:30,
                    paddingTop:40,paddingBottom:40,
                    marginBottom:100,
                    backgroundColor: '#902823'}}>

                    <div style={{display:'flex',flex:1,flexDirection: 'column',
                        backgroundColor: '#392753'}}>

                        {/* header */}
                        <div style={{width:'100%',height:40,backgroundColor: '#935335',
                            display:'flex',flexDirection: 'row',alignItems: 'center'}}>
                            <text style={{fontSize:20,color:'#000000',marginLeft:30}}>
                                Setting
                            </text>
                        </div>

                        {/* form  */}
                        <SettingAccountComponent/>

                        <SettingProfileFreelancerComponent/>
                    
                        <SettingPasswordComponent/>
                        {/* submit button */}
                        <div style={{marginTop:40,width:'20%',height:50,borderRadius:10,
                            backgroundColor: '#028334',
                            display:'flex',justifyContent: 'center',alignItems:'center'}}>
                            <text style={{fontSize:18,color:'#032058'}}>
                                Post Task
                            </text>
                        </div>
                    </div>
                </div>

     

               
            </div>
            
        )
    }
}
