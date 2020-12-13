//import from library 
import React, {Component} from 'react'
import Modal from 'react-modal';
import { TEXT_SIZES } from '../../utils/constants';
import { BLACK, RED_1 } from '../../utils/palette';
import ButtonComponent from '../common/button.component';
export default class BanTaskModal extends Component {

    render(){
        const is_open=this.props.is_open
        return (
            <Modal
                isOpen={is_open}
                style={{ 
                    content : {
                        top                   : '50%',
                        left                  : '50%',
                        right                 : 'auto',
                        bottom                : 'auto',
                        marginRight           : '-50%',
                        transform             : 'translate(-50%, -50%)'
                        } }}>
                        <div style={{display: 'flex',flexDirection: 'column',
                            alignItems:'center',justifyContent:'center',
                            width: '25vw',height: '25vh',borderRadius:6,
                            padding:15}}>
                            <text style={{fontSize: TEXT_SIZES.NORMAL,color:BLACK}}>
                                Ban this task?
                            </text>

                            <text style={{marginTop:5,fontSize: TEXT_SIZES.SMALL,color:BLACK,
                                textAlign:'center'}}>
                                Only when task is on bidding by freelancers.
                                When task is undertaked by a freelancer, admin only ban it 
                                    from the report from company or freelancer.
                            </text>

                            <div style={{width: '100%',display: 'flex',flexDirection: 'row',
                                marginTop:25,
                                justifyContent:'space-between'}}>
                                <div style={{flex:1,marginRight: 50}}>
                                    <ButtonComponent label='Back' onClick={this.props.clickBack}/>
                                </div>
                                <div style={{flex:1}}>
                                    <ButtonComponent label='Ban' color={RED_1}
                                        onClick={this.props.clickBan}/>
                                </div>
                            </div>
                        </div>
                </Modal>
                    
    
        )
    }
}
