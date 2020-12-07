//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, RED_1, WHITE } from '../../utils/palette'
import ButtonComponent from '../common/button.component'
import HeaderListComponent from '../common/header_list.component'
import PaginationComponent from '../common/pagination.component'
import ButtonInputComponent from '../input/button_input.component'
import StageItemComponent from './stage_item.component'
import TaskItemComponent from './task_item.component'
import TaskItemBriefComponent from './task_item_brief.component'

export default class StageListComponent extends Component {
    render(){
        return (
            <div style={{ display:'flex',width:'100%',flexDirection: 'row',backgroundColor:WHITE,
                    flexDirection:'row',
                    boxShadow:'5px 5px 25px 3px #707070',
                    alignItems:'flex-start'}}>
                
                {/* body list */}
                    <div style={{flex:1,overflowX:'scroll'}}>
                        <div style={{flex:1,display:'flex',flexDirection:'row',
                        paddingLeft:30,paddingRight:30}}>
                        {
                            [1].map((item)=>
                                <StageItemComponent stage={{status:'this object tests 2 mode of stage item: create_state and display_existed_stage'}}/>
                            )
                        
                        }
                        <div style={{display:'flex',flex:1,paddingTop:50,
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

                    </div>
                   
                   
         

            </div>
                    
    
        )
    }
}
