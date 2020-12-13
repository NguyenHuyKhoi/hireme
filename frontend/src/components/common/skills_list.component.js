//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK, BLUE_1, BLUE_2 } from '../../utils/palette'
const skills=['HTML5','Android','CSS','Bootstrap']
export default class SkillsListComponent extends Component {
    render(){
        const skills=this.props.skills
        const hide_title=this.props.hide_title!==undefined?this.props.hide_title:false
        return (
            <div style={{width:'100%',display:'flex',flexDirection: 'column'}}>

                {
                    this.props.hide_title!==undefined?
                    null
                    :
                    <text style={{fontSize:TEXT_SIZES.BIG,color:BLACK}}>
                        Skills 
                    </text>
                }
             
                <div style={{marginTop:hide_title?0:7,width:'100%',alignSelf: 'baseline',display:'flex',
                flexDirection: 'row',flexWrap:'wrap',alignItems: 'flex-start'}}>
                {
                    skills.slice(0,7).map((item,index)=>
                        <div 
                            key={''+index}
                            style={{display:'flex',marginRight:6,marginBottom:5,
                            justifyContent: 'center',alignItems: 'center',
                            borderRadius:3,backgroundColor: BLUE_2,padding: 5}}>
                            <text style={{fontSize:TEXT_SIZES,color:BLUE_1}}>
                                {item.name} 
                            </text>
                        </div>
                        )
                }
                </div>

            </div>
        )
    }
}