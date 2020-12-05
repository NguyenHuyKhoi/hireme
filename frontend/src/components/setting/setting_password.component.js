//import from library 
import React, {Component} from 'react'

import LabeledInputComponent from '../common/labeled_input.component'
import LabeledSelectedInputComponent from '../common/labeled_selected_input.component'


export default class SettingPasswordComponent extends Component {
   

    render(){
        return (
            <div style={{marginTop:20,width:'100%',height:400,backgroundColor: '#093255' }}>
                <div style={{flex:1,
                    paddingLeft:60,paddingRight:60,paddingTop:20,paddingBottom:20
                    ,backgroundColor: '#937353',
                    display:'flex',justifyContent:'center',flexDirection:'column'}}>
                    <text style={{fontSize:25,color:'#000000'}}>
                        Password 
                    </text>
                    <div style={{flex:1,display:'flex',flexDirection:'row' }}>
                        <LabeledInputComponent/>
                        <div style={{width:80}}/>
                        <LabeledInputComponent/>
                        <div style={{width:80}}/>
                        <LabeledInputComponent/>
                    </div>
                           

                </div>
                
            </div>
                    
           
    )
    }
}

