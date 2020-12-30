//import from library 
import React, {Component} from 'react'
import { INPUT_TYPE, TEXT_SIZES } from '../../utils/constants';
import { BLACK, GRAY_1, GRAY_2, GRAY_4, GREEN_1, WHITE } from '../../utils/palette';
import AuthTabsComponent from './auth_tabs.component';
import ButtonComponent from './button.component';
import TaskTabsBarComponent from './task_tabs.component';

import {connect }from 'react-redux'
import * as action from '../../redux/action/user.action'
import Firebase from '../../firebase/firebase';
import Validate  from '../../utils/validate';

class IconInput extends Component {
    render(){
        const size=45;
        const is_secret=this.props.is_secret;
        return(
            <div style={{
                width:'100%',height:size,borderRadius:5,backgroundColor:WHITE,
                display:'flex',flexDirection:'row',
                boxShadow:'3px 3px 10px 2px #707070',
               // borderWidth:2,borderColor:GRAY_1
            }}>

                <input 
                    onChange={e=>this.props.onChange(e.target.value)}
                    type={is_secret!==undefined?'password':'default'}
                    style={{
                        flex:1,paddingLeft:10,fontSize:TEXT_SIZES.SMALL,
                        height:size-5,outline:'none'}} 
                        placeholder={this.props.placehoder}/>
            </div>
        )
    }
}

class UserType extends Component{
    render(){
        const is_picked=this.props.is_picked;
        return (
            <div 
                onClick={this.props.onClick}
                style={{...styles.user_type_container,
                    backgroundColor:is_picked?GREEN_1:GRAY_4,}}>
                <text style={{...styles.user_type_label,
                    color:is_picked?WHITE:GRAY_1}}>
                    {this.props.type}
                </text>
            </div>
        )

    }
}
class CommonTab extends Component{

    constructor(props){
        super(props);
        this.state={
            register_as_freelancer:true
        }
    }
    render(){
        const idx=this.props.focus_tab_index;
        const fe=this.state.register_as_freelancer;
        return(
            <div style={styles.common_tab_container}>

                <text style={styles.title}>
                    {
                        idx===0?
                        'Đăng nhập'
                        :
                        'Tạo tài khoản nhanh chóng'
                    }
                </text>

                {
                    idx===1?
                    <div style={styles.types_container}>

                        <UserType type='Freelancer' is_picked={fe} 
                            onClick={()=>{
                                this.props.updateInputs('type','freelancer')
                                this.setState({register_as_freelancer:true})
                            }}/>
                        <UserType type='Company' is_picked={!fe} 
                            onClick={()=>{
                                this.props.updateInputs('type','company')
                                this.setState({register_as_freelancer:false})
                            }}/>
                       
                    </div>
                    :
                    null
                }

                <div style={styles.input_container}>
                    <IconInput onChange={(value)=>this.props.updateInputs('email',value)} placehoder="Nhập email..."/>
                </div>

                <div style={styles.input_container}>
                    <IconInput  onChange={(value)=>this.props.updateInputs('password',value)} placehoder="Mật khẩu..."  is_secret={true}/>
                </div>  
                {/* {
                    idx===1?
                    <div style={styles.input_container}>
                        <IconInput onChange={(value)=>this.props.updateInputs('repeat_password',value)}  placehoder="Repeat password..."  is_secret={true}/>
                    </div>
                    :
                    null
                } */}

                <div 
                    style={styles.btn_container}>
                    <ButtonComponent 
                        onClick={()=>{
                            if (idx===0) this.props.onSignin();
                                else this.props.onSignup()
                        }}
                        label={  idx===0? 'Đăng nhập': 'Đăng ký' }/>
                </div>  

        

                {
                    idx===0?
                    <div style={styles.footer}>
                        <text 
                            
                            style={styles.link}>
                           Quên mật khẩu
                        </text>

                        <text 
                            onClick={this.props.onClickRegister}
                            style={styles.link}>
                           Đăng ký
                        </text>
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}

class AuthModal extends Component {

    constructor(props){
        super(props);
        this.state={
            focus_tab_index:0,
            email:'',
            password:'',
            repeat_password:'',
            type:'freelancer'
        }
    }

    updateInputs=(field,value)=>{
        this.setState({
            [field]:value
        });
    }


    onSignin=async ()=>{


        var err_msg=Validate.validate({
            [INPUT_TYPE.EMAIL]:this.state.email,
            [INPUT_TYPE.PASSWORD]:this.state.password
        });

        if (err_msg!==''){
            alert(err_msg);
            return;
        };

        let user=await Firebase.signin({
            email:this.state.email,
            password:this.state.password
        });

        if (user) {
            alert('Đăng nhập thành công.');

            
            this.props.loginSuccess(user)
            this.props.onClickClose();
        }
        else {
            alert('Đăng nhập thất bại, sai thông tin hoặc tài khoản đã bị cấm! ');
        }



    }

    onSignup=async ()=>{
        
        var err_msg=Validate.validate({
            [INPUT_TYPE.EMAIL]:this.state.email,
            [INPUT_TYPE.PASSWORD]:this.state.password
        });

        if (err_msg!==''){
            alert(err_msg);
            return;
        };

        let ok =await Firebase.signup({
            email:this.state.email,
            password:this.state.password,
            type:this.state.type
        });

        if (ok) {
            alert('Đăng ký thành công.');
            this.props.onClickClose();
        }
        else {
            alert('Đăng ký thất bại.');
        }


    }

    render(){
        const idx=this.state.focus_tab_index

      //  console.log('this_state:',JSON.stringify(this.state))
        return (

            <div style={styles.container}>

                <AuthTabsComponent 
                    focus_tab_index={idx}
                    onClickTab={(index)=>
                        this.setState({
                            focus_tab_index:index
                        })
                    }
                    onClickClose={this.props.onClickClose}/>
                <CommonTab 
                    updateInputs={this.updateInputs}
                    onSignin={this.onSignin}
                    onSignup={this.onSignup}
                    focus_tab_index={idx} 
                    onClickRegister={()=>this.setState({
                        focus_tab_index:1
                    })}/>
            </div>
        )
    }
}

const styles={
    user_type_container:{
        width:'45%',
        height:'100%',
        borderRadius:4,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    user_type_label:{
        fontSize:TEXT_SIZES.SMALL
    },
    common_tab_container:{
        display:'flex',
        flex:1,
        backgroundColor:WHITE,
        flexDirection:'column',
        alignItems:'center',
        padding:30
    },
    title:{
        fontSize:TEXT_SIZES.BIG,
        color:BLACK
    },
    types_container:{
        marginTop:20,
        width:'100%',
        flexDirection:'row',
        height:40,
        display:'flex',
        justifyContent:'space-between'
    },
    input_container:{
        width:'100%',
        marginTop:20
    },
    btn_container:{
        width:'100%',
        marginTop:50
    },
    footer:{
        marginTop:10,
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    link:{
        fontSize:TEXT_SIZES.SMALL,
        color:GRAY_2
    },
    container:{
        width:'30vw',
        height:'80vh',
        backgroundColor: WHITE,
        display:'flex',
        flexDirection: 'column'
    }
}

const mapStateToProps = state => ({
	user_info: state.user_info,
});

export default connect(mapStateToProps,action)(AuthModal)
