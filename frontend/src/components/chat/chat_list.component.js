//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import sample_db from '../../sample_db/sample_db.json'
import { routePaths } from '../../utils/constants';


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
                style={{display: 'flex',flexDirection: 'row',flex:1,alignItems: 'center',height:80,
                    backgroundColor:this.props.index%2==0?'#ffffff':'#f0f0f0'}}>

                {
                this.props.is_current_chat?
                    <div style={{width:5,height:'100%',backgroundColor: '#3F50CD'}}/>
                    :
                    null
                }

                <Link to={routePaths.FREELANCER_DETAIL} 
                    style={{textDecoration:'none'}}>
                    <img style={{ height:40, width:40,borderRadius: 20, marginLeft: 15}} 
                        src={'https://randomuser.me/api/portraits/men/22.jpg'}/>
                </Link>
                

                <div style={{
                    marginTop:20, marginBottom: 20, display: 'flex',flex:1,
                    flexDirection: 'column', marginLeft: 10
                }}>

                    <div style={{ display: 'flex',flexDirection: 'row',
                    justifyContent: 'space-between',marginBottom:3}}>
                        <text style={{   fontSize: 17,color:'#707070'}}>
                            {this.collapseText(chat.partner.name,12)}
                        </text>
                        <text style={{ fontSize: 13,color:'#707070'}}>
                            {chat.latest_message.time}
                        </text>
                    </div>

                    <text style={{ fontSize: 13,color:'#707070'}}>
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
            <div  style={{display:'flex',flex:1, flexDirection:'column'}} >    

                <div style={{ display: 'flex',flex:1,
                    backgroundColor: '#3F50CD',flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <text style={ {fontSize: 25,color:'#ffffff'}}>
                        Chat list
                    </text>
                    
                </div>

                <div style={{  display: 'flex',flex:10,flexDirection: 'column',
                    overflowY: 'scroll'}}>
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


