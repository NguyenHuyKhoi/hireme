//import from library 
import React, {Component} from 'react'

import HeaderListComponent from '../common/header_list.component'
import PaginationComponent from '../common/pagination.component';
import TaskItemComponent from './task_item.component'

export default class TaskListComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            first_item_index:0,
            last_item_index:Math.min(3,this.props.tasks.length-1)
        }
    }

    switchPage=(l,r)=>{
        this.setState({
            first_item_index:l,
            last_item_index:r
        })
    }

    render(){
        const tasks=this.props.tasks;
        const l=this.state.first_item_index;
        const r=this.state.last_item_index;
        console.log('freelancer_list',l,r)
        return (

            <div style={styles.container}>
              
                <HeaderListComponent title='Danh sách dự án' is_sort={true}/>
                
        

                <div style={styles.body}>
                {
                    tasks.slice(l,r+1).map((item,index)=>
                        <TaskItemComponent task={item} key={''+index}/>
                    )
                }
                </div>

                <PaginationComponent    
                    onClickPage={(l,r)=>this.switchPage(l,r)}
                    items={tasks.length} items_per_page={4} />
          
            </div>
                    
    
        )
    }
}


const styles={
    container:{
        width:'100%',
        display:'flex',
        flexDirection: 'column'
    },
    body:{
        width:'100%',
        display:'flex',
        flexDirection: 'column'
    }
}
