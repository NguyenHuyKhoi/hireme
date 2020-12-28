//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../common/button.component'
import LabeledInputComponent from '../input/labeled_input.component'
import { BLACK, BLUE_1, GREEN_1, WHITE } from '../../utils/palette'
import { TEXT_SIZES } from '../../utils/constants'
import SmallFieldComponent from '../common/small_field.component'
import TaskNoteListComponent from './task_note_list.component'
import AttachmentsComponent from '../input/attachments.component'
import { convertFullDateToOnlyDay } from '../../utils/helper'
// * bidding [
//     {
//       * id
//       * freelancer : {id ,name ,avatar ,rate_score}
//       * intended_time , intended_cost
//       * post_time
//     }
//   ]

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
                            style={{fontSize:TEXT_SIZES.SMALL,color:BLACK,width:'6vw',
                            backgroundColor: 'rgba(0,0,0,0)',
                            outline:'none',
                            borderColor:'rgba(0,0,0,0)'
                            }} 
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
    render(){
        const stage=this.props.stage;

        const attachments=stage.attachments!==undefined?stage.attachments:[]
        const link=stage.link!==undefined?stage.link:''
        const notes=stage.notes!==undefined?stage.notes:[]
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
                            
                            <AttachmentsComponent is_edit={true}
                                   attachments={attachments}/>

                            <div style={styles.res_container}>
                                <LabeledInputComponent 
                                    label='Link Resource' 
                                    onChange={(value)=>{}}
                                    value={ link}/>
                            </div>  

                            <div style={styles.notes_container}>
                                <TaskNoteListComponent notes={notes} />
                            </div>   
                           
                          
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
        width:'80%',
        backgroundColor: WHITE,
        overflowY:'scroll',
        boxShadow:'0px 0px 30px 5px  #707070'
    },
    inner_body:{
        display:'flex',
        flex:1,
        flexDirection:'column',
        padding: 20
    },
    res_container:{
        width:'80%',
        marginTop:15
    },
    notes_container:{
        width:'100%',
        marginTop:15,
        paddingBottom:40
    }
}



