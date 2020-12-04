//import from library 
import React, {Component} from 'react'
import FooterBarComponent from '../components/common/footer_bar.component';
import HeaderBarComponent from '../components/common/header_bar.component';
import HomeBannerComponent from '../components/common/home_banner.component';
import TopCategoriesComponent from '../components/common/top_categories.component';
import TopFreelancersComponent from '../components/common/top_freelancers.component';
export default class HomeScreen extends Component {
    render(){
        return (

            <div style={{width:'100vw',height:'100vh',backgroundColor: '#392855',
                display:'flex',flexDirection: 'column'}}>

                {/* header */}
                <HeaderBarComponent/>

                {/* body */}
                <div style={{width:'100vw',display:'flex',flexDirection: 'column',paddingBottom:100}}>

                    {/* banner */}
                    <HomeBannerComponent/>
                    {/* top categories */}
                    <TopCategoriesComponent/>

                    {/* top freelancers */}

                    <TopFreelancersComponent/>
                </div>


                {/* footer */}
                <FooterBarComponent/>
            </div>
            
        )
    }
}
