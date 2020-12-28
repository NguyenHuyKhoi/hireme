//import from library 
import React, {Component} from 'react'
import { WHITE } from '../../utils/palette'
import HeaderListComponent from '../common/header_list.component'
import PaginationComponent from '../common/pagination.component';
import UserItemAdminComponent from './user_item_admin.component'

export default class UserListAdminComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            first_item_index:0,
            last_item_index:Math.min(4,this.props.users.length-1)
        }
    }

    switchPage=(l,r)=>{
        this.setState({
            first_item_index:l,
            last_item_index:r
        })
    }
    render(){
        const users=this.props.users;

        const l=this.state.first_item_index;
        const r=this.state.last_item_index;
        return (
            <div style={styles.container}>
               
                <HeaderListComponent   title='Users'/>
                

                <div style={styles.body}>
                {
                    users.slice(l,r+1).map((item,index)=>
                        <UserItemAdminComponent  
                            user={item}
                            key={''+index}
                            index={index}/>
                    )
                }
                </div>

                <PaginationComponent    
                    onClickPage={(l,r)=>this.switchPage(l,r)}
                    items={users.length} items_per_page={5} />
            

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
