//import from library 
import React, {Component} from 'react'
import SidebarComponent from '../../components/common/side_bar.component'
import SettingAccountComponent from '../../components/setting/setting_account.component'
import SettingPasswordComponent from '../../components/setting/setting_password.component'
import SettingProfileFreelancerComponent from '../../components/setting/setting_profile_freelancer.component'
import { routePaths, SIDEBAR_RATIO ,PADDING_BODY_DASHBOARD} from '../../utils/constants'
import { GRAY_6 } from '../../utils/palette'
import HeaderListComponent from '../../components/common/header_list.component'
import ButtonComponent from '../../components/common/button.component'
import { Link } from 'react-router-dom'
import api from '../../sample_db/fake_api_responses.json'
export default class DashboardSettingFreelancerScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            setting:null
        }
    }

    componentDidMount=()=>{
        this.setState({
            setting:api.get_setting_freelancer
        })
    }
    render(){
        const setting=this.state.setting;

        console.log('setting_freelancer:',setting)
        return (

            <div style={{width:'100vw',backgroundColor:GRAY_6,
            display:'flex',flexDirection: 'row'}}>

                {/* sidebar */}
                <SidebarComponent />
                {/* body */}
                <div style={{display:'flex',flex:SIDEBAR_RATIO,
                    padding:PADDING_BODY_DASHBOARD}}>

                    {
                        this.state.setting===null?
                        null:
                        <div style={{display:'flex',flex:1,flexDirection: 'column'}}>

                            {/* header */}
                            <HeaderListComponent title='Setting'/>

                            {/* form  */}

                            <div style={{marginTop:30}}>
                                <SettingAccountComponent account={setting.account}/>
                            </div>

                            <div style={{marginTop:60}}>
                                <SettingProfileFreelancerComponent profile={setting.profile}/>
                            </div>

                            <div style={{marginTop:60}}>
                                <SettingPasswordComponent />
                            </div>
                            {/* submit button */}


                            <Link 
                                to={routePaths.DASHBOARD_HOME}
                                style={{marginTop:50,width:'25%',textDecoration:'none'}}>
                                <ButtonComponent label='Save Your Changes' height={60}/>
                            </Link>
                        </div>

                    }
                    
                </div>

     

               
            </div>
            
        )
    }
}
