//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import ChatComponent from '../../components/chat/chat.component'
import LabeledInputComponent from '../../components/input/labeled_input.component'
import LabeledSelectedInputComponent from '../../components/input/labeled_selected_input.component'
import RangeInputComponent from '../../components/input/range_input.component'
import SidebarComponent from '../../components/common/side_bar.component'
import SkillsPickerComponent from '../../components/input/skills_picker.component'
import UploadFilesComponent from '../../components/common/upload_files.component'
import PostTaskProfileComponent from '../../components/task/post_task_profile.component'
import { routePaths, SIDEBAR_RATIO, textSizes } from '../../utils/constants'
import { BLUE_1, WHITE,GRAY_6 } from '../../utils/palette'
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
                    paddingLeft:60,paddingRight:60,
                    paddingTop:110,paddingBottom:100}}>

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
