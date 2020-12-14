//import from library 
import React, {Component} from 'react'
import SidebarComponent from '../../components/common/side_bar.component'
import UserListAdminComponent from '../../components/admin/user_list_admin.component'
import { SIDEBAR_RATIO,PADDING_BODY_DASHBOARD, TEXT_SIZES } from '../../utils/constants'
import { BLACK, GRAY_6 } from '../../utils/palette'
import api from '../../sample_db/fake_api_responses.json'
export default class AdminUserListScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            users:[]
        }
    }

    componentDidMount=()=>{
         //Call_API_Here
        // axios.get(BASE_URL+`/get_user_list`,{
        //         data:{
        //         }
        //     })
        //     .then(res => {
        //     })
        //     .catch(error => console.log(error));
        alert('Call API get_user_list ')
        this.setState({
            users:api.get_user_list_admin
        })
    }

    render(){
        const users=this.state.users;
        return (

            <div style={{width:'100vw',height:'100vh',backgroundColor: GRAY_6,
                display:'flex',flexDirection: 'row'}}>

                {/* sidebar */}
                <SidebarComponent is_admin={true} />
                <div style={{display:'flex',flex:SIDEBAR_RATIO,padding:PADDING_BODY_DASHBOARD}}>

                {
                    users.length===0?
                    <text style={{fontSize: TEXT_SIZES.NORMAL,color:BLACK}}>
                        There is not any users, both companies and freelancers.
                    </text>
                    :
                    <UserListAdminComponent users={users}/>
                }
                </div>
            </div>
            
        )
    }
}
