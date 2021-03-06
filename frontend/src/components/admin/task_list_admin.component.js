//import from library 
import React, {Component} from 'react'
import { WHITE } from '../../utils/palette'
import HeaderListComponent from '../common/header_list.component'
import PaginationComponent from '../common/pagination.component';
import TaskItemAdminComponent from './task_item_admin.component'

export default class TaskListAdminComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            first_item_index:0,
            last_item_index:Math.min(4,this.props.tasks.length-1)
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
        return (
            <div style={styles.container}>
               
                <HeaderListComponent   title='Tasks'/>
                
           

                <div style={styles.body}>
                {
                    tasks.slice(l,r+1).map((item,index)=>
                        <TaskItemAdminComponent  
                            task={item}
                            key={''+index}
                            index={index}/>
                    )
                }
                </div>

                
                <PaginationComponent    
                    onClickPage={(l,r)=>this.switchPage(l,r)}
                    items={tasks.length} items_per_page={5} />
            

            </div>
                    
    
        )
    }
}


const styles={
    container:{ 
        display:'flex',
        flex:1,
        flexDirection: 'column',
        backgroundColor: WHITE,
        boxShadow:'3px 5px 3px 3px #707070'
    },
    body:{
        display:'flex',
        flex:1,
        flexDirection: 'column'
    }
}