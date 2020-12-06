//import from library 
import React, {Component} from 'react'

import LabeledInputComponent from '../common/labeled_input.component'
import LabeledSelectedInputComponent from '../common/labeled_selected_input.component'


export default class SettingProfileCompanyComponent extends Component {
   

    render(){
        return (
            <div style={{marginTop:20,width:'100%',alignSelf:'baseline',backgroundColor: '#093255' }}> 
                <div style={{flex:1,
                    paddingLeft:60,paddingRight:60,paddingTop:20,paddingBottom:20
                    ,backgroundColor: '#937353',
                    display:'flex',justifyContent:'center',flexDirection:'column'}}>
                    <text style={{fontSize:25,color:'#000000'}}>
                        Profile 
                    </text>


                    <div style={{marginTop:20,flex:1,flexDirection:'column',display:'flex',backgroundColor: '#239895'}}>
                        <div style={{display:'flex',flexDirection: 'row'}}>
                            {/* col1_1 */}
                            <div style={{display:'flex',flexDirection: 'column',flex:1,
                                backgroundColor: '#309835'}}>

                                <div style={{width:'70%'}}>
                                    <LabeledInputComponent label='Company Name'/>
                                </div>

                                <div style={{width:'70%'}}>
                                    <LabeledInputComponent label='Location'/>
                                </div>
                                <div style={{width:'70%'}}>
                                    <LabeledInputComponent label='Tag line'/>
                                </div>
                            </div>

                            {/* col1_2 */}
                            <div style={{display:'flex',flexDirection: 'column',flex:1,
                                alignItems:'center',
                                backgroundColor: '#274282'}}>

                                <div style={{width:'70%'}}>
                                    <LabeledSelectedInputComponent label='Employ size'/>
                                </div>

                                <div style={{width:'70%'}}>
                                    <LabeledSelectedInputComponent label='Business Area'/>
                                </div>

                                <div style={{width:'70%'}}>
                                    <LabeledSelectedInputComponent label='website link'/>
                                </div>

                        
                            </div>


                        </div>
                        
                        <div style={{marginTop:20,display:'flex',width:'100%',height:240,alignSelf:'baseline',
                        flexDirection: 'column'}}>
                        <text style={{fontSize:20,color:'#000000'}}>
                            Description
                        </text> 
                        <textarea  style={{marginTop:20,flex:1,padding:10,backgroundColor: '#923835'}}
                        
                            placeholder='Enter you description'/>
                        </div>

                    </div>
                  
                </div>
                
            </div>
                    
           
    )
    }
}

