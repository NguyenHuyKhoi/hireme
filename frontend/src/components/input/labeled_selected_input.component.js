//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK } from '../../utils/palette'
import Select from 'react-select';
const options=[
    {
        value:{
            code:'category1',

        },
        label:'Category1'
    },
    {
        value:{
            code:'category2',

        },
        label:'Category2'
    },
    {
        value:{
            code:'category3',

        },
        label:'Category3'
    },
    {
        value:{
            code:'category4',

        },
        label:'Category4'
    },
]
export default class LabeledSelectedInputComponent extends Component {
    render(){
        return (

            <div style={{display:'flex',width: '100%',flexDirection: 'column'}}>
                <text style={{fontSize:textSizes.NORMAL,color:BLACK}}>
                    {this.props.label}
                </text>

                <div style={{width:'100%',height:30,marginTop:15,fontSize:textSizes.NORMAL}}>
                    <Select
                        defaultValue={options[0]}
                        onChange={this.handleChange}
                        options={options}
                        />
                </div>

               
                
              
            </div>
        )
    }
}