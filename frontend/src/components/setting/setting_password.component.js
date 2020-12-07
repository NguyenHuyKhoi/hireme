//import from library 
import React, {Component} from 'react'
import { WHITE } from '../../utils/palette'
import HeaderListComponent from '../common/header_list.component'

import LabeledInputComponent from '../input/labeled_input.component'
import LabeledSelectedInputComponent from '../input/labeled_selected_input.component'


export default class SettingPasswordComponent extends Component {
   

    render(){
        return (
            <div style={{
                flex:1,display: 'flex',flexDirection:'column',backgroundColor:WHITE,
                borderRadius:3,
                boxShadow:'3px 5px 3px 3px #707070'}}>
                <HeaderListComponent title='Password' height={40}/>

                <div style={{flex:1,
                    paddingLeft:80,paddingRight:80,paddingBottom:30,paddingTop:30,
                    display:'flex',flexDirection:'row',alignItems:'center'}}>

                    
                        <div style={{flex:4}}>
                            <LabeledInputComponent label='Current Password'/>
                        </div>
                        <div style={{flex:1}}/>
                        <div style={{flex:4}}>
                            <LabeledInputComponent label='New Password'/>
                        </div>
                               
                        
                        <div style={{flex:1}}/>
                        <div style={{flex:4}}>
                            <LabeledInputComponent label='Repeat New Password'/>
                        </div>
                  
                    </div>
                
                
            </div>
              
           
    )
    }
}

