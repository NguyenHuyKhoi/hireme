//import from library 
import React, {Component} from 'react'
import { inputField } from '../../redux/constant/input.constant'
import { WHITE } from '../../utils/palette'
import HeaderListComponent from '../common/header_list.component'

import LabeledInputComponent from '../input/labeled_input.component'
import LabeledSelectedInputComponent from '../input/labeled_selected_input.component'


export default class SettingAccountComponent extends Component {
   

    render(){
        const account=this.props.account
        return (
            <div style={{
                flex:1,display: 'flex',flexDirection:'column',backgroundColor:WHITE,
                borderRadius:3,
                boxShadow:'3px 5px 3px 3px #707070'}}>
                <HeaderListComponent title='Account' height={40}/>

                <div style={{flex:1,
                    paddingLeft:60,paddingRight:60,paddingBottom:30,paddingTop:30,
                    display:'flex',justifyContent:'center',flexDirection:'row',alignItems:'center'}}>

                        <img src='https://randomuser.me/api/portraits/men/79.jpg'
                            style={{height:'60%',aspectRatio:1,borderRadius:10}}/>

                        <div style={{marginLeft:40,flex:1,display:'flex',flexDirection:'column',
                            justifyContent:'center'}}>
                            <div style={{display:'flex',flexDirection:'row' }}>
                                <div style={{flex:4}}>
                                    <LabeledInputComponent 
                                        value={account.first_name}
                                        input_field={inputField.FIRST_NAME}/>
                                </div>
                                <div style={{flex:2}}/>
                                <div style={{flex:4}}>
                                    <LabeledInputComponent 
                                        value={account.last_name}
                                        input_field={inputField.LAST_NAME}/>
                                </div>
                               
                            </div>

                            <div style={{marginTop:15}}>
                                <LabeledInputComponent 
                                    value={account.email}
                                    input_field={inputField.EMAIL}/>
                            </div>
                         
                        </div>
                    </div>
                
                
            </div>
                    
           
    )
    }
}

