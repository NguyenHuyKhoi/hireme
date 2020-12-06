//import from library 
import React, {Component} from 'react'

export default class TaskNotesComponent extends Component {
    render(){
        return (
            <div style={{marginTop: 15,width:'100%',alignSelf: 'baseline',backgroundColor: '#958583',
                display:'flex',flexDirection: 'column'}}>
                <text style={{fontSize:22,color:'#000000'}}>
                    Note
                </text>

                <div style={{width:'100%',display:'flex',flexDirection: 'row',flexWrap:'wrap'}}>
                    {
                        [1,2,3,4,5].map((item)=>
                            <div style={{marginTop: 10,width:'100%',alignSelf:'baseline',borderRadius:8,
                                backgroundColor: '#397553',
                                display:'flex',justifyContent: 'center',alignItems: 'center'}}>
                            <text style={{fontSize:18,color:'#000000',margin:10}}>
                            Me : Please zoom out first image,si can't see
                            </text>
                            </div>
                        )
                    }
                </div>
                
            </div>

            
        
    
        )
    }
}
