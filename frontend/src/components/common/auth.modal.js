//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants';
import { BLACK, GRAY_1, GRAY_2, GRAY_4, GREEN_1, WHITE } from '../../utils/palette';
import AuthTabsComponent from './auth_tabs.component';
import ButtonComponent from './button.component';
import TaskTabsBarComponent from './task_tabs.component';

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
                <div style={{
                    width:size,height:size,backgroundColor:GRAY_4,borderRadius:5,
                    display:'flex',justifyContent:'center',alignItems:'center',
                   // borderWidth:2,borderColor:GRAY_1
                }}>
                    <text style={{fontSize:25}}>
                        x
                    </text>
                </div>
                <input 
                    type={is_secret!==undefined?'password':'default'}
                    style={{
                        flex:1,paddingLeft:10,fontSize:textSizes.SMALL,
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
                style={{
                    width:'45%',height:'100%',borderRadius:4,
                    backgroundColor:is_picked?GREEN_1:GRAY_4,
                    display:'flex',
                    justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                <text style={{fontSize:textSizes.SMALL,
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
            <div style={{
                display:'flex',flex:1,backgroundColor:WHITE,
                flexDirection:'column',alignItems:'center',
                padding:30}}>
                <text style={{fontSize:textSizes.BIG,color:BLACK}}>
                    {
                        idx===0?
                        'We are glad to see you again'
                        :
                        'Let is create an account'
                    }
                </text>

                {
                    idx===1?
                    <div style={{marginTop:20,width:'100%',flexDirection:'row',height:40,display:'flex',
                        justifyContent:'space-between'}}>

                        <UserType type='Freelancer' is_picked={fe} 
                            onClick={()=>this.setState({register_as_freelancer:true})}/>
                        <UserType type='Company' is_picked={!fe} 
                            onClick={()=>this.setState({register_as_freelancer:false})}/>
                       
                    </div>
                    :
                    null
                }

                <div style={{width:'100%',marginTop:20}}>
                    <IconInput  placehoder="Email..."/>
                </div>

                <div style={{width:'100%',marginTop:20}}>
                    <IconInput  placehoder="Password..."  is_secret={true}/>
                </div>  
                {
                    idx===1?
                    <div style={{width:'100%',marginTop:20}}>
                        <IconInput  placehoder="Repeat password..."  is_secret={true}/>
                    </div>
                    :
                    null
                }

                <div 
                    onClick={this.props.onClickBtn}
                    style={{width:'100%',marginTop:50}}>
                    <ButtonComponent label={  idx===0? 'Login': 'Register' }/>
                </div>  

        

                {
                    idx===0?
                    <div style={{marginTop:10,width:'100%',display:'flex',
                        flexDirection:'row',justifyContent:'space-between'}}>
                        <text 
                            
                            style={{fontSize:textSizes.SMALL,color:GRAY_2}}>
                           Forgot password
                        </text>

                        <text 
                            onClick={this.props.onClickRegister}
                            style={{fontSize:textSizes.SMALL,color:GRAY_2}}>
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

export default class AuthModal extends Component {

    constructor(props){
        super(props);
        this.state={
            focus_tab_index:0
        }
    }
    render(){
        const idx=this.state.focus_tab_index
        return (

            <div style={{width:'30vw',height:'80vh',backgroundColor: WHITE,
                display:'flex',flexDirection: 'column'}}>

                <AuthTabsComponent 
                    focus_tab_index={idx}
                    onClickTab={(index)=>
                        this.setState({
                            focus_tab_index:index
                        })
                    }
                    onClickClose={this.props.onClickClose}/>
                <CommonTab 
                    onClickBtn={this.props.onClickBtn}
                    focus_tab_index={idx} 
                    onClickRegister={()=>this.setState({
                        focus_tab_index:1
                    })}/>
            </div>
        )
    }
}
