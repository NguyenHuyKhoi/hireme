//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK } from '../../utils/palette'

import { convertFullDateToOnlyDay } from '../../utils/helper'

export default class LabeledInputComponent extends Component {
    render(){
        const value=this.props.value!==undefined?this.props.value:'';
        const type=this.props.type!==undefined?this.props.type:'text';
        const hide_label=this.props.hide_label!==undefined?this.props.hide_label:false;
        const size=this.props.size!==undefined?this.props.size:TEXT_SIZES.NORMAL;
        const disabled=this.props.disabled!==undefined?this.props.disabled:false;
        const inline=this.props.inline!==undefined?this.props.inline:false;
        const label=this.props.label!==undefined?this.props.label:''
        const placeholder=this.props.placeholder!==undefined?this.props.placeholder:''
        return (

            <div style={{display:'flex',width: '100%',
                flexDirection: inline?'row':'column'}}>
                {
                    hide_label?
                    null
                    :
                    <div style={{flex:1}}>
                
                        <text style={{
                            fontSize:size,color:BLACK}}>
                            {label}
                        </text>
                    </div>
                
                }
              
                <div style={{flex:3}}>
                <input 
                    value={type==='date' 
                            ?
                            convertFullDateToOnlyDay(value)
                            :
                            value
                    }
                    disabled={disabled}
                    type={type}
                    placeholder={placeholder}
                    onChange={e=>this.props.onChange(e.target.value)}
                    style={{
                        width:'100%',height: size===TEXT_SIZES.NORMAL?30:25,
                        fontSize:size,
                        marginTop:inline?0:15,
                        marginLeft:inline?15:0,
                        border:disabled?'none':'default',
                        outline:disabled?'none':'default'
                    }}
                    />
                </div>
            
            </div>
        )
    }
}