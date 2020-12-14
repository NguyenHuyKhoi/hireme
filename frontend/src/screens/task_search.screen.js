//import from library 
import React, {Component} from 'react'
import FooterBarComponent from '../components/common/footer_bar.component';

import HeaderBarComponent from '../components/common/header_bar.component';
import TaskListComponent from '../components/task/task_list.component';
import FilterComponent from '../components/input/filter.component';

import api from '../sample_db/fake_api_responses.json'
import { TEXT_SIZES } from '../utils/constants';
import { BLACK } from '../utils/palette';


export default class TaskSearchScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            tasks:[]
        }
    }

    componentDidMount=()=>{
        // this.setState({
        //     tasks:api.search_tasks
        // });
    }



    updateInputs=async (field,value)=>{
        await this.setState({
            [field]:value
        })

        console.log('filter_now:',this.state) 
    };

    groupInputs=()=>{
        let filter={};
        let state=this.state;
        let fields=['category','keyword','hourly_rate','fixed_price','skills'];
        fields.map(item=>{
            if (state[item]!==undefined) filter[item]=state[item]
        });
        return filter
    };

    search=()=> {
        alert('Call API search_freelancers with filter=  :'+JSON.stringify(this.groupInputs()))
        // //Call_API_Here
        // axios.get(BASE_URL+`/search_tasks`,{
        //         data:{
        //             count:20,
        //             filter:this.groupInputs()
        //         }
        //     })
        //     .then(res => {
  
        //         })
        //         .catch(error => console.log(error));
        this.setState({
            tasks:api.search_tasks
        })
    };

    render(){
        const tasks=this.state.tasks;
        return (

            <div style={{width:'100vw',height:'100vh',
            display:'flex',flexDirection: 'column'}}>

                {/* header */}
                <HeaderBarComponent/>

                <div style={{width:'100vw',display:'flex',flexDirection: 'row',
                    paddingBottom:100,paddingTop:50,}}>

                    
                    <div style={{flex:1}}/>
                    {/* filters */}
                    <div style={{flex:2}}>
                        <FilterComponent  
                            category={this.state.category}
                            clickSearch={this.search}
                            updateInputs={this.updateInputs} />
                    </div>

                    <div style={{flex:0.5}}/>

                    <div style={{flex:5.5}}>
                        {
                            tasks.length===0?
                            <text style={{fontSize: TEXT_SIZES.NORMAL,color:BLACK}}>
                                Don't find any tasks 
                            </text>
                            :
                            <TaskListComponent tasks={tasks}/>
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
