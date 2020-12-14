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
            <div style={{width:420,height:525,
                display:'flex',flexDirection: 'column'}}>   

                <div style={{width:'100%',height:60}}/>
                <div style={{marginTop: 5,width:'80%',height:45,backgroundColor: GREEN_1,
                    display:'flex',flexDirection:'row',alignItems:'center',paddingLeft:15}}>

                    <input 
                        style={{
                            fontSize:TEXT_SIZES.NORMAL,color:WHITE,height: 35,
                            backgroundColor: 'rgba(0,0,0,0)',
                            outline:'none',
                            borderColor:'rgba(0,0,0,0)'}}
                        placeholder='Add Title'
                    />
                   
                </div> 

                <div style={{display:'flex',flex:1,width:'80%',
                    backgroundColor: WHITE,overflowY:'scroll',

                    boxShadow:'0px 0px 30px 5px  #707070'}}>

                    <div style={{display:'flex',flex:1,flexDirection:'column',padding: 20}}>
                            
                            
                            {/* <AttachmentsComponent is_edit={true}/> */}

                            <div style={{width:'80%',marginTop:15}}>
                                <LabeledInputComponent 
                                    label='Deadline' 
                                    onChange={(value)=>{}}/>

                                <LabeledInputComponent 
                                    label='Percentage' 
                                    type='number'
                                    onChange={(value)=>{}}/>
                            </div>  
                       
                            <div style={{marginTop:20,width: '100%',paddingBottom:40,
                                display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <ButtonComponent label='Add Stage'/>
                            </div>

                           

                           
                    </div>
                </div>

            </div>


        )
    }
}



