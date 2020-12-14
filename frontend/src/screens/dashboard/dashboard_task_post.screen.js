//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import SidebarComponent from '../../components/common/side_bar.component'
import PostTaskProfileComponent from '../../components/task/post_task_profile.component'
import { routePaths, SIDEBAR_RATIO, TEXT_SIZES,PADDING_BODY_DASHBOARD, CATEGORIES_DOMAIN } from '../../utils/constants'
import {GRAY_6 } from '../../utils/palette'
import ButtonComponent from '../../components/common/button.component'
import HeaderListComponent from '../../components/common/header_list.component'
import api from '../../sample_db/fake_api_responses.json'
export default class DashBoardTaskPostScreen extends Component {

    groupInputs=()=>{
        let filter={};
        let state=this.state;


        //fields as post_task API request structure 
        let fields=['name','category','min_suggested_price','max_suggested_price','price_type','skills',
            'attachments','description'];

        fields.map(item=>{
            if (state[item]!==undefined) filter[item]=state[item]
        });
        return filter
    };

    updateInputs=async (field,value)=>{
        await this.setState({
            [field]:value
        })

        console.log('inputs_nows:',JSON.stringify(this.state)) 
    };


    post=()=>{
        alert('Call API post_task with body = :'+JSON.stringify(this.groupInputs()))
        //Call_API_Here
                // axios.get(BASE_URL+`/post_task`,{
                //         data:{
                //             this.groupInputs()
                //         }
                //     })
                //     .then(res => {
                //         })
                //         .catch(error => console.log(error));
    }
    render(){
        return (

            <div style={{width:'100vw',backgroundColor:GRAY_6,
                display:'flex',flexDirection: 'row'}}>

                {/* sidebar */}
                <SidebarComponent/>
                {/* body */}
                <div style={{display:'flex',flex:SIDEBAR_RATIO,
                    padding:PADDING_BODY_DASHBOARD}}>

                    <div style={{display:'flex',flex:1,flexDirection: 'column'}}>

                        {/* header */}
                        <HeaderListComponent title='Post A Task'/>

                        {/* form  */}

                        <div style={{flex:1,marginTop:30}}>
                            <PostTaskProfileComponent 
                                category={this.state!==null && this.state.category!==undefined
                                    ?
                                    this.state.category
                                    :
                                    CATEGORIES_DOMAIN[0].name}
                                updateInputs={this.updateInputs}/>
                        </div>
                      
                        {/* submit button */}

                        <Link 
                            to={routePaths.DASHBOARD_TASK_LIST}
                            onClick={this.post}
                            style={{marginTop:50,width:'25%',textDecoration:'none'}}>
                            <ButtonComponent label='Post This Task' height={60}/>
                        </Link>

                    </div>
               
                </div>

     

               
            </div>
            
        )
    }
}
