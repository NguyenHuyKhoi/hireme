//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK, BLUE_1, WHITE } from '../../utils/palette'
import { Range } from 'react-range';

export default class NumberInputComponent extends Component {

    render(){

        const domain=this.props.domain;
        const value=this.props.value;
        const unit=this.props.unit!==undefined?this.props.unit:'$';
        const label=this.props.label;
        return (
            <div style={{display:'flex',width: '100%',flexDirection: 'column'}}>
                <text style={{fontSize:TEXT_SIZES.NORMAL,color:BLACK,marginBottom:10}}>
                    {label}
                </text>
                
                <div style={{width: '100%',display:'flex',flexDirection:'row',justifyContent:'center',marginBottom:20}}>
                
                    <text style={{fontSize:TEXT_SIZES.SMALL,color:WHITE,padding: 7,
                        backgroundColor:BLACK,borderRadius:5}}>
                            {
                                value+ ' '+unit
                            }

                    </text>

                </div>
                {/* <div style={{marginTop:15,width:'80%',height:5,backgroundColor: '#392583'}}> */}
                    <Range
                        step={1}   
                        min={domain[0]}      
                        max={domain[1]}
                        values={value}
                        onChange={(values) => this.props.onChange(values)}
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
