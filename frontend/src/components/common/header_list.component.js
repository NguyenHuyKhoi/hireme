//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, BLUE_1, GRAY_2, GRAY_3, WHITE } from '../../utils/palette'

export default class HeaderListComponent extends Component {
    render(){
        return (
            <div style={{width:'100%',height:60,display:'flex',flexDirection: 'row',
                backgroundColor: BLUE_1,
                alignItems: 'center',justifyContent: 'space-between'}}>

                <text style={{fontSize:textSizes.BIG,color:WHITE,marginLeft:20}}>
                    {this.props.title}
                </text>

                {
                    this.props.is_sort!==undefined?
                    <div style={{display:'flex',flexDirection: 'row',marginRight:20}}>
                        <text style={{fontSize:16,color:GRAY_3}}>
                            Sort By: 
                        </text>

                        <text style={{marginLeft:20,fontSize:16,color:GRAY_3}}>
                            Newest
                        </text>
                    </div>
                    :
                    null
                }
                
            </div>
                     
    
        )
    }
}
