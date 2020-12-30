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


    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount=async ()=>{
        let balance=await firebase.get('/payment/'+this.props.user_infor.id+'/balance/');
        await this.setState({
            balance
        })
    }
    updateInput=(part,field,value)=>{
        console.log('update_input_task:',part,field,value)
        this.setState({
            [part]:{
                ...this.state[part],
                [field]:value
            }
        });
    }

    validateTask=(e)=>{
        if (e===undefined) {
            return ('Vui lòng điền đủ các trường!');
        };

        let fields=['task_name','min_budget','max_budget','category','skills','description'];
        let is_empty=false;
        fields.map(item=>{
            if (e[item]===undefined || e[item]==='') is_empty=true;
        });

        if (is_empty){
            return('Vui lòng điền đủ các trường!');
        };

        if (this.state.task.min_budget>this.state.balance){
            return ('Tài khoản bạn chỉ còn '+this.state.balance+'vnd, không thể đăng việc với mức giá tối thiểu '+this.state.task.min_budget+'vnd')

        }
        return '';
        
    }

    post=async ()=>{
        let t=this.state.task

        let err_msg= this.validateTask(t);
        if (err_msg!=='') {
            alert(err_msg);
            return;
        };

        console.log('taskPost:',t,this.props.user_infor.id)

        await firebase.postTask(this.props.user_infor.id,t);
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
                                category={this.state.task!==undefined && this.state.task.category!==undefined
                                    ?
                                    this.state.task.category
                                    :
                                    CATEGORIES_DOMAIN[0].name}
                                updateInput={this.updateInput}/>
                        </div>
                      

                        <Link 
                            // to={routePaths.DASHBOARD_TASK_LIST}
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
