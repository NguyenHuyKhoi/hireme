//import from library 
import React, {Component} from 'react'
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

import firebase from '../../firebase/firebase'

class DashboardSettingUserScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            id:this.props.user_infor.id,
            type:this.props.user_infor.type
        }
    }

    componentDidMount=async ()=>{
        console.log('SettingUserget begin:',this.state.type,this.state.id)
        let res=await firebase.getSettingUser(this.state.type,this.state.id);

        console.log('SettingUserget end:',res)
        await this.setState(res);
    }

    updateInput=async (part,field,value)=>{
        console.log('update_inputs :',part,field,value)
        await this.setState({
            [part]:{
                ...this.state[part],
                [field]:value
            }
        });

     //console.log('filter_now:',JSON.stringify(this.state)) 
    };



    updateSetting=async ()=>{
        console.log('updateSetting :',this.state)

        if (this.state.account.new_avatar!==undefined){
            let new_avatar_url=await firebase.uploadFile('/avatar/',this.state.account.new_avatar,this.state.id);

            console.log('updateSetting new_avatar_url:',new_avatar_url)
            await this.updateInput('account','avatar',new_avatar_url)
        }

        await firebase.updateSettingUser(this.state.type,this.state.id,this.state);
        alert('Cập nhật thành công!');
    }

    render(){
        const state=this.state;
        return (

            <div style={styles.container}>

     
                <SidebarComponent />
           
                {
                state.account===undefined?
                null
                :
                <div style={styles.body}>


                    <HeaderListComponent title='Cài đặt'/>

                    <div style={{marginTop:30}}>
                        <SettingAccountComponent 
                            updateInput={this.updateInput}
                            account={state.account}/>
                    </div>
                    
                    <div style={{marginTop:60}}>
                        {
                            this.state.type==='company'?
                            <SettingProfileCompanyComponent 
                                updateInput={this.updateInput}
                                profile={state.profile}/>
                            :
                            this.state.type==='freelancer'?
                                <SettingProfileFreelancerComponent 
                                // category={
                                //     this.state!==null && this.state.category!==undefined?
                                //         this.state.category
                                //         :
                                //         setting.profile.category
                                // }
                                // picked_skills={state.profile.skills!==undefined?
                                //         setting.profile.skills.map(item=>item.name)
                                //         :
                                //         []
                                // }
                                updateInput={this.updateInput}
                                profile={state.profile}/>
                            :
                            null
                        }
                      
                    </div>

                    {/* <div style={{marginTop:60}}>
                        <SettingPasswordComponent
                                updateInput={this.updateInput}
                            />
                    </div> */}

                    <Link 
                          //  to={routePaths.DASHBOARD_TASK_LIST}
                        style={{marginTop:50,width:'25%',textDecoration:'none'}}>
                        <ButtonComponent 
                            onClick={this.updateSetting}
                            label='Lưu thay đổi' height={60}/>
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

export default connect(mapStateToProps,action)(DashboardSettingUserScreen)