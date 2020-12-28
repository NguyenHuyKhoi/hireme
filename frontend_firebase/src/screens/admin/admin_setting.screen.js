//import from library 
import React, {Component} from 'react'
import ChatComponent from '../../components/chat/chat.component'
import LabeledSelectedInputComponent from '../../components/input/labeled_selected_input.component'
import RangeInputComponent from '../../components/input/range_input.component'
import SidebarComponent from '../../components/common/side_bar.component'
import SkillPickerComponent from '../../components/input/skill_picker.component'
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

import {connect }from 'react-redux'
import * as action from '../../redux/action/user.action'

const FIELDS=[
    'first_name','last_name','email',
    'password','repeat_new_password','new_password']

class AdminSettingScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            setting:null,
            admin_id:this.props.user_infor.user_id
        }
    }

    componentDidMount=()=>{
        this.setState({
            setting:api.get_setting_admin
        })
    }


    updateInputs=async (field,value)=>{
        console.log('update_inputs :',field,value)
        await this.setState({
            [field]:value
        })

     //console.log('filter_now:',JSON.stringify(this.state)) 
    };

    groupInputs=(fields)=>{
        let inputs={};
        let state=this.state;
        let has_field_null=false
        fields.map(item=>{
            if (state[item]===undefined || state[item]==='') has_field_null=true // user haven't yet enter this fields;
            else  inputs[item]=state[item];
        });

        console.log('group_inputs:',inputs);

    //    if (has_field_null) return null
        return inputs;
    }


    updateSetting=()=>{
        const inputs=this.groupInputs(FIELDS);
        if (inputs===null){
            alert('Vui lòng điền đủ các trường...')
        }
        else {
            const body_req={
                admin_id:this.state.admin_id,
                ...inputs
            }
        
        }
    }
    render(){
        const setting=this.state.setting;
        return (

            <div style={styles.container}>

              
                <SidebarComponent is_admin={true} />
           
                {
                setting===null?
                null
                :
                <div style={styles.body}>

                    <HeaderListComponent title='Cài đặt'/>

                    <div style={{marginTop:30}}>
                        <SettingAccountComponent    
                            updateInputs={this.updateInputs}
                            account={setting.account}/>
                    </div>
                
                    <div style={{marginTop:60}}>
                        <SettingPasswordComponent
                            updateInputs={this.updateInputs}
                            />
                    </div>


                    <Link 
                        to={routePaths.ADMIN_TASK_LIST}
                        style={{marginTop:50,width:'25%',textDecoration:'none'}}>
                        <ButtonComponent label='Lưu thay đổi' height={60}/>
                    </Link>

                </div>
        

                }
               
            
            </div>
            
        )
    }
}

const styles={
    container:{
        width:'100vw',
        backgroundColor:GRAY_6,
        display:'flex',
        flexDirection: 'row'
    },
    body:{
        display:'flex',
        flex:SIDEBAR_RATIO,
        padding:PADDING_BODY_DASHBOARD,
        flexDirection: 'column'
    }
}


const mapStateToProps = state => ({
	user_infor: state.user_infor,
});

export default connect(mapStateToProps,action)(AdminSettingScreen)