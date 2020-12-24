//import from library 
import React, {Component} from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { routePaths, TEXT_SIZES } from '../../utils/constants';
import { BLACK, RED_1 } from '../../utils/palette';
import ButtonComponent from '../common/button.component';

class ReportItem extends Component{
    render(){
        return (
            <div style={styles.item_container}>

                <Link 
                    to={routePaths.FREELANCER_DETAIL}
                    style={styles.reporter_name}>
                    From : freelancer1 
                </Link>

                <text style={styles.item_content}>
                    The task has many problems. I think admin should ban it early .The task has many problems. I think admin should ban it early The task has many problems. I think admin should ban it early 
                </text>

                <div style={styles.item_footer}>

                    <div style={{...styles.item_btn_container,marginRight: 50}}>
                        <ButtonComponent
                            onClick={this.props.clickReject}
                            height={35} label='Reject' />
                    </div>

                    <div style={styles.item_btn_container}>
                        <ButtonComponent 
                            onClick={this.props.clickBanTask} 
                            height={35} label='Ban Task' color={RED_1}/>
                    </div>

                </div>
            </div>
        )

    }   
}
export default class ViewReportsModal extends Component {
    render(){
        const is_open=this.props.is_open
        return (
            <Modal
                isOpen={is_open}
                style={styles.modal}>

                        <div style={styles.container}>
                                
                            <div style={styles.btn_close_container}>
                                <text 
                                    onClick={this.props.clickClose}
                                    style={styles.btn_close}>
                                    Close
                                </text>
                            </div>
                            <text style={styles.title}>
                                Reports about task 
                            </text>

                            {
                                [1,2,3,4,5,6].map((item)=>
                                    <ReportItem
                                        clickReject={()=>this.props.clickReject(item)}
                                        clickBanTask={()=>this.props.clickBanTask(item)}
                                        />)
                            }

                            
                        </div>
                </Modal>
                    
    
        )
    }
}


const styles={
    item_container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        width: '100%',
        alignSelf: 'baseline',
        borderRadius:6,
        marginBottom:25
    },
    reporter_name:{
        fontSize: TEXT_SIZES.NORMAL,
        color:BLACK,
        textDecoration:'none'
    },
    item_content:{
        marginTop:5,
        fontSize: TEXT_SIZES.SMALL,
        color:BLACK,
        textAlign:'center'
    },
    item_footer:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginTop:15,
        justifyContent:'space-between'
    },
    item_btn_container:{
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
        overflowX:'hidden',
        width: '30vw',
        maxHeight:'50vh',
        overflowY:'scroll',
        borderRadius:6,
        padding:15
    },
    btn_close_container:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'flex-end'
    },
    btn_close:{
        fontSize: TEXT_SIZES.SMALL,
        color:RED_1
    },
    title:{
        fontSize: TEXT_SIZES.BIG,
        color:BLACK,
        marginBottom:20
    }
}