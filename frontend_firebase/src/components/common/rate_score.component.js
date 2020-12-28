//import from library 
import React, {Component} from 'react'

export default class RateScoreComponent extends Component {
    render(){
        const score= this.props.score
        return (
            <div style={styles.container}>
                <text style={styles.text_score}>
                   {score}
                </text>
            </div>
        )
    }
}

const styles= {
    container : {
        width:30,
        height:20,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#FEBE42',
        borderRadius: 3
    },
    text_score :{
        fontSize: 15,
        color: '#ffffff'
    }
}