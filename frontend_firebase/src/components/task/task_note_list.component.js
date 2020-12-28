//import from library 
import React, {Component} from 'react'

import { TEXT_SIZES } from '../../utils/constants'
import { BLACK, BLUE_1, GREEN_1, WHITE, YELLOW_1 } from '../../utils/palette'
import TaskNoteItemComponent from '../input/task_note_item.component'



export default class TaskNoteListComponent extends Component {
    render(){
        const notes=this.props.notes;
        console.log('notes:',notes);
        return (
            <div style={styles.container}>
                <text style={styles.title}>
                    Notes:
                </text>

                <div style={styles.body}>
                    <TaskNoteItemComponent />
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

const styles={
    container:{
        width:'100%',
        alignSelf: 'baseline',
        display:'flex',
        flexDirection: 'column'
    },
    title:{
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK
    },
    body:{
        width:'100%',
        display:'flex',
        flexDirection: 'column'
    }
}
