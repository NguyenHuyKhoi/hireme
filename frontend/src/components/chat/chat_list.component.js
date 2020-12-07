//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import sample_db from '../../sample_db/sample_db.json'
import { routePaths, textSizes } from '../../utils/constants';
import { BLACK, BLUE_1, GRAY_1, GRAY_2, GRAY_3, GRAY_4, GRAY_5, WHITE } from '../../utils/palette';
import HeaderListComponent from '../common/header_list.component';


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
                style={{display: 'flex',flexDirection: 'row',flex:1,height:95,
                    backgroundColor:this.props.index%2==0?WHITE:GRAY_4}}>


                <div style={{flex:0.5}}>
                    {
                    this.props.is_current_chat?
                        <div style={{width:5,height:'100%',backgroundColor: BLUE_1}}/>
                        :
                        null
                    }

                </div>

                <div style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img style={{ width:'100%',aspectRatio:1,borderRadius: '50%'}} 
                            src={'https://randomuser.me/api/portraits/men/22.jpg'}/>
                </div>

                
                <div style={{display:'flex',flex:6,flexDirection:'column',paddingLeft:15,
                    justifyContent:'center'}}>

                    <div style={{ display: 'flex',flexDirection: 'row',
                        alignItems:'center',
                        justifyContent: 'space-between',marginBottom:3}}>
                            <text style={{   fontSize: textSizes.NORMAL,color:GRAY_1}}>
                                {this.collapseText(chat.partner.name,12)}
                            </text>
                            <text style={{ fontSize: textSizes.SMALL,color:GRAY_2}}>
                                {this.collapseText(chat.latest_message.time,10)}
                            </text>
                    </div>

                    <text style={{ fontSize: textSizes.SMALL,color:GRAY_2}}>
                        {this.collapseText(chat.latest_message.content,30)}
                    </text>
                
                </div>

                <div style={{flex:0.5}}/>
                

  
            
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

                <HeaderListComponent title='Chat list'/>

                <div style={{  display: 'flex',flex:1,flexDirection: 'column',
                    overflowY: 'scroll'}}>
                    {
                        chats.map((chat,index)=>(
                            <ChatItem 
                                chat={chat} 
                                index={index} 
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


