//import from library 
import React, {Component} from 'react'
import sample_db from '../../sample_db/fake_api_responses.json'
import { BLACK, WHITE } from '../../utils/palette';
import ChatListComponent from './chat_list.component';
import ConversationComponent from './conversation.component';

import api from '../../sample_db/fake_api_responses.json'

import config from '../../firebase/config'
import firebase from '../../firebase/firebase'
import {connect }from 'react-redux'
import * as action from '../../redux/action/user.action'
import { TEXT_SIZES } from '../../utils/constants';
import {  toArray } from '../../utils/helper';

class ChatComponent extends Component {

    constructor(props){
        super(props);

        this.state={
            task_id:this.props.task_id, // chat is on a specified task ,between a company with bidding freelancers
            user_id:this.props.user_infor.id,// chat is conversations of normal user ;
            user_type:this.props.user_infor.type,
            chats:[],
            current_chat_id:null,
            message:''
        };

        this.rootRef='/chat/'
    };

    getChatForTask=async (id)=>{
        console.log('    task_id:',this.state.task_id)
        var ref=await config.database().ref(this.rootRef)
            .orderByChild('/task/id').equalTo(id)
            .on('value',snapshot=>{
                let data=snapshot.val();
                let arr=toArray(data);

                arr=arr.filter(item=>
                        item.users[0].id===this.state.user_id 
                        || item.users[1].id===this.state.user_id
                        )
                if (this.state.current_chat_id===null && arr.length>0) {
                    this.setState({
                        current_chat_id:arr[0].id
                    })
                }
                console.log('ChatComponent updateChats :',arr);
                this.setState({
                    chats:arr
                })
            })
    }

    getChatForUser=async (id)=>{


        await config.database().ref('/chat/')
            .on('value',snapshot=>{
                let chats=toArray(snapshot.val());
                console.log('chatComponent userChats:',chats)
                let arr=chats.filter(item=>{
                    let users=toArray(item.users);
                    console.log('chatComponent userChats users:',users);
                    if (users[0].id===this.state.user_id || users[1].id===this.state.user_id)
                        return true;
                    return false
                });
        
                if (this.state.current_chat_id===null && arr.length>0) {
                    this.setState({
                        current_chat_id:arr[0].id
                    })
                }
                console.log('chatComponent userChats end    :',arr)
                 this.setState({
                    chats:arr
                })
            })
      
    }

    getChatList=async()=>{
        let chats=[];
        if (this.state.task_id!==undefined){
            await this.getChatForTask(this.state.task_id);
        }
        else {
            await this.getChatForUser(this.state.user_id)
        };

       
    };

    componentDidMount=async ()=>{
        await this.getChatList();
    };

    getConversation=(chat_id)=>{
        this.setState({
            current_chat_id:chat_id
        })
    }

    sendMessage=async ()=>{
        if (this.state.message===undefined || this.state.message===''){
            alert('Bạn không thể gửi một tin nhắn trống...')
        }
        else {
            let i=this.props.user_infor
            await firebase.push('/chat/'+this.state.current_chat_id+'/messages/',{
                content:this.state.message,
                post_time:(new Date()).toISOString(),
                user:{
                    id:i.id,
                    username:i.username,
                    avatar:i.avatar
                }
            })
        }
        await this.setState({
            message:''
        })
    }

    render(){
        const chats=this.state.chats;
        const {task_id,user_id,user_type}=this.state;

        let current_chat=null;

        console.log('chatComponent current_chat_id',this.state.current_chat_id)
        if (this.state.current_chat_id!==null)
            current_chat=chats.filter(item=>item.id===this.state.current_chat_id)[0];
        console.log('chatComponent chats',chats)
        return (
            <div  style={styles.container}> 

                {
                    chats===null ?
                    null
                    :
                    <div style={styles.chat_list}>
    

                        <ChatListComponent
                            getConversation={this.getConversation} 
                            user_id={user_id}
                            chats={chats}/>
                    
            

                    </div>

                }

                {
                    current_chat===null || current_chat===undefined?
                    null
                    :
                    <div style={styles.conversation}>
                        <ConversationComponent 
                            user_id={user_id}
                            typeMessage={value=>this.setState({message:value})}
                            sendMessage={this.sendMessage}
                            chat={current_chat}/>
                    </div>
                }
            
               
            </div>
        )
    }
}

const styles={
    container:{
        display:'flex',
        flex:1, 
        flexDirection:'row',
        backgroundColor:WHITE,
        boxShadow:'3px 5px 3px 3px #707070'
    },
    chat_list:{
        display:'flex',
        flex:5 
    },
    conversation:{
        display:'flex',
        flex:9
    }
}


const mapStateToProps = state => ({
	user_infor: state.user_infor,
});

export default connect(mapStateToProps,action)(ChatComponent)
