//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK, GRAY_1, WHITE } from '../../utils/palette'

export default class InforsBarComponent extends Component {
    render(){
        const fields=this.props.fields;
        return (
            <div style={styles.container}>
                {
                   fields.map((item,index)=>
                   <div 
                        key={''+index}
                        style={styles.item_container}>
                       <text style={styles.item_value}>
                           {item.value}
                       </text>
                       <text style={styles.item_key}>
                           {item.key}
                       </text>
                   </div>
               ) 
                }
            </div>
      
        )
    }
}

const styles ={
    container :{
        width:'100%',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    item_container:{
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    item_value:{
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK
    },
    item_key:{
        fontSize:TEXT_SIZES.SMALL,
        color:GRAY_1,
        textAlign:'center'
    }
}
