//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK, BLUE_1, GREEN_1, WHITE, YELLOW_1 } from '../../utils/palette'
import { Range } from 'react-range';

export default class TaskNoteItemComponent extends Component{
    render(){
        const note=this.props.note;
        return (
            <div style={{
                    marginTop: 10,width:'100%',height:80,borderRadius:4,
                    backgroundColor: note===undefined?BLUE_1:note.is_me?GREEN_1:YELLOW_1,
                    display:'flex',flexDirection:'row',alignItems:'center'}}>
                {
                    note===undefined?

                    <div style={{width:'100%',display: 'flex',flexDirection: 'row',
                        justifyContent:'space-between'}}>
                        <input 
                            onChange={(e)=>this.props.onChange(e.target.value)}
                            style={{marginLeft:10,width: '60%',height: 45,fontSize:TEXT_SIZES.SMALL,
                                color:WHITE,
                                outline:'none',backgroundColor:'rgba(0,0,0,0)',borderColor:'rgba(0,0,0,0)'}}
                
                            />

                        <div style={{marginLeft:20,marginRight:10,width: 70,height:40,borderRadius:5,backgroundColor:WHITE,
                                display: 'flex',justifyContent: 'center',alignItems:'center' }}>

                            <text style={{fontSize:TEXT_SIZES.SMALL,color:BLUE_1}}>
                                Add
                            </text>
                        </div>
                    </div>
                    :
                    <text style={{fontSize:TEXT_SIZES.SMALL,color:WHITE,marginLeft:10,marginLeft:10}}>
                        {note.is_me?'Me :':'Company : '}{note.content}
                    </text>
                }

                

            </div>
        )
    }
}
