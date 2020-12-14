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

import api from '../sample_db/fake_api_responses.json'
export default class FreelancerDetailScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            freelancer:null,
            reviews:[],
            freelancer_id:this.props.match.params.id
        }
    }

    componentDidMount=()=>{
        // //Call_API_Here
        // axios.get(BASE_URL+`/get_detail_freelancer`,{
        //         data:{
        //             freelancer_id:this.state.freelancer_id
        // 
        //         }
        //     })
        //     .then(res => {
        //     })
        //     .catch(error => console.log(error));

        // //Call_API_Here
        // axios.get(BASE_URL+`/get_reviews`,{
        //         data:{
        //             freelancer_id:this.state.freelancer_id
        // 
        //         }
        //     })
        //     .then(res => {
        //     })
        //     .catch(error => console.log(error));
        alert('Call API get_detail_freelancer and get_reviews with freelancer_id= '+this.state.freelancer_id)
        this.setState({
            freelancer:api.get_detail_freelancer,
            reviews:api.get_reviews_freelancer
        })
    }
    
    render(){
        const freelancer=this.state.freelancer;
        const reviews=this.state.reviews
        console.log('freelancer_detail screen:',freelancer);
        return (

            <div style={{width:'100vw',
                backgroundColor:WHITE,
                display:'flex',flexDirection: 'column'}}>

                {/* header */}
                <HeaderBarComponent/>

                {
                freelancer===null?
                null
                :
                <div style={{width:'100vw',display:'flex',flexDirection: 'column',
                    paddingBottom:60,
                    overflowX:'hidden',
                    alignSelf: 'baseline'}}>

                    
                    {/* header task detail */}
                    
                    <FreelancerDetailHeaderComponent freelancer={freelancer}/>
                    {/* body task detail  */}

                    <div style={{width:'100%',display:'flex',flexDirection:'row'}}>
                        <div style={{flex:1}}/>
                        {/* column1 */}
                        <div style={{flex:5,display:'flex',flexDirection: 'column',
                            alignSelf:'baseline'}}>

                            {/* description */}
                            <div style={{marginTop:30}}>
                                <DescriptionComponent 
                                    title='About Freelancer'
                                    content={freelancer.description}/>
                            </div>
                        
                            {/* experience list */}
                            
                            {/* <div style={{marginTop:50}}>
                                <ExperienceListComponent experiences={freelancer.experiences}/>
                            </div> */}
                        

                            <div style={{marginTop:50}}>
                                {/* reviews list */}
                                <ReviewListComponent reviews={reviews}/>
                            </div>
                        
                        </div>

                        <div style={{flex:0.5}}/>

                        {/* column2 */}
                        <div style={{flex:2,display:'flex',flexDirection: 'column',
                            marginLeft:50,  alignSelf:'baseline'}}>

                            {/* skills */}
                            <SkillsListComponent skills={freelancer.skills}/>


                            {/* infor bar  */}
                            <div style={{marginTop:50}}>
                                <InforsBarComponent fields={[
                                    {
                                        key:'Hourly Rate',value:freelancer.hourly_rate
                                    },
                                    {
                                        key:'Done Tasks',value:freelancer.done_tasks
                                    },
                                    {
                                        key:'Income($)',value:freelancer.income
                                    }
                                ]}/>
                            </div>

                            <div style={{marginTop:15}}>
                                <ButtonComponent label='Make an offer'/>
                            </div>
                        
                        
                        </div>
                        <div style={{flex:1}}/>
                    </div>
            
            
                </div>


                }
                {/* body */}
                
                {/* footer */}
                <FooterBarComponent/>
            </div>
            
        )
    }
}
