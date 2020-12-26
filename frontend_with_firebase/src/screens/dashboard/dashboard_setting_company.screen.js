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

import firebase from '../../firebase/firebase'

class DashboardSettingCompanyScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            company_id:this.props.user_infor.id
        }
    }

    componentDidMount=async ()=>{
        let res=await firebase.getSettingUser('company',this.state.company_id);
        await this.setState(res);
    }

    updateInputs=async (part,field,value)=>{
      //  console.log('update_inputs :',part,field,value)
        await this.setState({
            [part]:{
                ...this.state[part],
                [field]:value
            }
        });

     //console.log('filter_now:',JSON.stringify(this.state)) 
    };



    updateSetting=async ()=>{
        console.log('update Setting :',this.state)
        await firebase.updateSettingUser('company',this.state.company_id,this.state);
        alert('Update successfully');
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


                    <HeaderListComponent title='Setting'/>

                    <div style={{marginTop:30}}>
                        <SettingAccountComponent 
                            updateInputs={this.updateInputs}
                            account={state.account}/>
                    </div>
                    
                    <div style={{marginTop:60}}>
                        <SettingProfileCompanyComponent 
                            updateInputs={this.updateInputs}
                            profile={state.profile}/>
                    </div>

                    {/* <div style={{marginTop:60}}>
                        <SettingPasswordComponent
                                updateInputs={this.updateInputs}
                            />
                    </div> */}

                    <Link 
                          //  to={routePaths.DASHBOARD_TASK_LIST}
                        style={{marginTop:50,width:'25%',textDecoration:'none'}}>
                        <ButtonComponent 
                            onClick={this.updateSetting}
                            label='Save Your Changes' height={60}/>
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

export default connect(mapStateToProps,action)(DashboardSettingCompanyScreen)