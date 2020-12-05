//import from library 
import React, {Component} from 'react'

export default class SkillsListComponent extends Component {
    render(){
        return (
            <div style={{width:'100%',display:'flex',flexDirection: 'column',alignSelf: 'baseline',backgroundColor: '#395933'}}>

                <text style={{fontSize:22,color:'#000000'}}>
                    Skills 
                </text>
                <div style={{marginTop:8,width:'100%',alignSelf: 'baseline',display:'flex',
                flexDirection: 'row',flexWrap:'wrap',
                alignItems: 'flex-start'}}>
                {
                    [1,2,3,4].map((item)=>
                        <div style={{display:'flex',marginRight:10,marginTop:7,
                            justifyContent: 'center',alignItems: 'center',
                            borderRadius:5,backgroundColor: '#639343',padding: 7}}>
                            <text style={{fontSize:15,color:'#359325'}}>
                                riu3ry23y 
                            </text>
                        </div>
                        )
                }
                </div>

            </div>
        )
    }
}