//import from library 
import React, {Component} from 'react'
import { bullshitIcons, TEXT_SIZES } from '../../utils/constants'
import { BLACK } from '../../utils/palette'
import {IconContext} from 'react-icons'
export default class SingleFieldComponent extends Component {
    render(){
        const field=this.props.field;
        return (
            <div style={styles.container}>

            <text style={styles.title}>
                {field.key} 
            </text>

            <div style={styles.body}>
                {/* <IconContext.Provider value={{color:BLACK,style:{width: 30,height: 30}}}>
                    <div>
                        {bullshitIcons.home}
                    </div>
                </IconContext.Provider> */}

                <text style={styles.value}>
                        {field.value} 
                </text>
                

            </div>
            
           
        </div> 
        )
    }
}

const styles={
    container:{
        width:'100%',
        display:'flex',
        flexDirection: 'column',
        alignSelf: 'baseline'
    },
    title:{
        fontSize:TEXT_SIZES.BIG,
        color:BLACK
    },
    body:{
        marginTop:3,
        width: '100%',
        display: 'flex',
        flexDirection:'row', 
        alignItems: 'center'
    },
    value:{
        marginLeft:5,
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK
    }
}

