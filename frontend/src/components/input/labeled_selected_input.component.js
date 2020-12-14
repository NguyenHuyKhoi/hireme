//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK } from '../../utils/palette'
import Select from 'react-select';

export default class LabeledSelectedInputComponent extends Component {
    constructor(props){
        super(props);
        let value=this.props.value!==undefined?this.props.value:''
        this.state={
            value:value
        };
        this.props.onChange(value)
    }

    render(){

        const value=this.state.value;
        const label=this.props.label!==undefined?this.props.label:'';
        const hide_label=this.props.hide_label!==undefined?this.props.hide_label:false;


        let domain=this.props.domain.map(item=>{
            return { value:item,label:item}
        });

        let option={value:value,label:value}


        console.log('domain_select',domain)

        return (

            <div style={{display:'flex',width: '100%',flexDirection: 'column'}}>
                {
                    hide_label?
                    null
                    :
                    <text style={{fontSize:TEXT_SIZES.NORMAL,color:BLACK}}>
                        {label}
                    </text>

                }
                
                <div style={{width:'100%',height:30,
                    marginTop:hide_label?0:15,fontSize:TEXT_SIZES.NORMAL}}>
                    <Select
                        style={{fontSize:TEXT_SIZES.SMALL}}
                        value={option}
                        onChange={(option)=>{
                            this.setState({value:option.value});
                            console.log('selected_input',option.value)
                            this.props.onChange(option.value)
                        }}
                        options={domain}
                        />
                </div>

               
                
              
            </div>
        )
    }
}


