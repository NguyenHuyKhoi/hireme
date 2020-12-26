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

import firebase from '../firebase/firebase'

export default class FreelancerSearchScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            freelancers:[]
        }
    }

    updateInputs=async (field,value)=>{
        await this.setState({
            [field]:value
        });
        console.log('update_inputs:',field,value) 
    };

    search=async ()=>{
        let arr=await firebase.searchFreelancer(this.state)
        this.setState({
            freelancers:arr
        })
    }

    render(){

        const freelancers=this.state.freelancers;
        return (

            <div style={styles.container}>

                <HeaderBarComponent/>

                <div style={styles.body}>

                    
                    <div style={{flex:1}}/>

                    <div style={{flex:2}}>
                        <FilterComponent
                            category={this.state.category}
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

                
                <FooterBarComponent/>
            </div>
            
        )
    }
}


const styles={
    container:{
        width:'100vw',
        height:'100vh',
        display:'flex',
        flexDirection: 'column'
    },
    body:{
        width:'100vw',
        display:'flex',
        flexDirection: 'row',
        paddingBottom:100,
        paddingTop:50
    }
}
