//import from library 
import React, {Component} from 'react'
import ChatComponent from '../../components/chat/chat.component'
import LabeledInputComponent from '../../components/common/labeled_input.component'
import LabeledSelectedInputComponent from '../../components/common/labeled_selected_input.component'
import RangeInputComponent from '../../components/common/range_input.component'
import SidebarComponent from '../../components/common/side_bar.component'
import SkillsPickerComponent from '../../components/common/skills_picker.component'
import UploadFilesComponent from '../../components/common/upload_files.component'

export default class DashBoardPostTaskScreen extends Component {
    render(){
        return (

            <div style={{width:'100vw',backgroundColor: '#392855',
                display:'flex',flexDirection: 'row'}}>

                {/* sidebar */}
                <SidebarComponent/>
                {/* body */}
                <div style={{display:'flex',flex:4,
                    paddingLeft:30,paddingRight:30,
                    paddingTop:40,paddingBottom:40,
                    marginBottom:100,
                    backgroundColor: '#902823'}}>

                    <div style={{display:'flex',flex:1,flexDirection: 'column',
                        backgroundColor: '#392753'}}>

                        {/* header */}
                        <div style={{width:'100%',height:40,backgroundColor: '#935335',
                            display:'flex',flexDirection: 'row',alignItems: 'center'}}>
                            <text style={{fontSize:20,color:'#000000',marginLeft:30}}>
                                Post a Task
                            </text>
                        </div>

                        {/* form  */}
                        <div style={{marginTop: 20,display:'flex',flexDirection: 'column',flex:1,marginTop:20,backgroundColor: '#302853',
                            backgroundColor: '#935858',padding:20}}>
                            
                            {/* row1 */}
                            <div style={{display:'flex',flexDirection: 'row'}}>

                                {/* col1_1 */}
                                <div style={{display:'flex',flexDirection: 'column',flex:1,
                                    backgroundColor: '#309835'}}>

                                    <div style={{width:'70%'}}>
                                        <LabeledInputComponent/>
                                    </div>

                                    <div style={{width:'80%'}}>
                                        <RangeInputComponent/>
                                    </div>

                                    <SkillsPickerComponent/>

                                </div>

                                 {/* col1_2 */}
                                <div style={{display:'flex',flexDirection: 'column',flex:1,
                                    alignItems:'center',
                                    backgroundColor: '#274282'}}>

                                    <div style={{width:'70%'}}>
                                        <LabeledSelectedInputComponent/>
                                    </div>

                                    <div style={{width:'70%'}}>
                                        <LabeledSelectedInputComponent/>
                                    </div>

                                    <div style={{width:'70%'}}>
                                        <UploadFilesComponent/>
                                    </div>
                                </div>

                            
                            </div>

                            {/* row2 */}

                            <div style={{marginTop:20,display:'flex',width:'100%',height:240,alignSelf:'baseline',
                                flexDirection: 'column'}}>
                                <text style={{fontSize:20,color:'#000000'}}>
                                    Description
                                </text> 
                                <textarea  style={{marginTop:20,flex:1,padding:10,backgroundColor: '#923835'}}
                                  
                                    placeholder='Enter you description'/>
                            </div>
                        </div>
                    
                        {/* submit button */}
                        <div style={{marginTop:40,width:'20%',height:50,borderRadius:10,
                            backgroundColor: '#028334',
                            display:'flex',justifyContent: 'center',alignItems:'center'}}>
                            <text style={{fontSize:18,color:'#032058'}}>
                                Post Task
                            </text>
                        </div>
                    </div>
                </div>

     

               
            </div>
            
        )
    }
}
