//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, BLUE_1, GRAY_2, GRAY_3, GRAY_5, RED_1, WHITE } from '../../utils/palette'
import ButtonComponent from '../common/button.component'

class NormalFile extends Component{
    render(){
        return(
            <div style={{marginRight:15,marginTop: 10,width:'9vw',height:80,borderRadius:8,
                backgroundColor: GRAY_3,
                flexDirection: 'column',
                display:'flex',justifyContent: 'center'}}>
            <text style={{marginLeft:15,fontSize:textSizes.NORMAL,color:BLACK}}>
                CV file
            </text>

            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',
                width: '80%',marginLeft:15}}>
                <text style={{fontSize:textSizes.SMALL,color:GRAY_2}}>
                    pdf
                </text>
                <text style={{fontSize:textSizes.SMALL,color:RED_1}}>
                    Delete
                </text>
            </div>
           
            </div>
                        
        )
    }
}

class NewFile extends Component{
    render(){
        return(
            <div style={{marginRight:15,marginTop: 10,width:'9vw',height:80,borderRadius:8,
                backgroundColor: BLUE_1,
                flexDirection: 'column',
                display:'flex',justifyContent: 'center'}}>
            <text style={{marginLeft:10,fontSize:textSizes.NORMAL,color:WHITE}}>
                Upload
            </text>
            <div style={{marginLeft:10,width:'80%',marginTop:5}}>
                <ButtonComponent label='Choose' color={WHITE} text_color={BLUE_1} height={35}/>
            </div>
            </div>
                        
        )
    }
}
export default class AttachmentsComponent extends Component {
    render(){
        const is_edit=this.props.is_edit
        return (
            <div style={{width:'100%',alignSelf: 'baseline',
                display:'flex',flexDirection: 'column'}}>
                <text style={{fontSize:textSizes.NORMAL,color:BLACK}}>
                    Attachments
                </text>

                <div style={{width:'100%',display:'flex',flexDirection: 'row',alignSelf: 'baseline',
                    flexWrap:'wrap',alignItems: 'flex-start',justifyContent:'space-between '}}>
                    {
                        is_edit!==undefined?
                        <NewFile/>
                        :
                        null
                    }
                    {
                        [1,2,3,4,5].map((item,index)=>
                            <NormalFile key={''+index}/>
                        )
                    }
                </div>
                
            </div>

            
        
    
        )
    }
}
