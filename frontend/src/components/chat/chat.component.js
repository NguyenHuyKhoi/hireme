//import from library 
import React, {Component} from 'react'
import sample_db from '../../sample_db/fake_api_responses.json'
import { WHITE } from '../../utils/palette';
import ChatListComponent from './chat_list.component';
import ConversationComponent from './conversation.component';

import api from '../../sample_db/fake_api_responses.json'


export default class ChatComponent extends Component {

    constructor(props){
        super(props);

        this.state={
            task_id:this.props.task_id, // chat is on a specified task ,between a company with bidding freelancers
            user_id:this.props.user_id,// chat is conversations of normal user ;
            user_type:this.props.user_type,
            chat_list:null,
            chat_id:null,
            conversation:null,
            message:''
        }
    }

    getChatList=async()=>{
        let body_req={
            task_id:this.props.task_id,
            user_id:this.props.user_id
        }
        alert('Call API get_chat_list with body= :'+JSON.stringify(body_req))
        //Call_API_Here
                // axios.get(BASE_URL+`/get_chat_list`,{
                //         data:{
                //         }
                //     })
                //     .then(res => {
                //         })
                //         .catch(error => console.log(error));
        await this.setState({
            chat_list:api.get_chat_list
        });
    }

    getConversation=async (chat_id)=>{
        let body_req={
            chat_id:chat_id
        }
        alert('Call API get_conversation with body= :'+JSON.stringify(body_req))
        //Call_API_Here
                // axios.get(BASE_URL+`/get_conversation`,{
                //         data:{
                //         }
                //     })
                //     .then(res => {
                //         })
                //         .catch(error => console.log(error));
        await this.setState({
            conversation:api.get_conversation,
            chat_id:chat_id
        })
    }

    componentDidMount=async ()=>{
        await this.getChatList();
        await this.getConversation(this.state.chat_list[0].id)
    };


    sendMessage=()=>{
        if (this.state.message===undefined || this.state.message===''){
            alert('Please enter some thing before send ....')
        }
        else {
            alert('Using socket send message = '+this.state.message)
        }
        this.setState({
            message:''
        })
    }

    render(){
        const chat_list=this.state.chat_list;
        const conversation=this.state.conversation;
        const {task_id,user_id,user_type}=this.state;
        return (
            <div  style={styles.container}>    
                {
                    chat_list===null
                    || (task_id!==undefined && user_type==='freelancer')?
                    //freelancer chat with company on a specify task  
                    null
                    :
                    <div style={styles.chat_list}>
                        <ChatListComponent
                            getConversation={this.getConversation} 
                            chat_list={this.state.chat_list}/>
                    </div>
                }
                {
                    conversation===null?
                    null
                    :
                    <div style={styles.conversation}>
                        <ConversationComponent 
                            typeMessage={value=>this.setState({message:value})}
                            sendMessage={this.sendMessage}
                            conversation={this.state.conversation}/>
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

