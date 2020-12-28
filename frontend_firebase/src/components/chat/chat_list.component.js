//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { routePaths, TEXT_SIZES } from '../../utils/constants';
import { collapseText, convertFullDateToOnlyDay } from '../../utils/helper';
import { BLACK, BLUE_1, GRAY_1, GRAY_2, GRAY_3, GRAY_4, GRAY_5, WHITE } from '../../utils/palette';
import HeaderListComponent from '../common/header_list.component';

import logo from '../../assets/images/logo.png'


class ChatItem extends Component {
    render (){
        const chat = this.props.chat

        const users=Object.values(chat.users);
        const user_id=this.props.user_id
        const partner=users.filter((item)=>item.id===user_id)[0]

        const messages=Object.values(chat.messages)
        const latest_message=messages[messages.length-1]

        console.log('chat_item :',users,messages,partner,user_id)
     //   const task=chat.task
        return (
            <div 
                onClick={this.props.onClick}
                style={{...styles.item_container,
                    backgroundColor:this.props.index%2==0?WHITE:GRAY_4}}>


                <div style={{flex:0.5}}>
                    {
                    this.props.is_current_chat?
                        <div style={{width:5,height:'100%',backgroundColor: BLUE_1}}/>
                        :
                        null
                    }

                </div>

                <div style={styles.col1}>
                    <img 
                        style={styles.avatar} 
                        src={partner.avatar===''?logo:partner.avatar}/>
                </div>

                
                <div style={styles.col2}>

                    
                    <div style={styles.col2_row1}>
                            <text style={styles.normal_text}>
                                {collapseText(partner.username,12)}
                            </text>
                            <text style={styles.small_text}>
                                {convertFullDateToOnlyDay(latest_message.post_time)}
                            </text>
                    </div>

                    <text style={styles.small_text}>
                        {collapseText(latest_message.content,30)}
                    </text>
                    {/* {
                        task!==undefined  && task!==null?
                        <Link   
                            to={routePaths.DASHBOARD_TASK_MANAMENT} 
                            style={styles.task_link}>
                            {'On task :'+collapseText(task.name,20)}
                        </Link>
                        :
                        null
                    } */}
                
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

        const chats=this.props.chats
        const user_id=this.props.user_id;
        console.log('chat_list :',chats,user_id);
        return (
            <div  style={styles.container} >    

                <HeaderListComponent title='Chat list'/>

                <div style={styles.body}>
                    <text style={{fontSize:TEXT_SIZES.NORMAL,color:BLACK,margin:30}}>
                        You have't not any chat
                    </text>
                    {
                        chats.map((item,index)=>(
                            <ChatItem 
                                key={''+index}
                                chat={item} 
                                index={index} 
                                user_id={user_id}
                                is_current_chat={index===this.state.current_chat_index}
                                onClick={()=>{
                                  //  this.props.getConversation(item.id)
                                    this.setState({
                                        current_chat_index:index
                                    })
                                }}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

const styles={
    item_container:{
        display: 'flex',
        flexDirection: 'row',
        flex:1,
        height:95,
    },
    col1:{
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    avatar:{ 
        width:'100%',
        aspectRatio:1,
        borderRadius: '50%'
    },
    col2:{
        display:'flex',
        flex:6,
        flexDirection:'column',
        paddingLeft:15,
        justifyContent:'center'
    },
    col2_row1:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between'
    },
    normal_text:{   
        fontSize: TEXT_SIZES.NORMAL,
        color:GRAY_1
    },
    small_text:{ 
        fontSize: TEXT_SIZES.SMALL,
        color:GRAY_2
    },
    task_link:{   
        fontSize: TEXT_SIZES.SMALL,
        color:BLUE_1,
        textDecoration:'none'
    },
    container:{
        display:'flex',
        flex:1, 
        flexDirection:'column'
    },
    body:{  
        display: 'flex',
        flex:1,
        flexDirection: 'column',
        overflowY: 'scroll'
    }

}


