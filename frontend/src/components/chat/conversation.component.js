//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import sample_db from '../../sample_db/sample_db.json'
import { routePaths, textSizes } from '../../utils/constants';
import { BLUE_1, GRAY_2, GRAY_3, GRAY_4, WHITE } from '../../utils/palette';
import ButtonComponent from '../common/button.component';
import HeaderListComponent from '../common/header_list.component';
import ButtonInputComponent from '../input/button_input.component';


const conversation=sample_db.conversation   ;

class MyMessage extends Component {
    render (){
        const message = this.props.message
        const sender =message.sender
        return (
            <div style={{...styles.message,
                flexDirection: 'row-reverse'}}>
                <img src={sender.avatar} style={{height:50,width:50, borderRadius: 25}}/>
                <div style={{...styles.content_container,
                    backgroundColor: BLUE_1,marginRight:20}}>
                    <text style={{ fontSize: textSizes.SMALL, color:WHITE }}>
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

                <Link to={routePaths.FREELANCER_DETAIL}
                    style={{textDecoration:'none'}}>
                    <img src={sender.avatar} style={{height:50,width:50, borderRadius: 25}}/>
                </Link>
              

                <div style={{...styles.content_container,
                    backgroundColor: GRAY_4,marginLeft:20}}>

                    <text style={{fontSize:textSizes.SMALL,color:GRAY_2}}>
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
            <div  style={{flexDirection:'column', display:'flex',flex:1}}>    
                <HeaderListComponent title={users[1].name}/>
                <div style={{flex:1,display: 'flex',flexDirection: 'column',overflowY: 'scroll'}}>
                    {
                        messages.map(message=>(
                            message.sender.id===0?
                            <MyMessage message={message}/>
                            :
                            <PartnerMessage message={message}/>
                        ))
                    }
                </div>

               <ButtonInputComponent  btn_label='Send' placeholder='Type your message ...'/>
            </div>
        )
    }
}

const styles={
    partner_name:{
        fontSize: 25,
        color:'#ffffff'
    },
    message:{
        display: 'flex',
        flex:1,
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 20,
        flexDirection: 'row',
    },
    content_container:{
        borderRadius: 7,
        padding:7,
        maxWidth: '70%',
    
    }

    
}

