//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, BLUE_1, WHITE } from '../../utils/palette'
import { Range } from 'react-range';
import {connect }from 'react-redux'
import * as actions from '../../redux/action/input.action'

class RangeInputComponent extends Component {


    render(){
        const input_field=this.props.input_field;
        console.log('input_field_key:',input_field.key)
        const inputInStore=this.props.input_store[input_field.key];
        return (
            <div style={{display:'flex',width: '100%',flexDirection: 'column'}}>
                <text style={{fontSize:textSizes.NORMAL,color:BLACK,marginBottom:10}}>
                    {input_field.label}
                </text>
                
                <div style={{width: '100%',display:'flex',flexDirection:'row',justifyContent:'center',marginBottom:20}}>
                    <text style={{fontSize:textSizes.SMALL,color:WHITE,padding: 7,
                        backgroundColor:BLACK,borderRadius:5}}>
                            {
                                inputInStore!==undefined?
                                inputInStore[0]+' '+input_field.unit+' - '+inputInStore[1]+' '+input_field.unit
                                :
                               ''
                            }
                    </text>
                </div>
                {/* <div style={{marginTop:15,width:'80%',height:5,backgroundColor: '#392583'}}> */}
                    <Range
                        step={1}   
                        min={input_field.domain_value[0]}      
                        max={input_field.domain_value[1]}
                        values={inputInStore}
                        onChange={(values) => this.props.inputAField({[input_field.key]:values})}
                        renderTrack={({ props, children }) => (
                                <div
                                    {...props}
                                    style={{
                                        ...props.style,height: 5, width: '100%',backgroundColor: BLUE_1 }}>
                                    {children}
                                </div>
                        )}
                        renderThumb={({ props }) => (
                                <div
                                    {...props}
                                    style={{
                                        ...props.style,
                                        height: 24,width:24,borderRadius:12,
                                        backgroundColor: BLUE_1 }}/>
                        )}
                    />
                {/* </div> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
	input_store: state.input_store
});




export default connect(mapStateToProps,actions)(RangeInputComponent)
