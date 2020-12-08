//import from library 
import React, {Component} from 'react'

import Select from 'react-select';
import { Range } from 'react-range';
import {connect }from 'react-redux'
import * as actions from '../redux/action/input.action'
import { textSizes } from '../utils/constants';
import { BLACK, GRAY_6, WHITE } from '../utils/palette';
import ButtonComponent from '../components/common/button.component';


const colourOptions= [
    { value: {title:'category1'}, label: 'ChocolateLabel' },
    { value: {title:'category2'}, label: 'StrawberryLabel' },
    { value: {title:'category3'}, label: 'VanillaLabel' }
]

const options = {
    baseUrl: 'http://127.0.0.1',
    query: {
      warrior: 'fight'
    }
}
  

   
 class TestLibsScreen extends Component {
    handleChange = selectedOption => {
        alert(selectedOption.value.title);
    };

    state = { range_values: [50] };
    render(){
        return (

            <div style={{width:'100vw',height:'100vh',
                backgroundColor:GRAY_6,overflowX:'hidden',
                display:'flex',flexDirection: 'row'}}>
              
                <i class="fas fa-camera"></i>
                {/* react-select */}
                <div style={{width: 400,height:50}}>
                    <text style={{fontSize:textSizes.NORMAL,color:BLACK}}>react-select</text>
                    <Select
                        onChange={this.handleChange}
                        options={colourOptions}
                    />
                </div>

                <input style={{width:400,height:40,fontSize:textSizes.SMALL,color:BLACK}}
                    onChange={(e)=>this.props.inputAField({some_field:e.target.value})}/>

                {/* react-range */}

                <div style={{width: 400,height:50,marginTop:50}}>
                    <text style={{fontSize:textSizes.NORMAL,color:BLACK}}>react-range</text>
                    <Range
                        step={0.1}   min={0}      max={100}
                        values={this.state.range_values}
                        onChange={(values) => this.setState({ range_values:values })}
                        renderTrack={({ props, children }) => (
                                <div
                                    {...props}
                                    style={{
                                        ...props.style,height: '6px', width: '100%',backgroundColor: '#ccc' }}>
                                    {children}
                                </div>
                        )}
                        renderThumb={({ props }) => (
                                <div
                                    {...props}
                                    style={{
                                        ...props.style,height: '42px',width: '42px',backgroundColor: '#999' }}/>
                        )}
                    />
                </div>

                {/* fontawesome icon  */}

                

            </div>
            
        )
    }
}

const mapStateToProps = state => ({
	input_store: state.input_store
});




export default connect(mapStateToProps,actions)(TestLibsScreen)
