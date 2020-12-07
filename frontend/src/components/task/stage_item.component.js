//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../common/button.component'
import LabeledInputComponent from '../input/labeled_input.component'
import RateScoreComponent from '../common/rate_score.component'
import UploadFilesComponent from '../common/upload_files.component'
import AttachmentsComponent from './attachments.component'
import TaskAttachmentsComponent from './attachments.component'
import TaskNotesComponent from './task_notes.component'
import { BLACK, BLUE_1, GREEN_1, WHITE } from '../../utils/palette'
import { textSizes } from '../../utils/constants'
import SmallFieldComponent from '../common/small_field.component'
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
        return (
            <div style={{width: '100%',height: 50,display:'flex',flexDirection:'column'}}>

                <div style={{width:'100%',flex:1,display:'flex',justifyContent:'flex-end'}}>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',
                        flexDirection:'column',
                        alignSelf:'baseline'}}>

                        <input 
                            style={{fontSize:textSizes.SMALL,color:BLACK,width:'6vw',
                            backgroundColor: 'rgba(0,0,0,0)',
                            outline:'none',
                            borderColor:'rgba(0,0,0,0)'
                            }} 
                            value='17/02/2020'>
                            
                        </input>
                        <SmallFieldComponent  label={'20%'} label_color={WHITE}
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
        return (
            <div style={{width:'32vw',height:525,
                display:'flex',flexDirection: 'column'}}>
              
                <TimeLine/>

                <div style={{marginTop: 5,width:'80%',height:45,backgroundColor: GREEN_1,
                    display:'flex',flexDirection:'row',alignItems:'center',paddingLeft:15}}>

                    <input 
                        disabled={false}
                        style={{
                            fontSize:textSizes.NORMAL,color:WHITE,height: 35,
                            backgroundColor: 'rgba(0,0,0,0)',
                            outline:'none',
                            borderColor:'rgba(0,0,0,0)'}} 
                        value='Requirement analytics'/>

                    {
                        stage===undefined?
                        <input 
                            disabled={false}
                            style={{
                                fontSize:textSizes.NORMAL,color:WHITE,height: 35,width: 40,
                                backgroundColor: 'rgba(0,0,0,0)',
                                outline:'none',
                                borderColor:'rgba(0,0,0,0)'}} 
                            value='20%'/>
                        :
                        null

                    }
                   
                </div>

                <div style={{display:'flex',flex:1,width:'80%',
                    backgroundColor: WHITE,overflowY:'scroll',

                    boxShadow:'0px 0px 30px 5px  #707070'}}>

                    <div style={{display:'flex',flex:1,flexDirection:'column',padding: 20}}>
                            
                            
                            <AttachmentsComponent can_upload={true}/>

                            <div style={{width:'80%',marginTop:15}}>
                                <LabeledInputComponent label='Link'/>
                            </div>  

                            <div style={{width:'100%',marginTop:15,
                                paddingBottom:stage!==undefined?40:0}}>
                                <TaskNotesComponent/>
                            </div>   
                           
                       
                            {
                                stage===undefined?
                                <div style={{marginTop:20,width: '100%',paddingBottom:40,
                                    display:'flex',justifyContent:'center',alignItems:'center'}}>
                                    <ButtonComponent label='Add Stage'/>
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



