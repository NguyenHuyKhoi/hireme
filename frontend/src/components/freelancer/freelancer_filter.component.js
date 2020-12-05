//import from library 
import React, {Component} from 'react'
import SkillsPickerComponent from '../common/skills_picker.component'

export default class FreelancerFilterComponent extends Component {
    render(){
        return (
            <div style={{width:'20vw',display:'flex',flexDirection: 'column',
            backgroundColor: '#305835'}}>

                <div style={{width:'80%',display:'flex',flexDirection: 'column'}}>
                    <text style={{fontSize:22,color:'#000000'}}>
                        Category
                    </text>
                    
                    <input style={{width:'100%',height:30,marginTop:15}} placeholder='Computer science'/>
                </div>
                <div style={{marginTop:20,width:'80%',display:'flex',flexDirection: 'column'}}>
                    <text style={{fontSize:22,color:'#000000'}}>
                        Keyword
                    </text>
                    
                    <input style={{width:'100%',height:30,marginTop:15}} placeholder='Computer science'/>
                </div>

                <div style={{marginTop:20,width:'80%',display:'flex',flexDirection: 'column'}}>
                    <text style={{fontSize:22,color:'#000000'}}>
                        Hourly Rate
                    </text>
                    
                    <input style={{width:'100%',height:30,marginTop:15}} placeholder='Computer science'/>
                </div>

                <SkillsPickerComponent/>
            </div>
       
    
        )
    }
}
