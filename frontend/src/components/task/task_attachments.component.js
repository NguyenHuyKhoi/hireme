//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, BLUE_1, WHITE } from '../../utils/palette'

export default class TaskAttachmentsComponent extends Component {
    render(){
        return (
            <div style={{width:'100%',alignSelf: 'baseline',
                display:'flex',flexDirection: 'column'}}>
                <text style={{fontSize:textSizes.BIG,color:BLACK}}>
                    Attachments
                </text>

                <div style={{width:'100%',display:'flex',flexDirection: 'row',alignSelf: 'baseline',
                    flexWrap:'wrap',alignItems: 'flex-start'}}>
                    {
                        [1,2,3,4,5].map((item)=>
                            <div style={{marginRight:10,marginTop: 7,width:'9vw',height:70,borderRadius:8,
                                backgroundColor: BLUE_1,
                                flexDirection: 'column',
                                display:'flex',justifyContent: 'center'}}>
                            <text style={{marginLeft:15,fontSize:textSizes.NORMAL,color:WHITE}}>
                                CV file
                            </text>

                            <text style={{marginLeft:15,fontSize:textSizes.SMALL,color:WHITE}}>
                                pdf
                            </text>
                            </div>
                        )
                    }
                </div>
                
            </div>

            
        
    
        )
    }
}
