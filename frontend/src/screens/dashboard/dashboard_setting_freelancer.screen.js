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

import {connect }from 'react-redux'
import * as action from '../../redux/action/user.action'

const FIELDS=[
    'first_name','last_name','email',
    'hourly_rate','tagline','category','description','skills','experiences','password','repeat_new_password','new_password']

class DashboardSettingFreelancerScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            setting:null,
            freelancer_id:this.props.user_infor.user_id
        }
    }

    componentDidMount=()=>{
          //Call_API_Here
        // axios.get(BASE_URL+`/get_setting_freelancer`,{
        //         data:{
        //             freelancer_id:this.state.task_id
        // 
        //         }
        //     })
        //     .then(res => {
        //     })
        //     .catch(error => console.log(error));

    
       // alert('Call API get_setting_freelancer with freelancer_id '+this.state.freelancer_id)
        this.setState({
            setting:api.get_setting_freelancer
        })
    }


    updateInputs=async (field,value)=>{
       // console.log('update_inputs :',field,value)
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

        if (has_field_null) return null
        return inputs;
    }



    updateSetting=()=>{
        const inputs=this.groupInputs(FIELDS);
        if (inputs===null){
            alert('Please enter all fields ...')
        }
        else if (inputs.type==='withdraw' && inputs.amount>this.state.payment.balance){
            alert('Can\'t withdraw more than your balance .')
        }
        else {
            alert('Call API create_credit_card_transaction  with body = '+JSON.stringify(inputs))
            //Call_API_Here
                // axios.get(BASE_URL+`/create_credit_card_transaction `,{
                //         data:{
                //             count:20,
                //             filter:this.groupInputs()
                //         }
                //     })
                //     .then(res => {
                //         })
                //         .catch(error => console.log(error));
        }
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
                                <SettingAccountComponent    
                                    updateInputs={this.updateInputs}
                                    account={setting.account}/>
                            </div>

                            <div style={{marginTop:60}}>
                                <SettingProfileFreelancerComponent 
                                    updateInputs={this.updateInputs}
                                    profile={setting.profile}/>
                            </div>

                            <div style={{marginTop:60}}>
                                <SettingPasswordComponent 
                                    updateInputs={this.updateInputs}    
                                />
                            </div>
                            {/* submit button */}


                            <Link 
                               // to={routePaths.DASHBOARD_TASK_LIST}
                                style={{marginTop:50,width:'25%',textDecoration:'none'}}>
                                <ButtonComponent 
                                    onClick={this.updateSetting}
                                    label='Save Your Changes' height={60}/>
                            </Link>
                        </div>

                    }
                    
                </div>

     

               
            </div>
            
        )
    }
}


const mapStateToProps = state => ({
	user_infor: state.user_infor,
});

export default connect(mapStateToProps,action)(DashboardSettingFreelancerScreen)