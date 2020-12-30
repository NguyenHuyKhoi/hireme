//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK, GRAY_1, WHITE } from '../../utils/palette'

export default class DescriptionComponent extends Component {
    render(){
            
        console.log('Description content',this.props.content)
        console.log('Description content',this.props.content.split('\\n'))
        return (
            <div style={styles.container}>
                <text style={styles.title}>
                    {this.props.title}
                </text>


                {/* <text style={styles.content}>
                    <textarea>
                     {this.props.content}
                    </textarea>
                
                
                </text> */}

                <textarea 
                    disabled={true}
                    style={styles.content}>
                     {this.props.content}
                    </textarea>



            </div>

      
        )
    }
}

const styles={
    container:{
        flex:1,
        alignSelf: 'baseline',
        display:'flex',
        flexDirection: 'column'
    },
    title:{
        fontSize:TEXT_SIZES.BIG,
        color:BLACK
    },
    content:{
        marginTop: 8,
        padding:20,
        fontSize:TEXT_SIZES.NORMAL,
        color:GRAY_1,
        textAlign:'left',
        width:'100%'
    }
}
