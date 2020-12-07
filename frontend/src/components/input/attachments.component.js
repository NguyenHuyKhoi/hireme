//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, BLUE_1, GRAY_2, GRAY_5, WHITE } from '../../utils/palette'
import ButtonComponent from '../common/button.component'

class NormalFile extends Component{
    render(){
        return(
            <div style={{marginRight:10,marginTop: 7,width:'9vw',height:70,borderRadius:8,
                backgroundColor: GRAY_5,
                flexDirection: 'column',
                display:'flex',justifyContent: 'center'}}>
            <text style={{marginLeft:15,fontSize:textSizes.NORMAL,color:BLACK}}>
                CV file
            </text>

            <text style={{marginLeft:15,fontSize:textSizes.SMALL,color:GRAY_2}}>
                pdf
            </text>
            </div>
                        
        )
    }
}

class NewFile extends Component{
    render(){
        return(
            <div style={{marginRight:10,marginTop: 7,width:'9vw',height:70,borderRadius:8,
                backgroundColor: BLUE_1,
                flexDirection: 'column',
                display:'flex',justifyContent: 'center'}}>
            <text style={{marginLeft:15,fontSize:textSizes.NORMAL,color:WHITE}}>
                CV file
            </text>

            <div style={{width:'60%'}}>
                <ButtonComponent label='Choose' color={WHITE} text_color={BLUE_1}/>
            </div>
            </div>
                        
        )
    }
}
export default class AttachmentsComponent extends Component {
    render(){
        const can_upload=this.props.can_upload
        return (
            <div style={{width:'100%',alignSelf: 'baseline',
                display:'flex',flexDirection: 'column'}}>
                <text style={{fontSize:textSizes.BIG,color:BLACK}}>
                    Attachments
                </text>

                <div style={{width:'100%',display:'flex',flexDirection: 'row',alignSelf: 'baseline',
                    flexWrap:'wrap',alignItems: 'flex-start'}}>
                    {
                        can_upload!==undefined?
                        <NewFile/>
                        :
                        null
                    }
                    {
                        [1,2,3,4,5].map((item)=>
                            <NormalFile/>
                        )
                    }
                </div>
                
            </div>

            
        
    
        )
    }
}
