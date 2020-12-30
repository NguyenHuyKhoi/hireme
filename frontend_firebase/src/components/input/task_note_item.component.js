//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK, BLUE_1, GREEN_1, WHITE, YELLOW_1 } from '../../utils/palette'
import { Range } from 'react-range';

export default class TaskNoteItemComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            new_note:''
        }
    }
    render(){
        const note=this.props.note;
        const new_note=this.state.new_note
        return (
            
            <div style={{...styles.container,
                backgroundColor: note===undefined?BLUE_1:note.is_me?GREEN_1:YELLOW_1,}}>
                {
                    note===undefined?

                    <div style={styles.input_container}>
                        <textarea 
                            value={new_note}
                            onChange={(e)=>this.setState({
                                new_note:e.target.value
                            })}
                            style={styles.input}/>

                        <div 
                            onClick={()=>{
                                if (this.state.new_note===''){
                                    alert('Hãy điền ghi chú gì đó để them.')
                                }
                                else{
                                    this.props.addNote(this.state.new_note)
                                    this.setState({
                                        new_note:''
                                    });
                                }
                                
                            }}
                            style={styles.btn_add}>

                            <text style={styles.btn_label}>
                                Thêm
                            </text>
                        </div>
                    </div>
                    :
                    <text style={styles.note_content}>
                        {note}
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
        height:60,
        borderRadius:4,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    input_container:{
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    input:{
        marginLeft:5,
        flex:1,
        display: 'flex',
        height: 50,
        fontSize:TEXT_SIZES.SMALL,
        color:WHITE,
        overflowY: 'hidden',
        outline:'none',
        backgroundColor:'rgba(0,0,0,0)',
        borderColor:'rgba(0,0,0,0)'
    },
    btn_add:{
        marginLeft:10,
        marginRight:5,
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
