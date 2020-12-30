//import from library 
import React, {Component} from 'react'

import { TEXT_SIZES } from '../../utils/constants'
import { BLACK, BLUE_1, GREEN_1, WHITE, YELLOW_1 } from '../../utils/palette'
import TaskNoteItemComponent from '../input/task_note_item.component'



export default class TaskNoteListComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            notes:this.props.notes
        }
    }
    addNote=(value)=>{
        let arr=this.state.notes;
        arr.push(value);
        this.setState({
            notes:arr
        })
        this.props.onChange(arr)
    }

    render(){
        const notes=this.state.notes;
        const disabled=this.props.disabled!==undefined?this.props.disabled:true;
        console.log('notes:',notes);
        return (
            <div style={styles.container}>
                <text style={styles.title}>
                    Ghi chú:
                </text>

                <div style={styles.body}>
                    {
                        disabled?
                        null
                        :
                         <TaskNoteItemComponent addNote={this.addNote}/>
                    }
                    {
                        notes.length===0?
                        <text style={{fontSize: TEXT_SIZES.SMALL,color:BLACK,textAlign:'center',margin:10}}>
                            Hiện freelancer chưa thêm ghi chú nào!
                        </text>
                        :
                        null
                    }
                    {
                        notes.map((item,index)=>
                            <TaskNoteItemComponent 
                                addNote={(value)=>{}}
                                note={item} key={''+index}/>
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
