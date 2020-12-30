//import from library 
import React, {Component} from 'react'
import FooterBarComponent from '../components/common/footer_bar.component';

import HeaderBarComponent from '../components/common/header_bar.component';
import TaskListComponent from '../components/task/task_list.component';
import FilterComponent from '../components/input/filter.component';

import api from '../sample_db/fake_api_responses.json'
import { CATEGORIES_DOMAIN, TEXT_SIZES } from '../utils/constants';
import { BLACK } from '../utils/palette';

import firebase from '../firebase/firebase'

export default class TaskSearchScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            tasks:[],
            filter:{}
        }
    }


    search=async ()=>{
        let arr=await firebase.searchTask(this.state.filter)
        this.setState({
            tasks:arr
        })
    }

    componentDidMount=async ()=>{
        console.log('')
        await this.search();
    }

    updateInput=(part,field,value)=>{
        console.log('update_inputs_search:',part,field,value)
        this.setState({
            [part]:{
                ...this.state[part],
                [field]:value
            }
        });
    };

  


    render(){
        const tasks=this.state.tasks;
        const category=this.state.filter!==undefined && this.state.filter.category!==undefined?
                this.state.filter.category
                :
                ''
        return (

            <div style={styles.container}>

                {/* header */}
                <HeaderBarComponent/>

                <div style={styles.body}>

                    
                    <div style={{flex:1}}/>
                    {/* filters */}
                    <div style={{flex:2}}>
                        <FilterComponent  
                            category={category}
                            is_freelancer_search={false}
                            clickSearch={this.search}
                            updateInput={this.updateInput} />
                    </div>

                    <div style={{flex:0.5}}/>

                    <div style={{flex:5.5}}>
                            <TaskListComponent tasks={tasks}/>
                    </div>
                 
                    <div style={{flex:1}}/>
                </div>


                {/* footer */}
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
