//import from library 
import React, {Component} from 'react'

export default class TaskAttachmentsComponent extends Component {
    render(){
        return (
            <div style={{marginTop: 15,width:'100%',alignSelf: 'baseline',backgroundColor: '#958583',
                display:'flex',flexDirection: 'column'}}>
                <text style={{fontSize:22,color:'#000000'}}>
                    attachments
                </text>

                <div style={{width:'100%',display:'flex',flexDirection: 'row',flexWrap:'wrap'}}>
                    {
                        [1,2,3,4,5].map((item)=>
                            <div style={{marginRight:10,marginTop: 10,width:'20%',height:80,borderRadius:8,
                                backgroundColor: '#397553',
                                flexDirection: 'column',
                                display:'flex',justifyContent: 'center',alignItems: 'center'}}>
                            <text style={{fontSize:22,color:'#000000'}}>
                                CV file
                            </text>

                            <text style={{fontSize:16,color:'#000000'}}>
                            pdf
                            </text>
                            </div>
                        )
                    }
                </div>
                
            </div>

            
        
    
        )
    }
}
