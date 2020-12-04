//import from library 
import React, {Component} from 'react'
import FooterBarComponent from '../components/common/footer_bar.component';

import HeaderBarComponent from '../components/common/header_bar.component';
import TaskFilterComponent from '../components/task/task_filter.component';
import TaskListComponent from '../components/task/task_list.component';

export default class TaskSearchScreen extends Component {
    render(){
        return (

            <div style={{width:'100vw',height:'100vh',backgroundColor: '#392855',
                display:'flex',flexDirection: 'column'}}>

                {/* header */}
                <HeaderBarComponent/>

                {/* body */}
                <div style={{width:'100vw',display:'flex',flexDirection: 'row',
                    justifyContent: 'center',
                    paddingBottom:100,paddingTop:50,}}>

                    
                    {/* filters */}
                    <TaskFilterComponent/>
                    {/* freelancer list  */}
                    <TaskListComponent/>
                </div>


                {/* footer */}
                <FooterBarComponent/>
            </div>
            
        )
    }
}
