//import from library 
import React, {Component} from 'react'

import LabeledInputComponent from '../common/labeled_input.component'
import LabeledSelectedInputComponent from '../common/labeled_selected_input.component'


export default class BalanceCardComponent extends Component {
   

    render(){
        return (
            <div style={{marginTop: 40,display:'flex',width:'100%',alignSelf:'baseline',flexDirection: 'column', backgroundColor: '#392753'}}>

            {/* header */}
            <div style={{width:'100%',height:40,backgroundColor: '#935335',
                display:'flex',flexDirection: 'row',alignItems: 'center'}}>
                <text style={{fontSize:20,color:'#000000',marginLeft:10}}>
                    Balance
                </text>
            </div>

            <div style={{flex:1,display:'flex',
                backgroundColor: '#923755',justifyContent: 'center',alignItems:'center'}}>

                <div style={{marginTop: 20,marginBottom: 20,width:'60%',alignSelf:'baseline',borderRadius:10,backgroundColor: '#385035',
                display:'flex',flexDirection:'column',alignItems:'center',justifyContent: 'center'}}>
                    <text style={{fontSize:20,color:'#000000',marginTop: 20}}>
                        Current Account
                    </text>
                    <text style={{fontSize:30,color:'#000000',fontWeight:'bold'}}>
                        $2500
                    </text>

                
                    <div style={{width:'70%',display:'flex',flexDirection:'row',justifyContent: 'space-between'}}>
                        <LabeledInputComponent/>
                        <div style={{width:60}}/>
                        <LabeledSelectedInputComponent/>
                    </div>

                    <div style={{width:'90%',marginTop: 20,marginBottom: 20,display:'flex',flexDirection:'row',justifyContent: 'space-between'}}>
                        <div style={{width:'20%',height:40,borderRadius:10,backgroundColor: '#302585',
                            display:'flex',justifyContent: 'center',alignItems:'center'}}>
                            <text style={{fontSize:18,color:'#395854'}}>
                                Withdraw
                            </text>
                        </div>

                        <div style={{width:'20%',height:40,borderRadius:10,backgroundColor: '#302585',
                            display:'flex',justifyContent: 'center',alignItems:'center'}}>
                            <text style={{fontSize:18,color:'#395854'}}>
                                Recharge
                            </text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
    )
    }
}

