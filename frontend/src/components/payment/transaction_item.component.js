//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, GRAY_2, GRAY_3, GRAY_4, GREEN_1, RED_1, WHITE } from '../../utils/palette'


export default class TransactionItemComponent extends Component {
    render(){
        return (
            <div style={{marginBottom:15,borderRadius:5,display: 'flex',flexDirection: 'row',flex:1,height:95,
            backgroundColor:GRAY_3}}>
    
                <div style={{width:5,height:'100%',
                    borderRadius:5,
                    backgroundColor: this.props.index%2==0?GREEN_1:RED_1}}/>


                <div style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div style={{width:'50%',aspectRatio:1,borderRadius:5, 
                        backgroundColor: WHITE,
                        display:'flex',justifyContent: 'center',alignItems:'center',flexDirection:'column'}}>
                        <text style={{fontSize:textSizes.NORMAL,color:BLACK}}>
                            12
                        </text>
                        <text style={{fontSize:textSizes.SMALL,color:GRAY_2}}>
                            May
                        </text>
                    </div>
                </div>

                <div style={{display:'flex',flex:3,flexDirection:'column',justifyContent:'center'}}>
                    <text style={{fontSize:textSizes.NORMAL,color:BLACK,fontWeight:'bold'}}>
                        Recharge
                    </text>
                    <text style={{fontSize:textSizes.SMALL,color:GRAY_2}}>
                        From VISA 2019 2039 2444 0493
                    </text>
                </div>

                <div style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center'}}>
                    <text style={{fontSize:textSizes.BIG,color:this.props.index%2==0?GREEN_1:RED_1}}>
                            +$300
                    </text>
                </div>
                
            </div>

     
    
        )
    }
}
