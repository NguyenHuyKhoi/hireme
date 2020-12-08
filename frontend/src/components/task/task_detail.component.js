//import from library 
import React, {Component} from 'react'
import { inputField } from '../../redux/constant/input.constant';
import { WHITE } from '../../utils/palette';
import DescriptionComponent from '../common/description.component';
import SkillsListComponent from '../common/skills_list.component';
import AttachmentsComponent from './attachments.component';
import TaskAttachmentsComponent from './attachments.component';
import TaskDetailHeaderComponent from './task_detail_header.component';


export default class TaskDetailTabComponent extends Component {
    render(){
        return (
            <div style={{display:'flex',flex:1,flexDirection: 'column',backgroundColor: WHITE,

            boxShadow:'3px 5px 3px 3px #707070'}}>

                    
            {/* header task detail */}
            
                <TaskDetailHeaderComponent/>
                <div style={{flex:1,display:'flex',flexDirection:'row'}}>
                    <div style={{flex:1}}/>
                    <div style={{flex:7.5,display:'flex',flexDirection:'column',paddingBottom:50}}>
                        <div style={{marginTop:30}}>
                            <DescriptionComponent 
                                title='About me'
                                content='Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.

                                Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.'/>
                        </div>

                        <div style={{marginTop:30}}>
                            <AttachmentsComponent input_field={inputField.FILES}/>
                        </div>

                        <div style={{marginTop:30}}>
                            <SkillsListComponent/>
                        </div>
        
                    </div>
                    <div style={{flex:1}}/>
                </div>
              
    
        </div>
                      
            
        )
    }
}
