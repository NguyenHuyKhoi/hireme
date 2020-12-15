//import from library 
import React, {Component} from 'react'
import Modal from 'react-modal';
import { TEXT_SIZES } from '../../utils/constants';
import { BLACK, RED_1 } from '../../utils/palette';
import ButtonComponent from '../common/button.component';
export default class BanUserModal extends Component {

    render(){
        const is_open=this.props.is_open
        return (
            <Modal
                isOpen={is_open}
                style={styles.modal}>
                        <div style={styles.container}>
                            <text style={styles.normal_text}>
                                Ban this user?
                            </text>

                            <text style={styles.small_text}>
                                When user is banner ,she/he can't log in anymore.
                                You can unban any time.
                            </text>

                            <div style={styles.footer}>
                                <div style={{...styles.btn_container,marginRight: 50}}>
                                    <ButtonComponent label='Back' onClick={this.props.clickBack}/>
                                </div>
                                <div style={styles.btn_container}>
                                    <ButtonComponent label='Ban' color={RED_1}
                                        onClick={this.props.clickBan}/>
                                </div>
                            </div>
                        </div>
                </Modal>
                    
    
        )
    }
}

const styles={
    footer:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginTop:25,
        justifyContent:'space-between'
    },
    btn_container:{
        flex:1
    },
    modal:{ 
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
        } 
    },
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        width: '25vw',
        height: '25vh',
        borderRadius:6,
        padding:15
    },
    normal_text:{
        fontSize: TEXT_SIZES.NORMAL,
        color:BLACK
    },
    small_text:{
        marginTop:5,
        fontSize: TEXT_SIZES.SMALL,
        color:BLACK,
        textAlign:'center'
    },
    btn_close:{
        fontSize: TEXT_SIZES.SMALL,
        color:RED_1
    }
}
