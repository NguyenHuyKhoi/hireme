//import from library 
import React, {Component} from 'react'
import sample_db from '../../sample_db/sample_db.json'
import { WHITE } from '../../utils/palette';
import ChatListComponent from './chat_list.component';
import ConversationComponent from './conversation.component';


const chats=sample_db.chats   ;

export default class ChatComponent extends Component {

    render(){
        return (
            <div  style={{display:'flex',flex:1, flexDirection:'row',backgroundColor:WHITE,
                boxShadow:'3px 5px 3px 3px #707070'}}>    
                <div style={{display:'flex',flex:5 }}>
                    <ChatListComponent/>
                    
                </div>
                <div style={{display:'flex',flex:9}}>
                    <ConversationComponent/>
                </div>
            </div>
        )
    }
}

