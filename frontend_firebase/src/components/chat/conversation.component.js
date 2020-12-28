//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { routePaths, TEXT_SIZES } from '../../utils/constants';
import { BLUE_1, GRAY_2, GRAY_3, GRAY_4, WHITE } from '../../utils/palette';
import ButtonComponent from '../common/button.component';
import HeaderListComponent from '../common/header_list.component';
import ButtonInputComponent from '../input/button_input.component';

import logo from '../../assets/images/logo.png'
class MyMessage extends Component {
    render (){
        const message = this.props.message
        const user =message.user
        return (
            <div style={{...styles.message_container,
                flexDirection: 'row-reverse'}}>
                <img src={user.avatar!==""?user.avatar:logo} style={styles.avatar}/>
                <div style={{...styles.content_container,
                    backgroundColor: BLUE_1,marginRight:20}}>
                    <text style={{ ...styles.message_content, color:WHITE }}>
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
        const user =message.user
        return (
            <div style={{...styles.message_container,
                alignSelf:'baseline',
                flexDirection: 'row'}}>

                <Link to={routePaths.FREELANCER_DETAIL}
                    style={{textDecoration:'none'}}>
                    <img src={user.avatar===''?logo:user.avatar} style={styles.avatar}/>
                </Link>
              

                <div style={{...styles.content_container,
                    alignSelf:'baseline',
                    backgroundColor: GRAY_4,marginLeft:20}}>

                    <text style={{...styles.message_content,color:GRAY_2}}>
                        {message.content}
                    </text>

                </div>
            </div>
        )
    }
}
export default class ConversationComponent extends Component {

    scrollToBottom = () => {
        console.log('Scroll_to_bottom')
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
      }
      
      componentDidMount() {
        this.scrollToBottom();
      }
      
      componentDidUpdate() {
        this.scrollToBottom();
      }

    render(){
        const chat=this.props.chat;
        const users =Object.values(chat.users);
        const messages =Object.values(chat.messages)


        const user_id=this.props.user_id
        return (
            <div  style={styles.container}>    

                <HeaderListComponent title={users[1].name}/>

                <div style={styles.body}>
                    {
                        messages.map((item,index)=>(
                            item.user.id===user_id?
                            <MyMessage key={''+index} message={item}/>
                            :
                            <PartnerMessage key={''+index} message={item}/>
                        ))
                    }
                    <div style={{ float:"left", clear: "both" }}
                        ref={(el) => { this.messagesEnd = el; }}>
                    </div>

                </div>

           
                <ButtonInputComponent 
                    onChange={this.props.typeMessage}
                    onClick={this.props.sendMessage}
                    btn_label='Send'  />
            </div>
        )
    }
}

const styles={
    container:{
        flexDirection:'column', 
        display:'flex',
        flex:1
    },
    body:{
        flex:1,
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll'
    },
    partner_name:{
        fontSize: 25,
        color:'#ffffff'
    },
    message_container:{
        display: 'flex',
        paddingRight: 12,
        paddingLeft: 12,
        paddingTop: 12,
        flexDirection: 'row',
    },
    content_container:{
        borderRadius: 7,
        padding:7,
        maxWidth: '70%',
    
    },
    avatar:{
        height:40,
        width:40, 
        borderRadius: 20
    },
    message_content:{
        fontSize: TEXT_SIZES.SMALL
    }

    
}

