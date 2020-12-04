//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../components/common/button.component';
import FooterBarComponent from '../components/common/footer_bar.component';

import HeaderBarComponent from '../components/common/header_bar.component';
import CompanyDetailHeaderComponent from '../components/company/company_detail_header.component';
import BiddingListComponent from '../components/task/bidding_list.component';
import TaskAttachmentsComponent from '../components/task/task_attachments.component';
import TaskDetailHeaderComponent from '../components/task/task_detail_header.component';
import TaskFilterComponent from '../components/task/task_filter.component';
import TaskListComponent from '../components/task/task_list.component';
import TaskPlaceBidComponent from '../components/task/task_place_bid.component';

export default class CompanyDetailScreen extends Component {
    render(){
        return (

            <div style={{width:'100vw',backgroundColor: '#392855',
                display:'flex',flexDirection: 'column'}}>

                {/* header */}
                <HeaderBarComponent/>

                {/* body */}
                <div style={{width:'100vw',display:'flex',flexDirection: 'column',
                    alignItems: 'center',
                    paddingBottom:60,
                    alignSelf: 'baseline',backgroundColor: '#111111'}}>

                    
                    {/* header task detail */}
                    
                     <CompanyDetailHeaderComponent/>
                    {/* body task detail  */}
 
                    <div style={{marginTop: 20,width:'80vw',display:'flex',flexDirection:'row',
                        justifyContent: 'space-between'}}>
                        
                        {/* column1 */}
                        <div style={{flex:3,display:'flex',flexDirection: 'column', 
                            backgroundColor: '#291725'}}>

                            {/* description */}
                            <div style={{width:'100%',alignSelf: 'baseline',backgroundColor: '#203583',
                                display:'flex',flexDirection: 'column'}}>
                                <text style={{fontSize:22,color:'#000000'}}>
                                    description
                                </text>

                                <text style={{marginTop: 8,fontSize:18,color:'#000000',textAlign:'left'}}>
                                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.<br/>

Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.<br/>

Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
                                </text>
                            </div>

                            {/* attachments */}
                            <TaskAttachmentsComponent/>
                            {/* biddings */}
                            
                            <BiddingListComponent/>
                        </div>

                        
                        {/* column2 */}
                        <div style={{flex:1,display:'flex',flexDirection: 'column',
                            marginLeft:50, 
                            backgroundColor: '#591725'}}>

                            {/* skills */}
                            <div style={{width:'100%',display:'flex',flexDirection: 'column',alignSelf: 'baseline',backgroundColor: '#395933'}}>

                                <text style={{fontSize:22,color:'#000000'}}>
                                        Skills 
                                </text>
                                <div style={{marginTop:8,width:'100%',alignSelf: 'baseline',display:'flex',
                                    flexDirection: 'row',flexWrap:'wrap',
                                    alignItems: 'flex-start'}}>
                                    {
                                        [1,2,3,4].map((item)=>
                                            <div style={{display:'flex',marginRight:10,marginTop:7,
                                                justifyContent: 'center',alignItems: 'center',
                                                borderRadius:5,backgroundColor: '#639343',padding: 7}}>
                                                <text style={{fontSize:15,color:'#359325'}}>
                                                    riu3ry23y 
                                                </text>
                                            </div>
                                            )
                                    }
                                </div>
                            </div> 

                            {/* times */}
                            <div style={{marginTop: 20,width:'100%',height:50,borderRadius:6,
                                display:'flex',justifyContent: 'center',alignItems: 'center',
                                backgroundColor: '#203863'}}>
                                <text style={{fontSize:22,color:'#000000'}}>
                                        6 days ,23 hours 
                                </text>
                            </div>

                            {/* place bid */}
                            <TaskPlaceBidComponent/>
                        </div>
                    </div>
               
                </div>


                {/* footer */}
                <FooterBarComponent/>
            </div>
            
        )
    }
}
