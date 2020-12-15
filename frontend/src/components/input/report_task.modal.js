//import from library 
import React, {Component} from 'react'
import Modal from 'react-modal';
import { TEXT_SIZES } from '../../utils/constants';
import { BLACK, RED_1 } from '../../utils/palette';
import ButtonComponent from '../common/button.component';
import TextareaInputComponent from './textarea_input.component'
export default class ReportTaskModal extends Component {

    render(){
        const is_open=this.props.is_open
        return (
            <Modal
                isOpen={is_open}
                style={styles.modal}>

                <div style={styles.container}>
                    <text style={styles.title}>
                        Why do you report this task ?
                    </text>

                    <TextareaInputComponent 
                        onChange={value=>this.props.updateInputs('modal_content',value)}
                        hide_label={true}  />
                

                    <div style={styles.footer}>
                        <div style={{...styles.btn_container,marginRight: 50}}>
                            <ButtonComponent label='Back' 
                                onClick={this.props.clickBack}/>
                        </div>
                        <div style={styles.btn_container}>
                            <ButtonComponent label='Report' color={RED_1}
                                onClick={this.props.clickReport}/>
                        </div>
                    </div>
                </div>
            </Modal>
            
    
        )
    }
}


const styles={
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
        width: '30vw',
        height: '40wh',
        borderRadius:6,
        padding:15
    },
    title:{
        fontSize: TEXT_SIZES.NORMAL,
        color:BLACK
    },
    footer:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginTop:25,
        justifyContent:'space-between'
    },
    btn_container:{
        flex:1
    }
}
