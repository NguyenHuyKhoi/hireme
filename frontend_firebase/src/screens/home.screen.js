//import from library 
import React, {Component} from 'react'
import FooterBarComponent from '../components/common/footer_bar.component';
import HeaderBarComponent from '../components/common/header_bar.component';
import HomeBannerComponent from '../components/common/home_banner.component';
import TopCategoriesComponent from '../components/category/category_top_list.component';
import TopFreelancersComponent from '../components/freelancer/freelancer_top_list';
import AuthModal from '../components/common/auth.modal';
import { BLACK, BLUE_1, WHITE } from '../utils/palette';
import axios from 'axios'
import api from '../sample_db/fake_api_responses.json'

import {CATEGORIES_DOMAIN} from '../utils/constants'
export default class HomeScreen extends Component {



    render(){
        return (

            <div style={styles.container}>
                
              
                <HeaderBarComponent/>

                <div style={styles.body}>

                    <HomeBannerComponent/>

                    <TopCategoriesComponent categories={CATEGORIES_DOMAIN}/>


                    {/* <TopFreelancersComponent freelancers={this.state.popular_freelancers}/> */}
                </div>

                <FooterBarComponent/>
            </div>
            
        )
    }
}

const styles={
    container:{
        width:'100vw',
        height:'100vh',
        backgroundColor:WHITE,
        overflowX:'hidden',
        display:'flex',
        flexDirection: 'column'
    },
    body:{
        width:'100vw',
        display:'flex',
        flexDirection: 'column',
        paddingBottom:100
    }
}
