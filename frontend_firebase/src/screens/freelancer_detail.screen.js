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

import firebase from '../firebase/firebase'
export default class FreelancerDetailScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            freelancer:null,
            reviews:[],
            freelancer_id:this.props.match.params.id
        }
    }

    componentDidMount=async ()=>{
        let res=await firebase.get('/freelancer/'+this.state.freelancer_id)

        this.setState({
            freelancer:res,
          //  reviews:api.get_reviews_freelancer
        })
    }
    
    render(){
        const freelancer=this.state.freelancer;
        const reviews=this.state.reviews
        console.log('freelancer_detail screen:',freelancer);
        return (

            <div style={styles.container}>

                {/* header */}
                <HeaderBarComponent/>

                {
                freelancer===null?
                null
                :
                <div style={styles.body}>

                    
                    <FreelancerDetailHeaderComponent freelancer={freelancer}/>

                    <div style={styles.freelancer_body}>

                        <div style={{flex:1}}/>

                
                        <div style={styles.freelancer_body_col1}>

                            <div style={{marginTop:30}}>
                                <DescriptionComponent 
                                    title='About Freelancer'
                                    content={freelancer.description}/>
                            </div>
                        
                            
                            {/* <div style={{marginTop:50}}>
                                <ExperienceListComponent experiences={freelancer.experiences}/>
                            </div>
                        

                            <div style={{marginTop:50}}>
                                <ReviewListComponent reviews={reviews}/>
                            </div> */}
                        
                        </div>

                        <div style={{flex:0.5}}/>

                        <div style={styles.freelancer_body_col2}>
 
                            {/* <SkillsListComponent skills={freelancer.skills}/> */}
                
                            <div style={{marginTop:50}}>
                                <InforsBarComponent fields={[
                                    {
                                        key:'Hourly Rate',value:freelancer.hourly_rate
                                    },
                                    {
                                        key:'Done Tasks',value:freelancer.done_tasks!==undefined?freelancer.done_tasks:0
                                    },
                                    {
                                        key:'Income($)',value:freelancer.income!==undefined?freelancer.done_tasks:0
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

                
                <FooterBarComponent/>
            </div>
            
        )
    }
}


const styles={
    container:{
        width:'100vw',
        backgroundColor:WHITE,
        display:'flex',
        flexDirection: 'column'
    },
    body:{
        width:'100vw',
        display:'flex',
        flexDirection: 'column',
        paddingBottom:60,
        overflowX:'hidden',
        alignSelf: 'baseline'
    },
    freelancer_body:{
        width:'100%',
        display:'flex',
        flexDirection:'row'
    },
    freelancer_body_col1:{
        flex:5,
        display:'flex',
        flexDirection: 'column',
        alignSelf:'baseline'
    },
    freelancer_body_col2:{
        flex:2,
        display:'flex',
        flexDirection: 'column',
        marginLeft:50,  
        alignSelf:'baseline'
    }

}