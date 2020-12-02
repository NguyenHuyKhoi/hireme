//import from library 
import React, {Component} from 'react'
import sample_db from '../../sample_db/sample_db.json'
import ButtonComponent from '../common/button.component';


const conversation=sample_db.conversation   ;

class MyMessage extends Component {
    render (){
        const message = this.props.message
        const sender =message.sender
        return (
            <div style={{...styles.message,
                flexDirection: 'row-reverse'}}>
                <img src={sender.avatar} style={styles.avatar}/>
                <div style={{...styles.content_container,
                    backgroundColor: '#3F50CD',marginRight:20}}>
                    <text style={styles.normal_text}>
                        {message.content}
                    </text>
                </div>
            </div>
        )
    }
}

class PartnerMessage extends Component {
    render (){
        const message = this.props.message
        const sender =message.sender
        return (
            <div style={{...styles.message,
                flexDirection: 'row'}}>

                <img src={sender.avatar} style={styles.avatar}/>

                <div style={{...styles.content_container,
                    backgroundColor: '#F0F0F0',marginLeft:20}}>

                    <text style={{...styles.normal_text,
                        color:'#707070'}}>
                        {message.content}
                    </text>

                </div>
            </div>
        )
    }
}
export default class ConversationComponent extends Component {

    render(){
        const users =conversation.users;
        const messages =conversation.messages
        return (
            <div  style={styles.container}>    
                <div style={styles.header}>
                    <text style={styles.partner_name}>
                        {users[1].name}
                    </text>
                    <text style={styles.btn_del_chat}>
                        Delete conversation
                    </text>
                </div>
                <div style={styles.body}>
                    {
                        messages.map(message=>(
                            message.sender.id===0?
                            <MyMessage message={message}/>
                            :
                            <PartnerMessage message={message}/>
                        ))
                    }
                </div>
                <div style={styles.footer}>
                    <input style={styles.message_input} placeholder='Your message...' />
                    <ButtonComponent label='Send' color='#3F50CD'/>

                </div>
            </div>
        )
    }
}

const styles={
    container :{    
        flexDirection:'column',
        height:550, 
        display:'flex',
    },
    header:{
        display: 'flex',
        width:'100%',
        height: 25,
        backgroundColor: '#3F50CD',
        flexDirection: 'row',
        padding:10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    partner_name:{
        fontSize: 25,
        color:'#ffffff'
    },
    normal_text:{
        fontSize: 17,
        color:'#ffffff'
    },
    avatar:{
        height:50,
        width:50,
        borderRadius: 25
    },
    message:{
        display: 'flex',
        flex:1,
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    content_container:{
        borderRadius: 10,
        padding:10,
        maxWidth: '70%',
    
    },
    btn_del_chat:{
        fontSize: 15,
        color:'#F0F0F0'
    },
    body:{
        flex:1,
        width: '103%',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll'
    },
    footer:{
        display: 'flex',
        width:'95%',
        height: 40,
        backgroundColor: '#F0F0F0',
        flexDirection: 'row',
        paddingTop:10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    message_input:{
        width:'60%',
        height:40,
        backgroundColor: '#ffffff',
        paddingLeft:10,
        fontSize: 20,
        borderWidth: 0
    }
    
}

