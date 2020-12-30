//import from library 
import React, {Component} from 'react'
import { WHITE } from '../../utils/palette';
import DescriptionComponent from '../common/description.component';
import SkillsListComponent from '../common/skills_list.component';
import AttachmentsComponent from '../input/attachments.component';
import TaskDetailHeaderComponent from './task_detail_header.component';
import api from '../../sample_db/fake_api_responses.json'
import SingleFieldComponent from '../common/single_field.component';
import { convertFullDateToOnlyDay } from '../../utils/helper';

export default class TaskDetailTabComponent extends Component {

    render(){
        const task=this.props.task;
        return (
            <div style={styles.container}>

                <TaskDetailHeaderComponent task={task}/>

                <div style={styles.body}>

                    <div style={{flex:1}}/>

                    <div style={styles.col1}>
                        
                        <div style={{marginTop:30}}>
                            <DescriptionComponent 
                                title='Mô tả'
                                content={task.description}/>
                        </div>

                        <div style={{width:'100%',display:'flex',
                                flexDirection:'row',justifyContent:'space-between',marginTop:30}}>
                            <div >
                                <SingleFieldComponent field={{key:'Danh mục',value:task.category}} />
                            </div>
                          
                            <div>
                                <SingleFieldComponent field={{key:'Đăng lúc',value:convertFullDateToOnlyDay(task.post_time)}} />
                            </div>
                           
                        </div>


                        <div style={{marginTop:30}}>
                            <SkillsListComponent skills={task.skills}/>
                        </div>
        
                    </div>
                    
                    <div style={{flex:1}}/>
                </div>
              
    
        </div>
                      
            
        )
    }
}


const styles={
    container:{
        display:'flex',
        flex:1,
        flexDirection: 'column',
        backgroundColor: WHITE,
        boxShadow:'3px 5px 3px 3px #707070'
    },
    body:{
        flex:1,
        display:'flex',
        flexDirection:'row'
    },
    col1:{
        flex:7.5,
        display:'flex',
        flexDirection:'column',
        paddingBottom:50
    }
}
