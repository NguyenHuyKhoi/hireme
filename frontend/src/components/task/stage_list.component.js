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
                    [1].map((item)=>
                        <StageItemComponent/>
                    )
                }

                
                </div>

            </div>
                    
    
        )
    }
}
