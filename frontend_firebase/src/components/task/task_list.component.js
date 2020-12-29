//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants';
import { BLACK } from '../../utils/palette';

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
        let l=this.state.first_item_index;
        let r=this.state.last_item_index;

        if (l===0) {
            r=Math.min(3,this.props.tasks.length-1);
        }
        return (

            <div style={styles.container}>
              
                <HeaderListComponent title='Danh sách dự án' is_sort={true}/>
                
        

                <div style={styles.body}>
                {
                    tasks.length===0?
                    <text style={{fontSize: TEXT_SIZES.NORMAL,color:BLACK}}>
                        Không tìm thấy dự án nào ... 
                    </text>
                    :
                    null
                }
                {
                    tasks.slice(l,r+1).map((item,index)=>
                        <TaskItemComponent task={item} key={''+index}/>
                    )
                }
                </div>

                {
                    tasks.length===0?
                    null
                    :
                    <PaginationComponent    
                        onClickPage={(l,r)=>this.switchPage(l,r)}
                        items={tasks.length} items_per_page={4} />
                }
                
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
