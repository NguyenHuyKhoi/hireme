//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../common/button.component'
import LabeledInputComponent from '../input/labeled_input.component'
import RateScoreComponent from '../common/rate_score.component'
import UploadFilesComponent from '../common/upload_files.component'
import AttachmentsComponent from './attachments.component'
import TaskAttachmentsComponent from './attachments.component'
import TaskNotesComponent from './task_notes.component'
// * bidding [
//     {
//       * id
//       * freelancer : {id ,name ,avatar ,rate_score}
//       * intended_time , intended_cost
//       * post_time
//     }
//   ]
export default class StageItemComponent extends Component {
    render(){
        return (
            <div style={{width:'35vw',height:500,backgroundColor: '#093853',    
                  overflowY:'-moz-hidden-unscrollable',     
                display:'flex',flexDirection: 'column'}}>
                
                <div style={{width:'100%',height:60,backgroundColor: '#399853',display:'flex',justifyContent:'flex-end'}}>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',
                        flexDirection:'column',
                        alignSelf:'center'}}>
                        <input style={{fontSize:14,color:'#000000',width:'6vw',
                            backgroundColor: 'rgba(0,0,0,0)',
                            borderColor:'rgba(0,0,0,0)'}} value='Requirement'>
                            
                        </input>
                        <RateScoreComponent/>
                    </div>
                </div>
                <div style={{width:'100%',height:8,backgroundColor: '#694575'}}>
                    <text style={{fontSize:1}}>.</text>
                </div>

                <div style={{marginTop: 10,width:'80%',height:35,backgroundColor: '#694575',
                    display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <input style={{fontSize:24,color:'#000000',
                        backgroundColor: 'rgba(0,0,0,0)',
                        borderColor:'rgba(0,0,0,0)'}} value='Requirement analytics'/>
                </div>

                <div style={{display:'flex',flex:1,width:'80%',marginTop:10,
                    backgroundColor: '#358359'}}>
                    <div style={{display:'flex',flex:1,flexDirection:'column',padding: 20,
                        backgroundColor: '#274845'}}>
                            <AttachmentsComponent/>   
                            <LabeledInputComponent label='Link'/>
                            <TaskNotesComponent/>

                            <div style={{marginTop:20,flex:1,display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <div style={{width:'15vw',height:40,borderRadius:10,backgroundColor: '#092358',
                                    display:'flex',justifyContent:'center',alignItems:'center'}}>
                                    <text style={{fontSize:20,color:'#000000'}}>
                                        Add Stage
                                    </text>
                                </div>
                            </div>
                           
                    </div>
                </div>

            </div>


        )
    }
}



