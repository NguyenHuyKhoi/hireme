//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import SidebarComponent from '../../components/common/side_bar.component'
import PostTaskProfileComponent from '../../components/task/post_task_profile.component'
import { routePaths, SIDEBAR_RATIO, textSizes,PADDING_BODY_DASHBOARD } from '../../utils/constants'
import {GRAY_6 } from '../../utils/palette'
import ButtonComponent from '../../components/common/button.component'
import HeaderListComponent from '../../components/common/header_list.component'

export default class DashBoardTaskPostScreen extends Component {
    render(){
        return (

            <div style={{width:'100vw',backgroundColor:GRAY_6,
                display:'flex',flexDirection: 'row'}}>

                {/* sidebar */}
                <SidebarComponent/>
                {/* body */}
                <div style={{display:'flex',flex:SIDEBAR_RATIO,
                    padding:PADDING_BODY_DASHBOARD}}>

                    <div style={{display:'flex',flex:1,flexDirection: 'column'}}>

                        {/* header */}
                        <HeaderListComponent title='Post A Task'/>

                        {/* form  */}

                        <div style={{flex:1,marginTop:30}}>
                            <PostTaskProfileComponent/>
                        </div>
                      
                        {/* submit button */}

                        <Link 
                             to={routePaths.DASHBOARD_HOME}
                            style={{marginTop:50,width:'25%',textDecoration:'none'}}>
                            <ButtonComponent label='Post This Task' height={60}/>
                        </Link>

                    </div>
               
                </div>

     

               
            </div>
            
        )
    }
}
