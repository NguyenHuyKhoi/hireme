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
            <div style={styles.container}>

                {
                    this.props.hide_title!==undefined?
                    null
                    :
                    <text style={styles.title}>
                        Skills 
                    </text>
                }
             
                <div style={{...styles.body,marginTop:hide_title?0:7}}>
                {
                    skills.map((item,index)=>
                        <div 
                            key={''+index}
                            style={styles.item_container}>
                            <text style={styles.item_name}>
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

const styles={
    container:{
        width:'100%',
        display:'flex',
        flexDirection: 'column'
    },
    title:{
        fontSize:TEXT_SIZES.BIG,
        color:BLACK
    },
    body:{
        width:'100%',
        alignSelf: 'baseline',
        display:'flex',
        flexDirection: 'row',
        flexWrap:'wrap',
        alignItems: 'flex-start'
    },
    item_container:{
        display:'flex',
        marginRight:6,
        marginBottom:5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:3,
        backgroundColor: BLUE_2,
        padding: 5
    },
    item_name:{
        fontSize:TEXT_SIZES,
        color:BLUE_1
    }
}
