//import from library 
import React, {Component} from 'react'
import AuthTabsComponent from './auth_tabs.component';
import TaskTabsBarComponent from './task_tabs.component';

class IconInput extends Component {
    render(){
        return(
            <div style={{marginTop:20,width:'100%',height:40,borderRadius:5,backgroundColor:'#935953',
                display:'flex',flexDirection:'row'}}>
                <div style={{width:40,height:40,backgroundColor:'#924433',borderRadius:5,
                    display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <text style={{fontSize:25}}>
                        x
                    </text>
                </div>
                <input style={{flex:1,backgroundColor:'#968939',paddingLeft:20,
                    }} placeholder="Email"/>
            </div>
        )
    }
}
class CommonTab extends Component{

    render(){
        const idx=this.props.tab_index
        return(
            <div style={{display:'flex',flex:1,backgroundColor: '#028439',
                flexDirection:'column',alignItems:'center',
                padding:45,backgroundColor:'#395795'}}>
                <text style={{fontSize:25,color:'#000000'}}>
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

                        <div style={{width:'40%',height:'100%',borderRadius:6,
                            backgroundColor:'#328958',display:'flex',
                            justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <text style={{fontSize:24,color:'#934858'}}>
                                Freelancer
                            </text>
                        </div>

                        <div style={{width:'40%',height:'100%',borderRadius:6,
                            backgroundColor:'#328958',display:'flex',
                            justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <text style={{fontSize:24,color:'#934858'}}>
                                Company
                            </text>
                        </div>
                    </div>
                    :
                    null
                }

                <IconInput />
                <IconInput />
                {
                    idx===1?
                    <IconInput />
                    :
                    null
                }
                <div style={{marginTop:60,width:'100%',height:40,borderRadius:6,backgroundColor:'#048983',
                    display:'flex',justifyContent:'center',alignItems:'center'}} >
                    <text style={{fontSize:24}}>
                        {
                            idx===0?
                            'Login'
                            :
                            'Register'
                        }
                    </text>
                </div>

                {
                    idx===0?
                    <div style={{marginTop:10,width:'100%',display:'flex',
                        flexDirection:'row',justifyContent:'space-between'}}>
                        <text style={{fontSize:16,color:'#000000'}}>
                           Forgot password
                        </text>

                        <text style={{fontSize:16,color:'#000000'}}>
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
            tab_index:0
        }
    }
    render(){
        return (

            <div style={{width:'35vw',height:'80vh',backgroundColor: '#998637',
                display:'flex',flexDirection: 'column'}}>

                <AuthTabsComponent onClickTab={(index)=>
                        this.setState({
                            tab_index:index
                        })
                    }/>
                <CommonTab tab_index={this.state.tab_index}/>
            </div>
        )
    }
}
