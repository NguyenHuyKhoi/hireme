//import from library 
import React, {Component} from 'react'
import SkillsListComponent from '../common/skills_list.component';
import AttachmentsComponent from './attachments.component';
import TaskAttachmentsComponent from './attachments.component';
import TaskDetailHeaderComponent from './task_detail_header.component';


export default class TaskDetailTabComponent extends Component {
    render(){
        return (
            <div style={{flex:1,display:'flex',flexDirection: 'column',
                    alignItems: 'center',
                    paddingBottom:60,
                    alignSelf: 'baseline',backgroundColor: '#111111'}}>

                    
            {/* header task detail */}
            
                <TaskDetailHeaderComponent/>
            {/* body task detail  */}
                
                {/* column1 */}
                <div style={{flex:1,display:'flex',flexDirection: 'column', 
                    backgroundColor: '#291725'}}>

                    {/* description */}
                    <div style={{width:'100%',alignSelf: 'baseline',backgroundColor: '#203583',
                        display:'flex',flexDirection: 'column'}}>
                        <text style={{fontSize:22,color:'#000000'}}>
                            description
                        </text>

                        <text style={{marginTop: 8,fontSize:18,color:'#000000',textAlign:'left'}}>
                            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.<br/>

Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.<br/>

Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
                        </text>
                    </div>

                    {/* attachments */}
                    <AttachmentsComponent/>

                        {/* skills */}
                    <SkillsListComponent/>
            </div> 
        </div>
                      
            
        )
    }
}
