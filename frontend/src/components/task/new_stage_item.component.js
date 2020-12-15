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

export default class NewStageItemComponent extends Component {
    render(){
        return (
            <div style={styles.container}>   

                <div style={styles.timeline}/>

                <div style={styles.header}>

                    <input 
                        style={styles.header_title}
                        placeholder='Add Title'
                    />
                   
                </div> 

                <div style={styles.body}>

                    <div style={styles.inner_body}>
                        
                            {/* <AttachmentsComponent is_edit={true}/> */}

                            <div style={styles.content}>
                                <LabeledInputComponent 
                                    label='Deadline' 
                                    onChange={(value)=>{}}/>

                                <LabeledInputComponent 
                                    label='Percentage' 
                                    type='number'
                                    onChange={(value)=>{}}/>
                            </div>  
                       
                            <div style={styles.btn_container}>
                                <ButtonComponent label='Add Stage'/>
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
    timeline:{
        width:'100%',
        height:60
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
    header_title:{
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
    content: {
        width:'80%',
        marginTop:15
    },
    btn_container:{
        marginTop:20,
        width: '100%',
        paddingBottom:40,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
}


