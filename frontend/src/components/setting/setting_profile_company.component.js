//import from library 
import React, {Component} from 'react'
import { WHITE } from '../../utils/palette'
import HeaderListComponent from '../common/header_list.component'

import LabeledInputComponent from '../input/labeled_input.component'
import LabeledSelectedInputComponent from '../input/labeled_selected_input.component'
import TextareaInputComponent from '../input/textarea_input.component'


export default class SettingProfileCompanyComponent extends Component {
   

    render(){
        return (
            <div style={{
                flex:1,display: 'flex',flexDirection:'column',backgroundColor:WHITE,
                borderRadius:8,
                boxShadow:'3px 5px 3px 3px #707070',}}>
                <HeaderListComponent title='Profile' height={40}/>

                <div style={{flex:1,
                    padding:50,
                    display:'flex',justifyContent:'center',flexDirection:'column'}}>

                        <div style={{display:'flex',flexDirection: 'row'}}>
                            {/* col1_1 */}
                            <div style={{display:'flex',flex:1,flexDirection: 'column'}}>

                                <div style={{width:'70%'}}>
                                    <LabeledInputComponent label='Company Name'/>
                                </div>

                                <div style={{width:'70%',marginTop:30}}>
                                    <LabeledInputComponent label='Location'/>
                                </div>
                                <div style={{width:'70%',marginTop:30}}>
                                    <LabeledInputComponent label='Tag line'/>
                                </div>
                            </div>

                            {/* col1_2 */}
                            <div style={{display:'flex',flexDirection: 'column',flex:1,
                                alignItems:'center'}}>

                                <div style={{width:'70%'}}>
                                    <LabeledSelectedInputComponent label='Employ size'/>
                                </div>

                                <div style={{width:'70%',marginTop:30}}>
                                    <LabeledSelectedInputComponent label='Business Area'/>
                                </div>

                                <div style={{width:'70%',marginTop:30}}>
                                    <LabeledInputComponent label='website link'/>
                                </div>

                        
                            </div>


                        </div>
                        
                        <div style={{marginTop:40}}>
                            <TextareaInputComponent label='About' placeholder='Describe  your company'/>
                        </div>

                </div>
                  
                
            </div>
                    
           
    )
    }
}

