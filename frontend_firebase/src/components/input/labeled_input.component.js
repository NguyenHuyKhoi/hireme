//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK } from '../../utils/palette'

import { convertFullDateToOnlyDay } from '../../utils/helper'

export default class LabeledInputComponent extends Component {
    constructor(props){
        super(props);

        let value=this.props.value!==undefined?this.props.value:''
        this.state={
            value:value
        };
       // this.props.onChange(value);
    }

    // componentDidMount=()=>{
    //     this.props.onChange(this.state.value)
    // }
    
    
    render(){
        const value=this.state.value;

        const type=this.props.type!==undefined?this.props.type:'text';
        const step=this.props.step!==undefined?this.props.step:1;
        const hide_label=this.props.hide_label!==undefined?this.props.hide_label:false;
        const size=this.props.size!==undefined?this.props.size:TEXT_SIZES.NORMAL;
        const disabled=this.props.disabled!==undefined?this.props.disabled:false;
        const inline=this.props.inline!==undefined?this.props.inline:false;
        const label=this.props.label!==undefined?this.props.label:''
        const placeholder=this.props.placeholder!==undefined?this.props.placeholder:''
      
        return (

            <div style={{...styles.container,
                    flexDirection: inline?'row':'column'}}>
                {
                    hide_label?
                    null
                    :
                    <div style={{flex:1}}>
                
                        <text style={{...styles.label,fontSize:size}}>
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
                    onChange={e=>{
                        this.setState({value:e.target.value})
                        this.props.onChange(e.target.value)
                    }}
                    step={step}
                    style={{
                        ...styles.input,
                        fontSize: size,
                        height: size===TEXT_SIZES.NORMAL?30:25,
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

const styles={
    container:{
        display:'flex',
        width: '100%'
    },
    label:{
        color:BLACK
    },
    input:{
        width:'100%',
    }
}
