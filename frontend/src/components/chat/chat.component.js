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
            conversation:null
        }
    }

    componentDidMount=()=>{
        this.setState({
            chat_list:api.get_chat_list,
            conversation:api.get_conversation
        })
    }
    render(){
        const chat_list=this.state.chat_list;
        const conversation=this.state.conversation;
        const {task_id,user_id,user_type}=this.state;
        return (
            <div  style={{display:'flex',flex:1, flexDirection:'row',backgroundColor:WHITE,
                boxShadow:'3px 5px 3px 3px #707070'}}>    
                {
                    chat_list===null
                    || (task_id!==undefined && user_type==='freelancer')?
                    //freelancer chat with company on a specify task  
                    null
                    :
                    <div style={{display:'flex',flex:5 }}>
                        <ChatListComponent chat_list={this.state.chat_list}/>
                    </div>
                }
                {
                    conversation===null?
                    null
                    :
                    <div style={{display:'flex',flex:9}}>
                        <ConversationComponent conversation={this.state.conversation}/>
                    </div>
                }
            
               
            </div>
        )
    }
}

