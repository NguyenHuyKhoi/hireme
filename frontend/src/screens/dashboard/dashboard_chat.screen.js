//import from library 
import React, {Component} from 'react'
import ChatComponent from '../../components/chat/chat.component'
import SidebarComponent from '../../components/common/side_bar.component'

export default class DashBoardChatScreen extends Component {
    render(){
        return (

            <div style={{width:'100vw',height:'100vh',backgroundColor: '#392855',
                display:'flex',flexDirection: 'row'}}>

                {/* sidebar */}
                <SidebarComponent/>
                {/* body */}
                <div style={{display:'flex',flex:4,
                    paddingLeft:30,paddingRight:30,
                    paddingTop:40,paddingBottom:40,
                    backgroundColor: '#902823'}}>

                    <ChatComponent/>
                </div>

            </div>
            
        )
    }
}
