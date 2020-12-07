//import from library 
import React, {Component} from 'react'
import ChatComponent from '../../components/chat/chat.component'
import SidebarComponent from '../../components/common/side_bar.component'
import { SIDEBAR_RATIO } from '../../utils/constants'
import { GRAY_6 } from '../../utils/palette'

export default class DashBoardChatScreen extends Component {
    render(){
        return (

            <div style={{width:'100vw',height:'100vh',backgroundColor: GRAY_6,
                display:'flex',flexDirection: 'row'}}>

                {/* sidebar */}
                <SidebarComponent/>
                {/* body */}
                <div style={{display:'flex',flex:SIDEBAR_RATIO,padding:60}}>

                    <ChatComponent/>
                </div>

            </div>
            
        )
    }
}
