//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK } from '../../utils/palette'

import { convertFullDateToOnlyDay } from '../../utils/helper'

export default class DateInputComponent extends Component {
    constructor(props){
        super(props);

        this.state={
            value:new Date()
        };
       // this.props.onChange(value);
    }

    // componentDidMount=()=>{
    //     this.props.onChange(this.state.value)
    // }
    
    
    render(){
        const value=this.state.value;

        const hide_label=this.props.hide_label!==undefined?this.props.hide_label:false;
        const disabled=this.props.disabled!==undefined?this.props.disabled:false;
        const inline=this.props.inline!==undefined?this.props.inline:false;
        const label=this.props.label!==undefined?this.props.label:''
      
        const max_date=this.props.max_date!==undefined?
            convertFullDateToOnlyDay(this.props.max_date)
            :
            convertFullDateToOnlyDay((new Date()).toISOString())

        const min_date=this.props.min_date!==undefined?
            convertFullDateToOnlyDay(this.props.min_date)
            :
            convertFullDateToOnlyDay((new Date()).toISOString())
        return (

            <div style={{...styles.container,
                    flexDirection: inline?'row':'column'}}>
                {
                    hide_label?
                    null
                    :
                    <div style={{flex:1}}>
                
                        <text style={{...styles.label}}>
                            {label}
                        </text>
                    </div>
                
                }
              
                <div style={{flex:3}}>
                <input 
                    value={value}
                    type='date'
                    disabled={disabled}
                    onChange={e=>{
                        this.setState({value:e.target.value})
                        this.props.onChange(e.target.value)
                    }}
                    max={max_date}
                    min={min_date}
                    style={{
                        ...styles.input,
                        fontSize: TEXT_SIZES.NORMAL,
                        height: 30,
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
        color:BLACK,
        fontSize: TEXT_SIZES.NORMAL
    },
    input:{
        width:'100%',
    }
}
