//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, BLUE_1, GRAY_2, GRAY_3, WHITE } from '../../utils/palette'
import LabeledSelectedInputComponent from '../input/labeled_selected_input.component'
export default class HeaderListComponent extends Component {
    render(){
        const height =this.props.height;
        const filter=this.props.filter
        console.log('Header_filter :',filter)
        return (
            <div style={{width:'100%',
                height:height!==undefined?height:60,
                display:'flex',flexDirection: 'row',
                backgroundColor: BLUE_1,
                alignItems: 'center',justifyContent: 'space-between'}}>

                <text style={{fontSize:textSizes.BIG,color:WHITE,marginLeft:20}}>
                    {this.props.title}
                </text>

                {
                    filter!==undefined?
                    <div style={{width:'20%',marginRight: 30}}>
                        <LabeledSelectedInputComponent 
                            hide_label={true}
                            input_field={filter}/>
                    </div>
                   
                    :
                    null
                }
                
            </div>
                     
    
        )
    }
}
