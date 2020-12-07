//import from library 
import React, {Component} from 'react'
import AuthModal from '../../components/common/auth.modal'
import SidebarComponent from '../../components/common/side_bar.component'
import { PADDING_BODY_DASHBOARD, SIDEBAR_RATIO } from '../../utils/constants'
import { GRAY_6 } from '../../utils/palette'

export default class DashBoardHomeScreen extends Component {
    render(){
        return (

            <div style={{width:'100vw',backgroundColor:GRAY_6,
            display:'flex',flexDirection: 'row'}}>

                {/* sidebar */}
                <SidebarComponent />
                {/* body */}
                <div style={{display:'flex',flex:SIDEBAR_RATIO,
                    padding:PADDING_BODY_DASHBOARD}}>
                        hello
                </div>

            </div>
            
        )
    }
}
