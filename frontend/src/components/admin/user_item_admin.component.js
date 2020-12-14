//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths, TEXT_SIZES } from '../../utils/constants'
import { WHITE,GRAY_4, BLACK, YELLOW_1, GRAY_2, GRAY_3, BLUE_1, RED_1 } from '../../utils/palette';
import ButtonComponent from '../common/button.component';
import RateScoreComponent from '../common/rate_score.component'
import SmallFieldComponent from '../common/small_field.component';
import BanUserModal from './ban_user.modal'
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

    banUser=()=>{
        alert('Ban User :');
        this.closeBanModal();
    }
    render(){
        const user=this.props.user;
        const index=this.props.index;
        return (
            
            <div style={{display:'flex',width:'100%',height:80,alignSelf:'baseline',
                backgroundColor:index%2===0?WHITE:GRAY_3,
                flexDirection: 'row'}}>

                <BanUserModal is_open={this.state.open_ban_modal}
                    clickBack={this.closeBanModal}
                    clickBan={this.banUser} />

    
                <div style={{flex:0.5}}/>
                <div style={{display:'flex',flex:6,flexDirection: 'column',justifyContent:'center'}}>

                    <div style={{display:'flex',flexDirection:'row'}}>
                        <text style={{fontSize:TEXT_SIZES.NORMAL,color:BLACK }}>
                            {user.name}
                        </text>

                     
                    </div>

                    <div style={{width:'100%',display:'flex',flexDirection:'row',
                        justifyContent: 'space-between'}}>

                        <div style={{display:'flex',flex:1}}>
                            <text style={{fontSize:TEXT_SIZES.SMALL,color:BLACK}}>
                                {'Type : '+user.user_type}
                            </text>
                        </div>

                        <div style={{display:'flex',flex:1}}    >
                            <text style={{fontSize:TEXT_SIZES.SMALL,color:BLACK}}>
                                {'Email : '+user.email}
                            </text>
                        </div>
                    </div>
                
        
                </div>

                <div style={{flex:4,display:'flex',justifyContent: 'center',alignItems: 'center'}}>
                    <Link 
                        to={user.user_type==='freelancer'?
                            routePaths.FREELANCER_DETAIL+`/${user.id}`
                            :
                            routePaths.COMPANY_DETAIL+`/${user.id}`
                        }
                        style={{textDecoration:'none',width:'80%',marginRight: 25}}>
                        <ButtonComponent label='Detail' color={BLUE_1}/>
                    </Link>

                    <div 
                        onClick={this.openBanModal}  
                        style={{textDecoration:'none',width:'80%',marginRight: 25}}>
                        <ButtonComponent label='Ban' color={RED_1}/>
                    </div>
                </div>
                
                <div style={{flex:0.5}}/>
            </div>


    
        )
    }
}
