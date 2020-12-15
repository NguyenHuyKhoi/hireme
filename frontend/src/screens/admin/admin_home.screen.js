//import from library 
import React, {Component} from 'react'
import AuthModal from '../../components/common/auth.modal'
import SidebarComponent from '../../components/common/side_bar.component'
import { PADDING_BODY_DASHBOARD, SIDEBAR_RATIO } from '../../utils/constants'
import { GRAY_6 } from '../../utils/palette'
import api from '../../sample_db/fake_api_responses.json'
export default class AdminHomeScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            tasks:[]
        }
    }

    componentDidMount=()=>{
        this.setState({
            tasks:api.get_task_list
        })
    }
    render(){
        return (
            <div style={styles.container}>

             
                <SidebarComponent is_admin={true}/>
          
                <div style={styles.body}>
                        hello
                </div>

            </div>
            
        )
    }
}
const styles={
    container:{
        width:'100vw',
        backgroundColor:GRAY_6,
        display:'flex',
        flexDirection: 'row'
    },
    body:{
        display:'flex',
        flex:SIDEBAR_RATIO,
        padding:PADDING_BODY_DASHBOARD
    }
}

