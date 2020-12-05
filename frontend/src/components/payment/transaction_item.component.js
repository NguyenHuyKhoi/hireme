//import from library 
import React, {Component} from 'react'


export default class TransactionItemComponent extends Component {
    render(){
        return (
            <div style={{display:'flex',width:'100%',height:80,alignSelf:'baseline',
                alignItems:'center',
                backgroundColor: '#093853',   
                marginTop:15,  
                flexDirection: 'row'}}>
    
                <div style={{height:'100%',width:5,backgroundColor: '#038046'}}/>

                <div style={{marginLeft:30,width:50,height:50,borderRadius:5, backgroundColor: '#359355',
                    display:'flex',justifyContent: 'center',alignItems:'center',
                        flexDirection:'column'}}>
                    <text style={{fontSize:20,color:'#000000'}}>
                        12
                    </text>
                    <text style={{fontSize:16,color:'#000000'}}>
                        May
                    </text>
                </div>

                <div style={{marginLeft:30,
                    display:'flex',flex:2,flexDirection:'column'}}>
                    <text style={{fontSize:20,color:'#000000',fontWeight:'bold'}}>
                        Recharge
                    </text>
                    <text style={{fontSize:16,color:'#000000'}}>
                        From VISA 2019 2039 2444 0493
                    </text>
                </div>

                <div style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center'}}>
                    <text style={{fontSize:30,color:'#000000'}}>
                            +$300
                    </text>
                </div>
                
            </div>

     
    
        )
    }
}
