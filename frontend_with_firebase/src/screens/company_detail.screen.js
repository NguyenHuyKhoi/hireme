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

import firebase from '../firebase/firebase'

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

    componentDidMount=async ()=>{
        let res=await firebase.get('company',this.state.company_id)

        this.setState({
            company:res,
          //  reviews:api.get_reviews_freelancer
        })
    }
    
    render(){
        const company=this.state.company;
        const reviews=this.state.reviews;
        return (

            <div style={styles.container}>

                
                <HeaderBarComponent/>

                {
                company===null?
                null
                :
                <div style={styles.body}>

                    
                    <CompanyDetailHeaderComponent company={company}/>

                    <div style={styles.company_body}>
                                        
                        <div style={{flex:1}}/>

                        <div style={styles.company_body_col1}>

                            <div style={{marginTop:30}}>
                                <DescriptionComponent 
                                    title='About Company'
                                    content={company.description}/>
                            </div>
                        

                            <div style={{marginTop:50}}>
                                <ReviewListComponent reviews={reviews}/>
                            </div>
                        
                        </div>

                        <div style={{flex:0.5}}/>

                        <div style={styles.company_body_col2}>

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
        backgroundColor: WHITE,
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
    company_body:{
        width:'100%',
        display:'flex',
        flexDirection:'row'
    },
    company_body_col1:{
        flex:5,
        display:'flex',
        flexDirection: 'column',
        alignSelf:'baseline'
    },
    company_body_col2:{
        flex:2,
        display:'flex',
        flexDirection: 'column',
        marginLeft:50,  
        alignSelf:'baseline'
    }
}