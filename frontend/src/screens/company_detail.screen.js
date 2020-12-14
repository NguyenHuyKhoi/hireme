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

import api from '../sample_db/fake_api_responses.json'
export default class CompanyDetailScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            company:null,
            reviews:[],
            company_id:this.props.match.params.id
        }
    }

    componentDidMount=()=>{
         // //Call_API_Here
        // axios.get(BASE_URL+`/get_detail_company`,{
        //         data:{
        //             company_id:this.state.company_id
        // 
        //         }
        //     })
        //     .then(res => {
        //     })
        //     .catch(error => console.log(error));

        // //Call_API_Here
        // axios.get(BASE_URL+`/get_reviews`,{
        //         data:{
        //             company_id:this.state.company_id
        // 
        //         }
        //     })
        //     .then(res => {
        //     })
        //     .catch(error => console.log(error));
        alert('Call API get_detail_company and get_reviews with company_id= '+this.state.company_id)
        this.setState({
            company:api.get_detail_company,
            reviews:api.get_reviews
        })
    }
    
    render(){
        const company=this.state.company;
        const reviews=this.state.reviews;
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
                    {
                        company===null?
                        null
                        :
                        <CompanyDetailHeaderComponent company={company}/>
                    }
                    {
                        company===null?
                        null
                        :
                        <div style={{width:'100%',display:'flex',flexDirection:'row'}}>
                            <div style={{flex:1}}/>
                            
                            {/* column1 */}
                            <div style={{flex:5,display:'flex',flexDirection: 'column',
                                alignSelf:'baseline'}}>

                                {/* description */}
                                <div style={{marginTop:30}}>
                                    <DescriptionComponent 
                                        title='About Company'
                                        content={company.description}/>
                                </div>
                            

                                <div style={{marginTop:50}}>
                                    {/* reviews list */}
                                    <ReviewListComponent reviews={reviews}/>
                                </div>
                            
                            </div>

                            <div style={{flex:0.5}}/>

                            {/* column2 */}
                            <div style={{flex:2,display:'flex',flexDirection: 'column',
                                marginLeft:50,  alignSelf:'baseline'}}>
                                {/* infor bar  */}
                                <div style={{marginTop:30}}>
                                    <SingleFieldComponent field={{
                                        key:'Employee size :',
                                        value:company.employee_size
                                    }} />
                                </div>

                                <div style={{marginTop:40}}>
                                    <SingleFieldComponent field={{
                                        key:'Location :',
                                        value:company.location
                                    }}/>
                                </div>

                                <div style={{marginTop:40}}>
                                    <SingleFieldComponent field={{
                                        key:'Business Area :',
                                        value:company.business_area
                                    }}/>
                                </div>

                                <div style={{marginTop:40}}>
                                    <SingleFieldComponent field={{
                                        key:'Website link:',
                                        value:company.website_link
                                    }}/>
                                </div>


                            
                            </div>
                            <div style={{flex:1}}/>
                        </div>
           
                    }
                   
                    {/* body task detail  */}
 
                   
                </div>


                {/* footer */}
                <FooterBarComponent/>
            </div>
            
        )
    }
}
