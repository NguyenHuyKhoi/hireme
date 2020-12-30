//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths, TEXT_SIZES } from '../../utils/constants'
import { WHITE,GRAY_4, BLACK, YELLOW_1, GRAY_2, GRAY_3, BLUE_1, RED_1, GREEN_1 } from '../../utils/palette';
import ButtonComponent from '../common/button.component';
import RateScoreComponent from '../common/rate_score.component'
import SmallFieldComponent from '../common/small_field.component';
import BanUserModal from './ban_user.modal'

import firebaseConfig from '../../firebase/config'
import firebase from '../../firebase/firebase'
import default_logo from '../../assets/images/logo.png'
export default class UserItemAdminComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            open_ban_modal:false,
        }
    }

    openBanModal=()=>{
        this.setState({
            open_ban_modal:true
        })
    }

    closeBanModal=()=>{
        this.setState({
            open_ban_modal:false
        })
    }

    banUser=async ()=>{
        await firebase.update('/user/'+this.props.user.id,{is_banned:true})
        alert('Đã cấm người dùng này.')
        this.closeBanModal();
    }

    unBanUser=async()=>{
        await firebase.update('/user/'+this.props.user.id,{is_banned:false})
        alert('Đã khôi phục tài khoản của người dùng này.')
    }

    render(){
        const user=this.props.user;
        const index=this.props.index;
        return (
            
            <div style={{...styles.container,backgroundColor:index%2===0?WHITE:GRAY_3}}>

                <BanUserModal 
                    is_open={this.state.open_ban_modal}
                    clickBack={this.closeBanModal}
                    clickBan={this.banUser} />

    
                <div style={{flex:0.5}}/>

                <img src={user.avatar!==''?user.avatar:default_logo} 
                    style={{width: 50,height:50,borderRadius:25,marginRight: 20}}/>

                <div style={styles.col1}>

                    <div style={styles.col1_row1}>
                        <text style={styles.normal_text}>
                            {user.username}
                        </text>
                        {
                        user.is_banned===true?
                        <SmallFieldComponent
                                background_color={RED_1} 
                                label_color={WHITE} 
                                label={'Bị cấm'}/>
                            :
                            null
                        }
                    </div>

                   

                    <div style={styles.col1_row2}>

                        <div style={styles.field_container}>
                            <text style={styles.small_text}>
                                {'Type : '+user.type}
                            </text>
                        </div>

                        <div style={{display:'flex',flex:1}}    >
                            <text style={styles.small_text}>
                                {'Email : '+user.email}
                            </text>
                        </div>
                    </div>
                
        
                </div>

                <div style={styles.col2}>
                    <Link 
                        to={user.type==='freelancer'?
                            routePaths.FREELANCER_DETAIL+`/${user.id}`
                            :
                            routePaths.COMPANY_DETAIL+`/${user.id}`
                        }
                        style={styles.btn_container}>
                        <ButtonComponent label='Xem chi tiết' color={BLUE_1}/>
                    </Link>

                    {
                        user.is_banned===undefined || user.is_banned===false?
                        <div 
                            onClick={this.openBanModal}  
                            style={{textDecoration:'none',width:'80%',marginRight: 40}}>
                            <ButtonComponent 
                                label='Cấm' color={RED_1}/>
                        </div>
                        :
                        <div 
                            onClick={this.unBanUser}  
                            style={{textDecoration:'none',width:'80%',marginRight: 40}}>
                            <ButtonComponent 
                                label='Phục hồi' color={GREEN_1}/>
                        </div>

                    }
                   
                </div>
                
                <div style={{flex:0.5}}/>
            </div>


    
        )
    }
}

const styles={
    container:{
        display:'flex',
        width:'100%',
        height:80,
        alignSelf:'baseline',
        flexDirection: 'row',
        alignItems: 'center'
    },
    col1:{
        display:'flex',
        flex:6,
        flexDirection: 'column',
        justifyContent:'center'
    },
    col1_row1:{
        display:'flex',
        flexDirection:'row'
    },
    normal_text:{
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK ,
        marginRight: 20
    },
    col1_row2:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    field_container:{
        display:'flex',
        flex:1
    },
    small_text:{
        fontSize:TEXT_SIZES.SMALL,
        color:BLACK
    },
    col2:{
        flex:4,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn_container:{
        textDecoration:'none',
        width:'80%',
        marginRight: 25
    }
}
