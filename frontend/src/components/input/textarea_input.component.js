//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK, GRAY_1, GRAY_2, GRAY_3, WHITE } from '../../utils/palette'


export default  class TextareaInputComponent extends Component {
    render(){
        const label=this.props.label!==undefined?this.props.label:'';
        const hide_label=this.props.hide_label!==undefined?this.props.hide_label:false
        const value=this.props.value!==undefined?this.props.value:''
        return (
            <div style={{display:'flex',width:'100%',height:240,alignSelf:'baseline',
                flexDirection: 'column'}}>
                {
                    hide_label?
                    null
                    :
                    <text style={{fontSize:TEXT_SIZES.NORMAL,color:BLACK}}>
                        {label}
                    </text> 
                }
               
                <textarea 
                    value={value}
                    onChange={e=>this.props.onChange(e.target.value)}
                    style={{
                        marginTop:20,flex:1,padding:10,backgroundColor: WHITE,
                        fontSize:TEXT_SIZES.NORMAL,
                        borderColor:GRAY_3,borderWidth:2,borderRadius:10}}
                        color={GRAY_2}/>
            </div>
        )
    }
}

