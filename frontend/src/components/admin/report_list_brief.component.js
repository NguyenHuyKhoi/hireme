//import from library 
import React, {Component} from 'react'
import { WHITE } from '../../utils/palette'
import HeaderListComponent from '../common/header_list.component'
import ReportItemBriefComponent from './report_item_brief.component'

export default class ReportListBriefComponent extends Component {
    render(){
        return (
            <div style={{ display:'flex',flex:1,flexDirection: 'column',backgroundColor: WHITE,

                boxShadow:'3px 5px 3px 3px #707070'}}>
                {/* header list */}
                <HeaderListComponent   title='Tasks' is_sort={true}/>
                
                {/* body list */}

                <div style={{display:'flex',flex:1,flexDirection: 'column'}}>
                {
                    [1,2,3,4,5].map((item,index)=>
                        <ReportItemBriefComponent  
                            key={''+index}
                            index={index}/>
                    )
                }
                </div>
            

            </div>
                    
    
        )
    }
}
