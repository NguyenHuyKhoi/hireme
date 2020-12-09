//import from library 
import React, {Component} from 'react'
import Modal from 'react-modal';
import { inputField } from '../../redux/constant/input.constant';
import { textSizes } from '../../utils/constants';
import { BLACK, GRAY_3, GREEN_1, RED_1 } from '../../utils/palette';
import ButtonComponent from '../common/button.component';
import TextareaInputComponent from './textarea_input.component'
export default class ReviewTaskModal extends Component {

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
                            <text style={{fontSize: textSizes.NORMAL,color:BLACK}}>
                                Review :
                            </text>

                            <TextareaInputComponent hide_label={true} input_field={inputField.TASK_REVIEW} />
                        

                            <div style={{width: '100%',display: 'flex',flexDirection: 'row',
                                marginTop:25,
                                justifyContent:'space-between'}}>
                                <div style={{flex:1,marginRight: 50}}>
                                    <ButtonComponent label='Back'
                                         onClick={this.props.clickBack}/>
                                </div>
                                <div style={{flex:1}}>
                                    <ButtonComponent label='Review' color={GREEN_1}
                                        onClick={this.props.clickReview}/>
                                </div>
                            </div>
                        </div>
                </Modal>
                    
    
        )
    }
}
