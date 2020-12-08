//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, BLUE_1, GREEN_1, WHITE, YELLOW } from '../../utils/palette'

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


class NoteItem extends Component{
    render(){
        const note=this.props.note;
        return (
            <div style={{
                    marginTop: 10,width:'100%',height:80,borderRadius:4,
                    backgroundColor: note===undefined?BLUE_1:note.is_me?GREEN_1:YELLOW,
                    display:'flex',flexDirection:'row',alignItems:'center'}}>
                {
                    note===undefined?

                    <div style={{width:'100%',display: 'flex',flexDirection: 'row',
                        justifyContent:'space-between'}}>
                        <input 

                            style={{marginLeft:10,width: '60%',height: 45,fontSize:textSizes.SMALL,
                                color:WHITE,
                                outline:'none',backgroundColor:'rgba(0,0,0,0)',borderColor:'rgba(0,0,0,0)'}}
                            placeholder='Add a note'
                            />

                        <div style={{marginLeft:20,marginRight:10,width: 70,height:40,borderRadius:5,backgroundColor:WHITE,
                                display: 'flex',justifyContent: 'center',alignItems:'center' }}>

                            <text style={{fontSize:textSizes.SMALL,color:BLUE_1}}>
                                Add
                            </text>
                        </div>
                    </div>
                    :
                    <text style={{fontSize:textSizes.SMALL,color:WHITE,marginLeft:10,marginLeft:10}}>
                        {note.is_me?'Me :':'Company : '}{note.content}
                    </text>
                }

                

            </div>
        )
    }
}
export default class TaskNotesComponent extends Component {
    render(){
        return (
            <div style={{width:'100%',alignSelf: 'baseline',
                display:'flex',flexDirection: 'column'}}>
                <text style={{fontSize:textSizes.NORMAL,color:BLACK}}>
                    Notes:
                </text>

                <div style={{width:'100%',display:'flex',flexDirection: 'column'}}>
                    <NoteItem/>
                    {
                        notes.map((item,index)=>
                            <NoteItem note={item} key={''+index}/>
                        )
                    }
                </div>
                
            </div>

            
        
    
        )
    }
}
