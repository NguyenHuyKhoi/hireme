//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../common/button.component'
import LabeledInputComponent from '../input/labeled_input.component'
import { BLACK, BLUE_1, GREEN_1, WHITE } from '../../utils/palette'
import { TEXT_SIZES } from '../../utils/constants'
import NumberInputComponent from '../input/number_input.component'

import firebase from '../../firebase/firebase'
export default class NewStageItemComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            title:''
        }
        var curr = new Date();
        curr.setDate(curr.getDate() + 3);
        this.deadline = curr.toISOString().substr(0,10);
    }


    updateInputs=(field,value)=>{
        console.log('updateInputs:',field,value);
        this.setState({
            [field]:value
        });
    }


    addStage=async ()=>{
        if (this.state.title===undefined || this.state.end_time===undefined || this.state.process===undefined){
            alert('Vui lòng điền đủ thông tin.');
            return 
        }
        else {
            await firebase.push('/task/'+this.props.task_id+'/stages/',{
                title:this.state.title,
                end_time:this.state.end_time,
                process:this.state.process
            });

            alert('Thêm giai đoạn thành công.');
            this.updateInputs('title','');
        }
    }
    

    render(){

        return (
            <div style={styles.container}>   

                <div style={styles.timeline}/>

                <div style={styles.header}>

                    <input 
                        style={styles.header_title}
                        value={this.state.title}
                        onChange={e=>this.updateInputs('title',e.target.value)}
                        placeholder='Mô tả giai đoạn...'
                    />
                   
                </div> 

                <div style={styles.body}>

                    <div style={styles.inner_body}>

                            <div style={styles.content}>
                                <LabeledInputComponent 
                                    label='Thời hạn :' 
                                    type='date'
                                    value={this.deadline}
                                    onChange={(value)=>this.updateInputs('end_time',value)}/>

                                <div style={{width:'100%',marginTop:20}}>
                                    <NumberInputComponent 
                                        label='Tiến độ đạt được:' 
                                        domain={[0,100]}
                                        unit='%'
                                        value={[0]}
                                        onChange={(value)=>this.updateInputs('process',value)}/>
                                </div>
                            
                            </div>  
                       
                            <div style={styles.btn_container}>
                                <ButtonComponent 
                                    onClick={this.addStage}
                                    label='Thêm giai đoạn'/>
                            </div>
                            
                    </div>
                </div>

            </div>


        )
    }
}


const styles={
    container:{
        width:420,
        height:525,
        display:'flex',
        flexDirection: 'column'
    },
    timeline:{
        width:'100%',
        height:60
    },
    header:{
        marginTop: 5,
        width:'80%',
        height:45,
        backgroundColor: GREEN_1,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:15
    },
    header_title:{
        fontSize:TEXT_SIZES.NORMAL,
        color:WHITE,
        height: 35,
        backgroundColor: 'rgba(0,0,0,0)',
        outline:'none',
        borderColor:'rgba(0,0,0,0)'
    },
    body:{
        display:'flex',
        flex:1,
        width:'80%',
        backgroundColor: WHITE,
        overflowY:'scroll', 
        boxShadow:'0px 0px 30px 5px  #707070'
    },
    inner_body:{
        display:'flex',
        flex:1,
        flexDirection:'column',
        padding: 20
    },
    content: {
        width:'80%'
    },
    btn_container:{
        marginTop:60,
        width: '100%',
        paddingBottom:40,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
}


