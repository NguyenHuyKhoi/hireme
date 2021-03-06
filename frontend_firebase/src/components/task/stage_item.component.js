//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../common/button.component'
import LabeledInputComponent from '../input/labeled_input.component'
import { BLACK, BLUE_1, GREEN_1, WHITE } from '../../utils/palette'
import { TEXT_SIZES } from '../../utils/constants'
import SmallFieldComponent from '../common/small_field.component'
import TaskNoteListComponent from './task_note_list.component'
import AttachmentsComponent from '../input/attachments.component'
import { convertFullDateToOnlyDay, toArray } from '../../utils/helper'

import firebase from '../../firebase/firebase'
import firebaseConfig from '../../firebase/config'

class TimeLine extends Component{
    render(){
        const deadline=this.props.deadline
        const percentage=this.props.percentage;
        return (
            <div style={{width: '100%',height: 60,display:'flex',flexDirection:'column'}}>

                <div style={{width:'100%',flex:1,display:'flex',justifyContent:'flex-end'}}>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',
                        flexDirection:'column',marginBottom:10}}>

                        <input 
                            style={{fontSize:TEXT_SIZES.SMALL,color:BLACK,width:'7vw',
                            backgroundColor: 'rgba(0,0,0,0)',
                            outline:'none',
                            borderColor:'rgba(0,0,0,0)'
                            }} 
                            onChange={e=>{}}
                            value={convertFullDateToOnlyDay(deadline)}>
                            
                        </input>
                        <SmallFieldComponent  label={[percentage+'%']} label_color={WHITE}
                            background_color={GREEN_1}/>
                    </div>
                </div>

                <div style={{width:'100%',height:5,backgroundColor: BLUE_1}}>
                    <text style={{fontSize:1}}>.</text>
                </div>
            </div>
            
        )
    }
}
export default class StageItemComponent extends Component {

    constructor(props){
        super(props);

        let stage=this.props.stage;

        stage={
            ...stage,
            link:stage.link!==undefined?stage.link:'',
            attachments:toArray(stage.attachments),
            notes:toArray(stage.notes)
        }

        this.state={
            stage,
            deletedQueue:[]
        };
    }

    updateInput=(part,field,value)=>{
        console.log('update_input_stage:',part,field,value)
        this.setState({
            [part]:{
                ...this.state[part],
                [field]:value
            }
        });
    }

    addFileToDeletedQueue=(id)=>{
        let arr=this.state.deletedQueue;
        arr.push(id);
        this.setState({
            deletedQueue:arr
        })
    }

    save=async()=>{
        let s=this.state.stage;

        let att=s.attachments;
        if (att.length!==0){
            let new_att=[];
            await Promise.all(att.map(async (item)=>{
                if (item.url!==undefined) new_att.push(item)
                else{
                    let fileUrl=await firebase.uploadFile(
                        '/task/'+this.props.task_id+'/',
                        item.content,
                        item.id
                    )
                    console.log('State UploadFile url:',fileUrl)

                    new_att.push({
                        ...item,
                        url:fileUrl
                    })
                }
            }))

            await this.updateInput('stage','attachments',new_att)
            s=this.state.stage;

            console.log('Stage reUpdateInput :')

        }


        let dq=this.state.deletedQueue;
        console.log('Stage deletedQueue begin :',dq)
        if (dq.length!==0){
            await Promise.all(dq.map(async (item)=>{
                await firebase.deleteFile(
                        '/task/'+this.props.task_id+'/',
                        item //is id of deleted file 
                    )
            }))
        }

        console.log('Stage deletedQueue end :')

        console.log('Stage pushNewStage begin :',s)
        await firebase.update('/task/'+this.props.task_id+'/stages/'+this.props.stage.id,{
            link:s.link,
            notes:s.notes,
            attachments:s.attachments
        })

        console.log('Stage pushNewStage end :')

        alert('Cập nhật thành công!')
    }

    componentWillReceiveProps(nextProps) {
        let stage=nextProps.stage;

        stage={
            ...stage,
            link:stage.link!==undefined?stage.link:'',
            attachments:toArray(stage.attachments),
            notes:toArray(stage.notes)
        }
        this.setState({ stage});
    }

    render(){
        let stage=this.state.stage;
        let is_edit=this.props.is_edit!==undefined?this.props.is_edit:false

        console.log('stage_item',stage);
        return (
            <div style={styles.container}>   

                <TimeLine deadline={stage.end_time} percentage={stage.process}/>

                <div style={styles.header}>

                    <text style={styles.stage_title} >
                        {stage.title}
                    </text>

                </div> 

                <div style={styles.body}>

                    <div style={styles.inner_body}>
                            
                            <AttachmentsComponent 
                                label='Tệp đính kèm'
                                disabled={!is_edit}
                                addFileToDeletedQueue={id=>this.addFileToDeletedQueue(id)}
                                onChange={(value)=>this.updateInput('stage','attachments',value)}
                                attachments={stage.attachments}/>

                            <div style={styles.res_container}>
                                <LabeledInputComponent 
                                    label='Link tài nguyên:' 
                                    disabled={!is_edit}
                                    onChange={(value)=>this.updateInput('stage','link',value)}
                                    value={ stage.link}/>
                            </div>  

                            <div style={styles.notes_container}>
                                <TaskNoteListComponent 
                                    disabled={!is_edit}
                                    onChange={(value)=>this.updateInput('stage','notes',value)}
                                    notes={stage.notes} />
                            </div>   

                            {
                                is_edit?
                                <div style={{width: '100%',marginTop:20,marginBottom:20,display: 'flex',flexDirection:'row',justifyContent:'center'}}>
                                    <div style={{ width: '60%'}}>
                                        <ButtonComponent 
                                            onClick={this.save}
                                            label='Lưu thay đổi'/>
                                    </div>
                                </div>
                                :
                                null
                            }
                            
                          
                            
                           
                          
                    </div>
                </div>

            </div>


        )
    }
}


const styles={
    container:{
        width:420,
        height:525,
        display:'flex',
        flexDirection: 'column'
    },
    header:{
        marginTop: 5,
        width:'80%',
        height:45,
        backgroundColor: GREEN_1,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:15
    },
    stage_title:{
        fontSize:TEXT_SIZES.NORMAL,
        color:WHITE,
        height: 35,
        backgroundColor: 'rgba(0,0,0,0)',
        outline:'none',
        borderColor:'rgba(0,0,0,0)'
    },
    body:{
        display:'flex',
        flex:1,
        width:'83.5%',
        backgroundColor: WHITE,
        overflowY:'hidden',
        boxShadow:'0px 0px 30px 5px  #707070'
    },
    inner_body:{
        display:'flex',
        flex:1,
        overflowX: 'hidden',
        flexDirection:'column',
        padding: 20
    },
    res_container:{
        width:'100%',
        marginTop:15
    },
    notes_container:{
        width:'100%',
        marginTop:15,
        paddingBottom:40
    }
}



