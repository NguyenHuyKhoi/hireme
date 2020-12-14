//import from library 
import React, {Component} from 'react'
import Modal from 'react-modal';

import { TEXT_SIZES } from '../../utils/constants';
import { BLACK, RED_1, YELLOW_1 } from '../../utils/palette';
import ButtonComponent from '../common/button.component';
import TextareaInputComponent from './textarea_input.component'

export default class GiveupTaskModal extends Component {
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
                            width: '30vw',height: '40wh',borderRadius:6,
                            padding:15}}>
                            <text style={{fontSize: TEXT_SIZES.NORMAL,color:BLACK}}>
                                Why do you give up this task ?
                            </text>

                            <TextareaInputComponent
                                onChange={value=>this.props.onChangeContent(value)}
                                hide_label={true}/>
                        

                            <div style={{width: '100%',display: 'flex',flexDirection: 'row',
                                marginTop:25,
                                justifyContent:'space-between'}}>
                                <div style={{flex:1,marginRight: 50}}>
                                    <ButtonComponent label='Back' onClick={this.props.clickBack}/>
                                </div>
                                <div style={{flex:1}}>
                                    <ButtonComponent label='Give up' color={YELLOW_1}
                                        onClick={this.props.clickGiveup}/>
                                </div>
                            </div>
                        </div>
                </Modal>
                    
    
        )
    }
}
