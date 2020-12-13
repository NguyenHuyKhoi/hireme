//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK } from '../../utils/palette'
import Select from 'react-select';

export default class LabeledSelectedInputComponent extends Component {


    render(){
        const label=this.props.label!==undefined?this.props.label:'';
        const hide_label=this.props.hide_label!==undefined?this.props.hide_label:false
        let domain=this.props.domain.map(item=>{
            return { value:item,label:item}
        });
        let value={value:this.props.value,label:this.props.value};

      
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
                        value={value}
                        onChange={(option)=>{
                            this.props.onChange(option)
                        }}
                        options={domain}
                        />
                </div>

               
                
              
            </div>
        )
    }
}


