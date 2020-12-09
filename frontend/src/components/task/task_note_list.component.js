//import from library 
import React, {Component} from 'react'
import { inputField } from '../../redux/constant/input.constant'
import { textSizes } from '../../utils/constants'
import { BLACK, BLUE_1, GREEN_1, WHITE, YELLOW_1 } from '../../utils/palette'
import TaskNoteItemComponent from '../input/task_note_item.component'
const notes=[
    {
        is_me:true,
        content:'Please zoom in the picture, i can see...'
    },
    {
        is_me:true,
        content:'Ok, i will do it now, waiting!'
    },
    {
        is_me:false,
        content:'Hurry up if you don\'t want to over deadline,want to over deadline,want to over deadline, we don\'t have much time'
    },
    {
        is_me:true,
        content:'I\ll complete this task on tonight'
    },
    {
        is_me:false,
        content:'Thanks for working with me!!!'
    },
    
]



export default class TaskNoteListComponent extends Component {
    render(){
        return (
            <div style={{width:'100%',alignSelf: 'baseline',
                display:'flex',flexDirection: 'column'}}>
                <text style={{fontSize:textSizes.NORMAL,color:BLACK}}>
                    Notes:
                </text>

                <div style={{width:'100%',display:'flex',flexDirection: 'column'}}>
                    <TaskNoteItemComponent input_field={inputField.NOTE}/>
                    {
                        notes.map((item,index)=>
                            <TaskNoteItemComponent note={item} key={''+index}/>
                        )
                    }
                </div>
                
            </div>

            
        
    
        )
    }
}
