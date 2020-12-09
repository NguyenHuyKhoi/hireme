//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, RED_1, WHITE } from '../../utils/palette'
import ButtonComponent from '../common/button.component'
import StageItemComponent from './stage_item.component'

export default class StageListComponent extends Component {
    render(){
        return (
            <div style={{ display:'flex',flexDirection: 'row',backgroundColor:WHITE, overflowX:'scroll',
                    paddingLeft:30,
                    boxShadow:'5px 5px 25px 3px #707070'}}>
                
                    {
                        [1,2].map((item,index)=>
                            <div style={{width:'40vw'}}>
                                <StageItemComponent 
                                    key={''+index}/>
                            </div>
                            
                        )
                    
                    }

                    <div style={{width:'40vw'}}>
                        <StageItemComponent 
                            is_new={true}/>
                    </div>
                    <div style={{display:'flex',width:400,paddingTop:50,
                        flexDirection:'column',alignItems: 'center'}}>


                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:15,
                            flexDirection:'column',borderRadius:4,backgroundColor: RED_1}}>
                            <text style={{fontSize:textSizes.NORMAL,color:WHITE}}>
                                DEADLINE
                            </text>
                            <text style={{fontSize:textSizes.SMALL,color:WHITE}}>
                                08:00
                            </text>
                            <text style={{fontSize:textSizes.SMALL,color:WHITE}}>
                                02/12/2020
                            </text>
                        </div>

                        

                        <text style={{marginTop:20,fontSize:textSizes.NORMAL,
                                width: 360,
                                color:BLACK,textAlign:'center'}}>
                                If task reaches 100%, press to confirm it be completed.
                                After that, budget will transfer to freelancer.
                        </text>

                        <div style={{marginTop:20,width:200}}>
                            <ButtonComponent label='Confirm'/>
                        </div>
                    </div>

                   
         

            </div>
                    
    
        )
    }
}
