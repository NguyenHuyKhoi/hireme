//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK, BLUE_1, GRAY_2, GRAY_3, WHITE } from '../../utils/palette'
import LabeledSelectedInputComponent from '../input/labeled_selected_input.component'
export default class HeaderListComponent extends Component {
    render(){
     
        const height =this.props.height!==undefined?this.props.height:60;
        console.log('height_list :',height)
        const filter=this.props.filter!==undefined?this.props.filter:null

        console.log('filter :',filter)
        return (
            <div style={{
                width:'100%',
                height:height,
                display:'flex',flexDirection: 'row',
                alignItems:'center',
                backgroundColor: BLUE_1,justifyContent: 'space-between'}}>

                <text style={{fontSize:TEXT_SIZES.BIG,color:WHITE,marginLeft:20}}>
                    {this.props.title}
                </text>

                {
                    filter!==null?
                    <div style={{width:'20%',height:'100%',marginRight: 30}}>
                        <LabeledSelectedInputComponent 
                            hide_label={true}/>
                    </div>
                   
                    :
                    null
                }
                
            </div>
                     
    
        )
    }
}
