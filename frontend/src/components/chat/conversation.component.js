//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { routePaths, TEXT_SIZES } from '../../utils/constants';
import { BLUE_1, GRAY_2, GRAY_3, GRAY_4, WHITE } from '../../utils/palette';
import ButtonComponent from '../common/button.component';
import HeaderListComponent from '../common/header_list.component';
import ButtonInputComponent from '../input/button_input.component';


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
                    <text style={{ fontSize: TEXT_SIZES.SMALL, color:WHITE }}>
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
                alignSelf:'baseline',
                flexDirection: 'row'}}>

                <Link to={routePaths.FREELANCER_DETAIL}
                    style={{textDecoration:'none'}}>
                    <img src={sender.avatar} style={{height:50,width:50, borderRadius: 25}}/>
                </Link>
              

                <div style={{...styles.content_container,
                    alignSelf:'baseline',
                    backgroundColor: GRAY_4,marginLeft:20}}>

                    <text style={{fontSize:TEXT_SIZES.SMALL,color:GRAY_2}}>
                        {message.content}
                    </text>

                </div>
            </div>
        )
    }
}
export default class ConversationComponent extends Component {

    render(){
        const conversation=this.props.conversation;
        const users =conversation.users;
        const messages =conversation.messages

        console.log('messages:',messages)
        return (
            <div  style={{flexDirection:'column', display:'flex',flex:1}}>    
                <HeaderListComponent title={users[1].name}/>
                <div style={{flex:1,display: 'flex',flexDirection: 'column',overflowY: 'scroll'}}>
                    {
                        messages.map((item,index)=>(
                            item.sender.id===users[0].id?
                            <MyMessage key={''+index} message={item}/>
                            :
                            <PartnerMessage key={''+index} message={item}/>
                        ))
                    }
                </div>

                <ButtonInputComponent 
                    onChange={value=>{}}
                    btn_label='Send'  />
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

