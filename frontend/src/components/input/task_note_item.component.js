//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, BLUE_1, GREEN_1, WHITE, YELLOW_1 } from '../../utils/palette'
import { Range } from 'react-range';
import {connect }from 'react-redux'
import * as actions from '../../redux/action/input.action'

class TaskNoteItemComponent extends Component{
    render(){
        const note=this.props.note;
        const input_field=this.props.input_field
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
                            placeholder={input_field.placeholder}
                            onChange={(e)=>this.props.inputAField({[input_field.key]:e.target.value})}
                            style={{marginLeft:10,width: '60%',height: 45,fontSize:textSizes.SMALL,
                                color:WHITE,
                                outline:'none',backgroundColor:'rgba(0,0,0,0)',borderColor:'rgba(0,0,0,0)'}}
                
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
const mapStateToProps = state => ({
	input_store: state.input_store
});




export default connect(mapStateToProps,actions)(TaskNoteItemComponent)
