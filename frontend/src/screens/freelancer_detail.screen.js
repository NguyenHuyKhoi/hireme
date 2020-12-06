//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../components/common/button.component';
import FooterBarComponent from '../components/common/footer_bar.component';

import HeaderBarComponent from '../components/common/header_bar.component';
import InforsBarComponent from '../components/common/infors_bar.component';
import ExperienceListComponent from '../components/freelancer/experience_list.component';
import FreelancerDetailHeaderComponent from '../components/freelancer/freelancer_detail_header.component';
import ReviewListComponent from '../components/task/review_list.component';
import banner from '../assets/images/banner.jpg'
import DescriptionComponent from '../components/common/description.component';
import { WHITE } from '../utils/palette';
import SkillsListComponent from '../components/common/skills_list.component';
export default class FreelancerDetailScreen extends Component {
    render(){
        return (

            <div style={{width:'100vw',
                backgroundColor:WHITE,
                display:'flex',flexDirection: 'column'}}>

                {/* header */}
                <HeaderBarComponent/>

                {/* body */}
                <div style={{width:'100vw',display:'flex',flexDirection: 'column',
                    paddingBottom:60,
                    overflowX:'hidden',
                    alignSelf: 'baseline'}}>

                    
                    {/* header task detail */}
                    
                     <FreelancerDetailHeaderComponent/>
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
                           
                            {/* experience list */}
                            
                            <div style={{marginTop:50}}>
                                <ExperienceListComponent/>
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

                            {/* skills */}
                            <SkillsListComponent/>


                            {/* infor bar  */}
                            <div style={{marginTop:50}}>
                                <InforsBarComponent/>
                            </div>

                            <div style={{marginTop:15}}>
                                <ButtonComponent label='Make an offer'/>
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
