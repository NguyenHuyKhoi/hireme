//import from library 
import React, {Component} from 'react'
import SidebarComponent from '../../components/common/side_bar.component'
import UserListAdminComponent from '../../components/admin/user_list_admin.component'
import { SIDEBAR_RATIO,PADDING_BODY_DASHBOARD, TEXT_SIZES } from '../../utils/constants'
import { BLACK, GRAY_6 } from '../../utils/palette'
import api from '../../sample_db/fake_api_responses.json'

import firebase from '../../firebase/firebase'
import { toArray } from '../../utils/helper'

export default class AdminUserListScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            users:[]
        }
    }

    componentDidMount=async ()=>{
        let users= await firebase.get('/user/');
        await this.setState({
            users:toArray(users)
        })
    }

    render(){
        const users=this.state.users;
        return (

            <div style={styles.container}>

             
                <SidebarComponent is_admin={true} />
                <div style={styles.body}>

                {
                    users.length===0?
                    <text style={styles.text}>
                       Hiện hệ thống chưa có freelancer hay công ty nào đăng ký ...
                    </text>
                    :
                    <UserListAdminComponent users={users}/>
                }
                </div>
            </div>
            
        )
    }
}

const styles={
    container:{
        width:'100vw',
        height:'100vh',
        backgroundColor: GRAY_6,
        display:'flex',
        flexDirection: 'row'
    },
    body:{
        display:'flex',
        flex:SIDEBAR_RATIO,
        padding:PADDING_BODY_DASHBOARD
    },
    text:{
        fontSize: TEXT_SIZES.NORMAL,
        color:BLACK
    }
}

