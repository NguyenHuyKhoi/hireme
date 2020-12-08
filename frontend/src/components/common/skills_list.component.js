//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, BLUE_1, BLUE_2 } from '../../utils/palette'
const skills=['HTML5','Android','CSS','Bootstrap']
export default class SkillsListComponent extends Component {
    render(){
        return (
            <div style={{width:'100%',display:'flex',flexDirection: 'column',
                alignSelf: 'baseline'}}>

                {
                    this.props.hide_title!==undefined?
                    null
                    :
                    <text style={{fontSize:textSizes.BIG,color:BLACK}}>
                        Skills 
                    </text>
                }
             
                <div style={{marginTop:8,width:'100%',alignSelf: 'baseline',display:'flex',
                flexDirection: 'row',flexWrap:'wrap',alignItems: 'flex-start'}}>
                {
                    skills.map((item,index)=>
                        <div 
                            key={''+index}
                            style={{display:'flex',marginRight:10,marginTop:7,
                            justifyContent: 'center',alignItems: 'center',
                            borderRadius:5,backgroundColor: BLUE_2,padding: 7}}>
                            <text style={{fontSize:textSizes,color:BLUE_1}}>
                                {item} 
                            </text>
                        </div>
                        )
                }
                </div>

            </div>
        )
    }
}