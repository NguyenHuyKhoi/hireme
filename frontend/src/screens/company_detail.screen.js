//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../components/common/button.component';
import DescriptionComponent from '../components/common/description.component';
import FooterBarComponent from '../components/common/footer_bar.component';

import HeaderBarComponent from '../components/common/header_bar.component';
import SingleFieldComponent from '../components/common/single_field.component';
import CompanyDetailHeaderComponent from '../components/company/company_detail_header.component';

import ReviewListComponent from '../components/task/review_list.component';
import { WHITE } from '../utils/palette';

export default class CompanyDetailScreen extends Component {
    render(){
        return (

            <div style={{width:'100vw',backgroundColor: WHITE,
                display:'flex',flexDirection: 'column'}}>

                {/* header */}
                <HeaderBarComponent/>

                {/* body */}
                <div style={{width:'100vw',display:'flex',flexDirection: 'column',
                    paddingBottom:60,
                    overflowX:'hidden',
                    alignSelf: 'baseline'}}>

                    
                    {/* header task detail */}
                    
                     <CompanyDetailHeaderComponent/>
                    {/* body task detail  */}
 
                    <div style={{width:'100%',display:'flex',flexDirection:'row'}}>
                        <div style={{flex:1}}/>
                        
                        {/* column1 */}
                        <div style={{flex:5,display:'flex',flexDirection: 'column',
                            alignSelf:'baseline'}}>

                            {/* description */}
                            <div style={{marginTop:30}}>
                                <DescriptionComponent 
                                    title='About me'
                                    content='Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.

                                    Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.'/>
                            </div>
                        

                            <div style={{marginTop:50}}>
                                {/* reviews list */}
                                <ReviewListComponent/>
                            </div>
                          
                        </div>

                        <div style={{flex:0.5}}/>

                         {/* column2 */}
                        <div style={{flex:2,display:'flex',flexDirection: 'column',
                            marginLeft:50,  alignSelf:'baseline'}}>
                            {/* infor bar  */}
                            <div style={{marginTop:30}}>
                                <SingleFieldComponent/>
                            </div>

                            <div style={{marginTop:40}}>
                                <SingleFieldComponent/>
                            </div>

                            <div style={{marginTop:40}}>
                                <SingleFieldComponent/>
                            </div>

                            <div style={{marginTop:40}}>
                                <SingleFieldComponent/>
                            </div>


                          
                        </div>
                        <div style={{flex:1}}/>
                    </div>
               
                </div>


                {/* footer */}
                <FooterBarComponent/>
            </div>
            
        )
    }
}
