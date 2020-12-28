//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import SidebarComponent from '../../components/common/side_bar.component'
import PostTaskProfileComponent from '../../components/task/post_task_profile.component'
import { routePaths, SIDEBAR_RATIO, TEXT_SIZES,PADDING_BODY_DASHBOARD, CATEGORIES_DOMAIN } from '../../utils/constants'
import {GRAY_6 } from '../../utils/palette'
import ButtonComponent from '../../components/common/button.component'
import HeaderListComponent from '../../components/common/header_list.component'
import api from '../../sample_db/fake_api_responses.json'

import {connect }from 'react-redux'
import * as action from '../../redux/action/user.action'

import firebase from '../../firebase/firebase'

class DashBoardTaskPostScreen extends Component {


    updateInputs=async (field,value)=>{
        await this.setState({
            [field]:value
        })

        console.log('inputs_nows:',JSON.stringify(this.state)) 
    };


    post=async ()=>{
        await firebase.postTask(this.props.user_infor.id,this.state);
        alert('Đăng dự án thành công!');
    }


    render(){
        return (

            <div style={styles.container}>

                <SidebarComponent/>

                <div style={styles.body}>

                    <div style={{display:'flex',flex:1,flexDirection: 'column'}}>

                        <HeaderListComponent title='Đăng dự án'/>

                        <div style={styles.form}>
                            <PostTaskProfileComponent 
                                category={this.state!==null && this.state.category!==undefined
                                    ?
                                    this.state.category
                                    :
                                    CATEGORIES_DOMAIN[0].name}
                                updateInputs={this.updateInputs}/>
                        </div>
                      

                        <Link 
                            to={routePaths.DASHBOARD_TASK_LIST}
                            onClick={this.post}
                            style={styles.btn_container}>
                            <ButtonComponent label='Đăng' height={60}/>
                        </Link>

                    </div>
               
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
    },
    form :{
        flex:1,
        marginTop:30
    },
    btn_container:{
        marginTop:50,
        width:'25%',
        textDecoration:'none'
    }
}

const mapStateToProps = state => ({
	user_infor: state.user_infor,
});

export default connect(mapStateToProps,action)(DashBoardTaskPostScreen)
