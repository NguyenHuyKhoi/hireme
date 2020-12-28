//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK, BLUE_1, GREEN_1, WHITE, YELLOW_1 } from '../../utils/palette'
import { Range } from 'react-range';

export default class TaskNoteItemComponent extends Component{
    render(){
        const note=this.props.note;
        return (
            
            <div style={{...styles.container,
                backgroundColor: note===undefined?BLUE_1:note.is_me?GREEN_1:YELLOW_1,}}>
                {
                    note===undefined?

                    <div style={styles.input_container}>
                        <input 
                            onChange={(e)=>this.props.onChange(e.target.value)}
                            style={styles.input}/>

                        <div style={styles.btn_add}>

                            <text style={styles.btn_label}>
                                Thêm
                            </text>
                        </div>
                    </div>
                    :
                    <text style={styles.note_content}>
                        {note.send_by_me?'Me :':'Partner : '}{note.content}
                    </text>
                }

                

            </div>
        )
    }
}

const styles={
    container:{
        marginTop: 10,
        width:'100%',
        height:80,
        borderRadius:4,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    input_container:{
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    input:{
        marginLeft:10,
        width: '60%',
        height: 45,
        fontSize:TEXT_SIZES.SMALL,
        color:WHITE,
        outline:'none',
        backgroundColor:'rgba(0,0,0,0)',
        borderColor:'rgba(0,0,0,0)'
    },
    btn_add:{
        marginLeft:20,
        marginRight:10,
        width: 70,
        height:40,
        borderRadius:5,
        backgroundColor:WHITE,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center' 
    },
    btn_label:{
        fontSize:TEXT_SIZES.SMALL,
        color:BLUE_1
    },
    note_content:{
        fontSize:TEXT_SIZES.SMALL,
        color:WHITE,
        marginLeft:10,
        marginLeft:10
    }
}
