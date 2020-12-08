//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, BLUE_1, WHITE } from '../../utils/palette'
import { Range } from 'react-range';

export default class NumberInputComponent extends Component {

    state={ranges:[10]}
    render(){
        const unit=this.props.unit===undefined?'$':this.props.unit
        return (
            <div style={{display:'flex',width: '100%',flexDirection: 'column'}}>
                <text style={{fontSize:textSizes.NORMAL,color:BLACK,marginBottom:10}}>
                    {this.props.label===undefined?'No Label':this.props.label}
                </text>
                
                <div style={{width: '100%',display:'flex',flexDirection:'row',justifyContent:'center',marginBottom:20}}>
                    <text style={{fontSize:textSizes.SMALL,color:WHITE,padding: 7,
                        backgroundColor:BLACK,borderRadius:5}}>
                            {
                                this.state.ranges[0]+' '+unit
                            }
                    </text>
                </div>
                {/* <div style={{marginTop:15,width:'80%',height:5,backgroundColor: '#392583'}}> */}
                    <Range
                        step={1}   min={0}      max={100}
                        values={this.state.ranges}
                        onChange={(values) => this.setState({ ranges:values })}
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