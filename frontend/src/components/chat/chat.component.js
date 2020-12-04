//import from library 
import React, {Component} from 'react'
import sample_db from '../../sample_db/sample_db.json'
import ChatListComponent from './chat_list.component';
import ConversationComponent from './conversation.component';


const chats=sample_db.chats   ;

export default class ChatComponent extends Component {

    render(){
        return (
            <div  style={styles.container}>    
                <div style={styles.chat_list_container}>
                    <ChatListComponent/>
                    
                </div>
                <div style={styles.conversation_container}>
                    <ConversationComponent/>
                </div>
            </div>
        )
    }
}

const styles={
    container :{
        width:'70%',
        height:550,
        flexDirection:'row',
        display:'flex',
    },
    chat_list_container:{
        width:'30%',
        height:550
    },
    conversation_container:{
        width:'70%',
        height:550
    }
    
}

