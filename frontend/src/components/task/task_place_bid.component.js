//import from library 
import React, {Component} from 'react'
import { BIDDING_TIME_DOMAIN, FIXED_PRICE_DOMAIN, TEXT_SIZES } from '../../utils/constants'
import { BLACK, GRAY_1, GRAY_2, GRAY_3, GRAY_4,GRAY_5, WHITE } from '../../utils/palette'
import ButtonComponent from '../common/button.component'
import NumberInputComponent from '../input/number_input.component'

export default class TaskPlaceBidComponent extends Component {
    render(){
        return (
            
            <div style={{width:'100%',borderRadius:10,height: 400,
            boxShadow:'5px 5px 5px #707070',
            display:'flex',flexDirection: 'column',alignSelf: 'baseline'}}>

                <div style={{flex:1,
                    display:'flex',justifyContent: 'center',alignItems: 'center',backgroundColor:GRAY_4}}>
                    <text style={{fontSize:TEXT_SIZES.NORMAL,color:BLACK}}>
                            Bidding on task
                    </text>
                </div>
                <div style={{flex:5,
                        padding:20,
                        display:'flex',flexDirection: 'column',
                        justifyContent: 'center',alignItems: 'center',
                        backgroundColor: GRAY_5}}>
                        
                        <NumberInputComponent 
                            label='Enter bidding cost '
                            onChange={value=>this.props.updateInputs('bidding_cost',value)}
                            domain={FIXED_PRICE_DOMAIN}
                            value={[4000]}/>
                     

                        <div style={{width: '100%',marginTop:20}}>
                            <NumberInputComponent
                                label='Enter bidding time (day) '
                                onChange={value=>this.props.updateInputs('bidding_time',value)}
                                domain={BIDDING_TIME_DOMAIN}
                                unit=' days'
                                value={[20]}/>

                        </div>
                      

                        <div style={{marginTop: 40,width: '100%'}}>
                            <ButtonComponent  
                                onClick={this.props.placeBidding}
                                label='Place A Bid'/>
                        </div>
                    
                </div>

                <div style={{flex:1,
                    display:'flex',justifyContent: 'center',alignItems: 'center',
                        backgroundColor: GRAY_2}}>
                    <text style={{fontSize:TEXT_SIZES.SMALL,color:WHITE}}>
                        More feasible cost, more chances.
                    </text>
                </div>
            </div>
                        
        
    
        )
    }
}
