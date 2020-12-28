//import from library 
import React, {Component} from 'react'
import { WHITE } from '../../utils/palette'
import HeaderListComponent from '../common/header_list.component'

import LabeledInputComponent from '../input/labeled_input.component'
import LabeledSelectedInputComponent from '../input/labeled_selected_input.component'


export default class SettingPasswordComponent extends Component {
    render(){
        return (
            <div style={styles.container}>

                <HeaderListComponent title='Password' height={40}/>

                <div style={styles.body}>
                    
                        <div style={{flex:4}}>
                            <LabeledInputComponent
                                onChange={(value)=>this.props.updateInputs('password',value)} 
                                label='Password' />
                        </div>

                        <div style={{flex:1}}/>

                        <div style={{flex:4}}>
                            <LabeledInputComponent
                                onChange={(value)=>this.props.updateInputs('new_password',value)} 
                                label='New Password' />
                        </div>
                               
                        
                        <div style={{flex:1}}/>
                        
                        <div style={{flex:4}}>
                            <LabeledInputComponent  
                                onChange={(value)=>this.props.updateInputs('repeat_new_password',value)} 
                                label='Re-enter New Password' />
                        </div>
                  
                    </div>
                
                
            </div>
              
           
    )
    }
}

const styles={
    container:{
        flex:1,
        display: 'flex',
        flexDirection:'column',
        backgroundColor:WHITE,
        borderRadius:3,
        boxShadow:'3px 5px 3px 3px #707070'
    },
    body:{
        flex:1,
        paddingLeft:80,
        paddingRight:80,
        paddingBottom:30,
        paddingTop:30,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    }
}