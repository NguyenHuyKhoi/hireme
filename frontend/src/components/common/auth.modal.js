//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES ,BASE_URL} from '../../utils/constants';
import { BLACK, GRAY_1, GRAY_2, GRAY_4, GREEN_1, WHITE } from '../../utils/palette';
import AuthTabsComponent from './auth_tabs.component';
import ButtonComponent from './button.component';
import TaskTabsBarComponent from './task_tabs.component';

import {connect }from 'react-redux'
import * as action from '../../redux/action/user.action'
import axios from 'axios'

import {https} from 'axios'


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
                        'We are glad to see you again'
                        :
                        'Let is create an account'
                    }
                </text>

                {
                    idx===1?
                    <div style={styles.types_container}>

                        <UserType type='Freelancer' is_picked={fe} 
                            onClick={()=>{
                                this.props.updateInputs('user_type','freelancer')
                                this.setState({register_as_freelancer:true})
                            }}/>
                        <UserType type='Company' is_picked={!fe} 
                            onClick={()=>{
                                this.props.updateInputs('user_type','company')
                                this.setState({register_as_freelancer:false})
                            }}/>
                       
                    </div>
                    :
                    null
                }

                <div style={styles.input_container}>
                    <IconInput onChange={(value)=>this.props.updateInputs('username',value)} placehoder="Username..."/>
                </div>

                <div style={styles.input_container}>
                    <IconInput  onChange={(value)=>this.props.updateInputs('password',value)} placehoder="Password..."  is_secret={true}/>
                </div>  
                {
                    idx===1?
                    <div style={styles.input_container}>
                        <IconInput onChange={(value)=>this.props.updateInputs('repeat_password',value)}  placehoder="Repeat password..."  is_secret={true}/>
                    </div>
                    :
                    null
                }

                <div 
                    style={styles.btn_container}>
                    <ButtonComponent 
                        onClick={()=>{
                            if (idx===0) this.props.onSignin();
                                else this.props.onSignup()
                        }}
                        label={  idx===0? 'Login': 'Register' }/>
                </div>  

        

                {
                    idx===0?
                    <div style={styles.footer}>
                        <text 
                            
                            style={styles.link}>
                           Forgot password
                        </text>

                        <text 
                            onClick={this.props.onClickRegister}
                            style={styles.link}>
                           Sign up
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
            username:'',
            password:'',
            repeat_password:'',
            user_type:'freelancer'
        }
    }

    updateInputs=(field,value)=>{
        this.setState({
            [field]:value
        });
    }

    validateInput=()=>{
        const {username,password,repeat_password}=this.state;
        if (username.length===0){
            return 'username is empty! '
        }
        if (username.length<10 || username.length>30){
            return 'username address is too short or too long (10 -> 30 chars)'
        };
        if (!username.endsWith('@gmail.com')){
            return 'username address is invalid !'
        };
        if (password.length===0){
            return 'Password is empty !'
        };


        if (password.length<6 || password.length>20){
            return 'Password is too short or too long (6->20 chars)'
        };

        if (this.state.focus_tab_index===0) return '';
        
        //sign up : 

        if (repeat_password.length===0){
            return 'Repeat Password is empty !'
        };


        if (repeat_password.length<6 || repeat_password.length>20){
            return 'Repeat Password is too short or too long (6->20 chars)'
        };
    
        if (password!==repeat_password){
            return 'Password and repeat password don\'t same '
        };

        return '';
    }

    testLogin=()=>{
          //fake account : 
            //for company : iamcompany@gmail.com 123qweASD
            //for freelancer : iamfreelancer@gmail.com 123qweASD
            //for admin : iamadmin@gmail.com  123qweASD

            if (this.state.email==='company@gmail.com' && this.state.password==='123456') {
                alert('Sign in success')
                this.props.loginSuccess({
                    session_id:'ur238r23t8328t238vt8t834t83t8g5y',
                    user_id:'12',
                    user_name:'Johnson',
                    user_type:'company'
                });
            }
            else if (this.state.email==='freelancer@gmail.com' && this.state.password==='123456') {
                alert('Sign in success')
                this.props.loginSuccess({
                    session_id:'fa8fs8f8a68f678f67a6f7af278f828ng8',
                    user_id:'12',
                    user_name:'Johnson',
                    user_type:'freelancer'
                });
            }
            else if (this.state.email==='admin@gmail.com' && this.state.password==='123456') {
                alert('Sign in success')
                this.props.loginSuccess({
                    session_id:'g84ng88394899c934tc82687t23t446',
                    user_id:'12',
                    user_name:'Johnson',
                    user_type:'admin'
                });
            }
            else {
                alert('Sign in fail, please check again email and password .')
            }
    }

    onSignin=()=>{
        var err_msg='';
        // //this.validateInput();
        // if (err_msg==='') {
        //      this.props.onCloseModal();
        //      //Call_API_Here
        //     axios.get(BASE_URL+`/login?username=${this.state.username}&password=${this.state.password}`,
        //             {
        //                 httpsAgent:new https.Agent({
        //                     rejectUnauthorized: false
        //                   })
        //             })
        //         .then(res => {
        //                 console.log('login :',res)
        //             })
        //             .catch(error => console.log(error));

          
           
        // }
        // else alert(err_msg)
    }

    onSignup=()=>{
        var err_msg=this.validateInput();
        if (err_msg==='') {
            //call api : 
            alert('Sign up success');
           // this.props.onClose();
        }
        else alert(err_msg)
    }

    render(){
        const idx=this.state.focus_tab_index

        console.log('this_state:',JSON.stringify(this.state))
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
