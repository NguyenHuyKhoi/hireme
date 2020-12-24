//import from library 
import React, {Component} from 'react'
import ChatComponent from '../../components/chat/chat.component'
import SidebarComponent from '../../components/common/side_bar.component'
import { PADDING_BODY_DASHBOARD, SIDEBAR_RATIO } from '../../utils/constants'
import { GRAY_6 } from '../../utils/palette'
import api from '../../sample_db/fake_api_responses.json'
export default class DashBoardChatScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            user_id:null
        }
    }

    render(){
        return (

            <div style={styles.container}>

             
                <SidebarComponent/>
            
                <div style={styles.body}>
                    <ChatComponent user_id={this.state.user_id} />
                </div>

            </div>
            
        )
    }

    
}

const styles={
    container:{
        width:'100vw',
        height:'100vh',
        backgroundColor: GRAY_6,
        display:'flex',
        flexDirection: 'row'
    },
    body:{
        display:'flex',
        flex:SIDEBAR_RATIO,
        padding:PADDING_BODY_DASHBOARD
    }
}
