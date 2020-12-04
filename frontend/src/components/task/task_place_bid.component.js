//import from library 
import React, {Component} from 'react'

export default class TaskPlaceBidComponent extends Component {
    render(){
        return (
            
            <div style={{marginTop: 20,width:'100%',borderRadius:10,
            display:'flex',flexDirection: 'column',alignSelf: 'baseline',
            backgroundColor: '#853583'}}>
                <div style={{width:'100%',height:50,
                display:'flex',justifyContent: 'center',alignItems: 'center',backgroundColor: '#203863'}}>
                    <text style={{fontSize:22,color:'#000000'}}>
                            Bidding on task
                    </text>
                </div>
                <div style={{width:'100%',
                        alignSelf: 'baseline',
                        display:'flex',flexDirection: 'column',
                        justifyContent: 'center',alignItems: 'center',
                        backgroundColor: '#487358'}}>
                        <text style={{fontSize:18,color:'#000000'}}>
                                Set your price 
                        </text>
                        <text style={{fontSize:25,color:'#000000'}}>
                                $3500 
                        </text>
                        <text style={{fontSize:18,color:'#000000'}}>
                            Set your time
                        </text>
                        <text style={{fontSize:25,color:'#000000'}}>
                                3 days
                        </text>

                        <div style={{marginTop: 20,marginBottom:20,width:'70%',height:40,borderRadius:6,
                            display:'flex',justifyContent: 'center',alignItems: 'center',
                            backgroundColor: '#302858'}}>
                            <text style={{fontSize:25,color:'#000000'}}>
                                $3500 
                            </text>
                        </div>
                    
                </div>
                <div style={{width:'100%',height:50,
                display:'flex',justifyContent: 'center',alignItems: 'center',backgroundColor: '#583580'}}>
                    <text style={{fontSize:16,color:'#000000'}}>
                            Don't have an account ? Sign-up
                    </text>
                </div>
            </div>
                        
        
    
        )
    }
}
