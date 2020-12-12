//import from library 
import React, {Component} from 'react'
import FooterBarComponent from '../components/common/footer_bar.component';
import HeaderBarComponent from '../components/common/header_bar.component';
import HomeBannerComponent from '../components/common/home_banner.component';
import TopCategoriesComponent from '../components/category/category_top_list.component';
import TopFreelancersComponent from '../components/freelancer/freelancer_top_list';
import AuthModal from '../components/common/auth.modal';
import { BLACK, BLUE_1, WHITE } from '../utils/palette';

import api from '../sample_db/fake_api_responses.json'

const topCategories=api.top_categories;

export default class HomeScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            popular_categories:[],
            popular_freelancers:[]
        }
    };

    componentDidMount=()=>{
        //fake api response : get_popular_categories :
        this.setState({
            popular_categories:api.get_popular_categories,
            popular_freelancers:api.get_popular_freelancers
        })
    }

    render(){
        return (

            <div style={{width:'100vw',height:'100vh',
                backgroundColor:WHITE,overflowX:'hidden',
                display:'flex',flexDirection: 'column'}}>

                {/* <AuthModal/> */}
                {/* header */}
                
              
                <HeaderBarComponent/>

                {/* body */}
                <div style={{width:'100vw',display:'flex',flexDirection: 'column',paddingBottom:100}}>

                    {/* banner */}
                    <HomeBannerComponent/>
                    {/* top categories */}
                    <TopCategoriesComponent categories={this.state.popular_categories}/>

                    {/* top freelancers */}

                    <TopFreelancersComponent freelancers={this.state.popular_freelancers}/>
                </div>


                {/* footer */}
                <FooterBarComponent/>
            </div>
            
        )
    }
}
