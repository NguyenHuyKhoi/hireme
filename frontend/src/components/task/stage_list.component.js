//import from library 
import React, {Component} from 'react'
import HeaderListComponent from '../common/header_list.component'
import PaginationComponent from '../common/pagination.component'
import StageItemComponent from './stage_item.component'
import TaskItemComponent from './task_item.component'
import TaskItemBriefComponent from './task_item_brief.component'

export default class StageListComponent extends Component {
    render(){
        return (
            <div style={{ display:'flex',flex:1,flexDirection: 'row',backgroundColor: '#903553'}}>
                
                {/* body list */}


                <div style={{ marginTop: 30,width:'80vw',display:'flex',flexDirection:'row',
                    alignItems:'flex-start',overflowX:'scroll',
                    backgroundColor: '#329585'}}>
            
                    {
                        [1,2].map((item)=>
                            <StageItemComponent/>
                        )
                    }
                    <div style={{display:'flex',paddingLeft:40,paddingRight:40,width:'15vw',
                        alignSelf:'baseline',flexDirection:'column',alignItems:'center'}}>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',
                            flexDirection:'column',width:'80%',height:40,borderRadius:6,backgroundColor: '#943933'}}>
                            <text style={{fontSize:16,color:'#000000'}}>
                                08:00
                            </text>
                            <text style={{fontSize:16,color:'#000000'}}>
                                02/12/2020
                            </text>
                        </div>
                        <text style={{marginTop:10,fontSize:16,color:'#000000',textAlign:'center'}}>
                                For company :Task reached 100%, confirm it is completed ?
                        </text>

                        <div style={{marginTop:10,width:'60%',height:40,borderRadius:10,backgroundColor: '#092358',
                                    display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <text style={{fontSize:20,color:'#000000'}}>
                                Confirm
                            </text>
                        </div>
                    </div>

                    

                
                </div>

            </div>
                    
    
        )
    }
}
