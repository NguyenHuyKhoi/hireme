//import from library 
import React, {Component} from 'react'
import sample_db from '../../sample_db/sample_db.json'


const chats=sample_db.chats   ;

class ChatItem extends Component {
    collapseText =(text,limit)=>{
        return text.substring(0,Math.min(text.length,limit))+'...'
    }

    render (){
        const chat = this.props.chat
        return (
            <div 
                onClick={this.props.onClick}
                style={{...styles.item_container,
                    backgroundColor:this.props.index%2==0?'#ffffff':'#f0f0f0'}}>

                {
                this.props.is_current_chat?
                    <div style={{width:5,height:'100%',backgroundColor: '#3F50CD'}}/>
                    :
                    null
                }

                <img src={chat.partner.avatar} style={styles.avatar}/>

                <div style={styles.item_content_container}>

                    <div style={styles.item_row_1}>
                        <text style={styles.normal_text}>
                            {this.collapseText(chat.partner.name,12)}
                        </text>
                        <text style={styles.small_text}>
                            {chat.latest_message.time}
                        </text>
                    </div>

                    <text style={styles.small_text}>
                        {this.collapseText(chat.latest_message.content,40)}
                    </text>
                </div>
            
            </div>
        )
    }
}

export default class ChatListComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            current_chat_index:0
        }
    }
    render(){
        return (
            <div  style={styles.container} >    
                <div style={styles.header}>
                    <text style={styles.header_title}>
                        Chat list
                    </text>
                    
                </div>
                <div style={styles.body}>
                    {
                        chats.map((chat,index)=>(
                            <ChatItem chat={chat} index={index} 
                                is_current_chat={index===this.state.current_chat_index}
                                onClick={()=>this.setState({
                                    current_chat_index:index
                                })}
                            />
                        ))
                    }
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
    item_container:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        height:80
    },
    avatar:{
        height:40,
        width:40,
        borderRadius: 20,
        marginLeft: 15
    },
    item_content_container :{
        marginTop:20,
        marginBottom: 20,
        display: 'flex',
        flex:1,
        flexDirection: 'column',
        marginLeft: 10
    },
    item_row_1:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:3
    },

    header:{
        display: 'flex',
        width:'100%',
        height: 25,
        backgroundColor: '#3F50CD',
        flexDirection: 'row',
        padding:10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header_title:{
        fontSize: 25,
        color:'#ffffff'
    },
    normal_text:{
        fontSize: 17,
        color:'#707070'
    },
    small_text:{
        fontSize: 13,
        color:'#707070'
    },
    body:{
        flex:1,
        width: '105%',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll',
       // overflow: 'hidden'
    }
    
}

