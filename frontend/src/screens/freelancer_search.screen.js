//import from library 
import React, {Component} from 'react'
import FilterComponent from '../components/input/filter.component';
import FooterBarComponent from '../components/common/footer_bar.component';

import HeaderBarComponent from '../components/common/header_bar.component';
import FreelancerListComponent from '../components/freelancer/freelancer_list.component';
import api from '../sample_db/fake_api_responses.json'
import { TEXT_SIZES } from '../utils/constants';
import { BLACK } from '../utils/palette';
import {BASE_URL} from '../utils/constants'
import axios from 'axios'
export default class FreelancerSearchScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            freelancers:[]
        }
    }

    // componentDidMount=()=>{
    //     this.setState({
    //         freelancers:api.search_freelancers
    //     })
    // }

    groupInputs=()=>{
        let filter={};
        let state=this.state;
        let fields=['category','keyword','hourly_rate','fixed_price','skills'];
        fields.map(item=>{
            if (state[item]!==undefined) filter[item]=state[item]
        });
        return filter
    };

    updateInputs=async (field,value)=>{
        await this.setState({
            [field]:value
        })

      //  console.log('filter_now:',JSON.stringify(this.state)) 
    };

    componentDidMount() {
       
    };

    search=()=>{
        alert('Call API search_freelancers with filter= :'+JSON.stringify(this.groupInputs()))
        //Call_API_Here
                // axios.get(BASE_URL+`/search_freelancers`,{
                //         data:{
                //             count:20,
                //             filter:this.groupInputs()
                //         }
                //     })
                //     .then(res => {
                //         })
                //         .catch(error => console.log(error));
        this.setState({
            freelancers:api.search_freelancers
        })
    }



    render(){

        const freelancers=this.state.freelancers;
        return (

            <div style={{width:'100vw',height:'100vh',
                display:'flex',flexDirection: 'column'}}>

                {/* header */}
                <HeaderBarComponent/>

                {/* body */}
                <div style={{width:'100vw',display:'flex',flexDirection: 'row',
                    paddingBottom:100,paddingTop:50,}}>

                    
                    <div style={{flex:1}}/>
                    {/* filters */}
                    <div style={{flex:2}}>
                        <FilterComponent
                            clickSearch={this.search}
                            updateInputs={this.updateInputs}/>
                    </div>

                    <div style={{flex:0.5}}/>

                    <div style={{flex:5.5}}>
                        {
                            freelancers.length===0?
                            <text style={{fontSize: TEXT_SIZES.NORMAL,color:BLACK}}>
                                Don't find any freelancers 
                            </text>
                            :
                            <FreelancerListComponent freelancers={freelancers}/>
                        }
                       
                    </div>
                 
                    <div style={{flex:1}}/>
                </div>


                {/* footer */}
                <FooterBarComponent/>
            </div>
            
        )
    }
}
