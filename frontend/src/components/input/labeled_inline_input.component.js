//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, GRAY_2 } from '../../utils/palette'

import {connect }from 'react-redux'
import * as actions from '../../redux/action/input.action'
class LabeledInlineInputComponent extends Component {
    render(){
        const input_field=this.props.input_field;
        console.log('input_field of LabelInlineInputComponent:',input_field)
        console.log('input_store:',this.props.input_store)
        return (
            <div style={{display: 'flex',flex:1,flexDirection: 'row',alignItems: 'center'}}>
                <text style={{fontSize: this.props.size,color:BLACK,width:85}}>
                    {input_field.label}
                </text>

                <input 
                    style={{
                        fontSize: this.props.size,color:GRAY_2,
                        width: 10*this.props.size,background:'rgba(0,0,0,0)',padding:4,
                        border: this.props.disabled?'none':'default',
                        borderWidth:1,borderColor:GRAY_2}}
                    value={this.props.value}
                    type={this.props.type!==undefined?this.props.type:'text'}
                    onChange={e=>this.props.inputAField({[input_field.key]:e.target.value})}
                    disabled={this.props.disabled}>
                </input>
            </div>
        )
    }
}

const mapStateToProps = state => ({
	input_store: state.input_store
});




export default connect(mapStateToProps,actions)(LabeledInlineInputComponent)
