//import from library 
import React, {Component} from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { routePaths, textSizes } from '../../utils/constants';
import { BLACK, RED_1 } from '../../utils/palette';
import ButtonComponent from '../common/button.component';

class ReportItem extends Component{
    render(){
        return (
            <div style={{display: 'flex',flexDirection: 'column',
                alignItems:'center',justifyContent:'center',
                width: '100%',alignSelf: 'baseline',borderRadius:6,marginBottom:25}}>
                <Link 
                    to={routePaths.FREELANCER_DETAIL}
                    style={{fontSize: textSizes.NORMAL,color:BLACK,textDecoration:'none'}}>
                    From : freelancer1 
                </Link>
                <text style={{marginTop:5,fontSize: textSizes.SMALL,color:BLACK,
                    textAlign:'center'}}>
                    The task has many problems. I think admin should ban it early .The task has many problems. I think admin should ban it early The task has many problems. I think admin should ban it early 
                </text>

                <div style={{width: '100%',display: 'flex',flexDirection: 'row',
                    marginTop:15,
                    justifyContent:'space-between'}}>
                    <div style={{flex:1,marginRight: 50}}>
                        <ButtonComponent
                            onClick={this.props.clickReject}
                            height={35} label='Reject' />
                    </div>
                    <div style={{flex:1}}>
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
                            alignItems:'center',overflowX:'hidden',
                            width: '30vw',maxHeight:'50vh',overflowY:'scroll',borderRadius:6,
                            padding:15}}>
                                
                            <div style={{width: '100%',display: 'flex',flexDirection: 'row',
                                justifyContent:'flex-end'}}>
                                <text 
                                    onClick={this.props.clickClose}
                                    style={{fontSize: textSizes.SMALL,color:RED_1}}>
                                    Close
                                </text>
                            </div>
                            <text style={{fontSize: textSizes.BIG,color:BLACK,marginBottom:20}}>
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
