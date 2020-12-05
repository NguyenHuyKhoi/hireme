//import from library 
import React, {Component} from 'react'

import LabeledInputComponent from '../common/labeled_input.component'
import LabeledSelectedInputComponent from '../common/labeled_selected_input.component'


export default class SettingAccountComponent extends Component {
   

    render(){
        return (
            <div style={{marginTop:20,width:'100%',height:400,backgroundColor: '#093255' }}>
                <div style={{flex:1,
                    paddingLeft:60,paddingRight:60,paddingTop:20,paddingBottom:20
                    ,backgroundColor: '#937353',
                    display:'flex',justifyContent:'center',flexDirection:'column'}}>
                    <text style={{fontSize:25,color:'#000000'}}>
                        My Account
                    </text>

                    <div style={{marginTop:20,flex:1,flexDirection:'row',display:'flex'}}>
                        <img src='https://randomuser.me/api/portraits/men/79.jpg'
                            style={{height:200,height:200}}/>
                        <div style={{marginLeft:40,flex:1,display:'flex',flexDirection:'column'}}>
                            <div style={{flex:1,display:'flex',flexDirection:'row' }}>
                                <LabeledInputComponent/>
                                <div style={{width:50}}/>
                                <LabeledInputComponent/>
                            </div>
                            <LabeledInputComponent/>
                        </div>
                    </div>
                    
                </div>
                
            </div>
                    
           
    )
    }
}

