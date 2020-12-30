//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../common/button.component'
import LabeledInputComponent from '../input/labeled_input.component'
import { BLACK, BLUE_1, GREEN_1, WHITE } from '../../utils/palette'
import { TEXT_SIZES } from '../../utils/constants'
import NumberInputComponent from '../input/number_input.component'

import firebase from '../../firebase/firebase'
import DateInputComponent from '../input/date_input.component'
export default class NewStageItemComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            title:'',
            new_stage:{}
        }
        var curr = new Date();
        curr.setDate(curr.getDate() + 3);
        this.deadline = curr.toISOString().substr(0,10);
    }


    updateInput=(part,field,value)=>{
        console.log('update_inputs_new_stage:',part,field,value)
        this.setState({
            [part]:{
                ...this.state[part],
                [field]:value
            }
        });
    }

    validateNewStage=(e)=>{
        if (e==={}) {
            return ('Vui lòng điền đủ các trường!');
        };

        let fields=['title','end_time','process'];
        let is_empty=false;
        fields.map(item=>{
            if (e[item]===undefined || e[item]==='') is_empty=true;
        });

        if (is_empty){
            return('Vui lòng điền đủ các trường!');
        };
        return '';
        
    }

    addStage=async ()=>{
        let new_stage=this.state.new_stage

       let err_msg= this.validateNewStage(new_stage);
       if (err_msg!=='') {
           alert(err_msg);
           return;
        };

        let task=this.props.task;

        await firebase.push('/task/'+task.id+'/stages/',{
            title:new_stage.title,
            end_time:new_stage.end_time,
            start_time:task.stage_start_time,
            process:new_stage.process
        });

        await firebase.set('/task/'+task.id+'/process/',new_stage.process)
        await firebase.set('/task/'+task.id+'/stage_start_time/',new_stage.end_time)

        alert('Thêm giai đoạn thành công.');
        this.updateInput('new_stage','title','');
    }
    

    render(){

        const task=this.props.task;
        const new_stage=this.state.new_stage;
        let {stage_start_time,deadline,process}=task;

        console.log('new_stage_render:',stage_start_time,deadline,process)
        return (
            <div style={styles.container}>   

                <div style={styles.timeline}/>

                <div style={styles.header}>

                    <input 
                        style={styles.header_title}
                        value={new_stage.title!==undefined?new_stage.title:''}
                        onChange={e=>this.updateInput('new_stage','title',e.target.value)}
                        placeholder='Mô tả giai đoạn...'
                    />
                   
                </div> 

                <div style={styles.body}>

                    <div style={styles.inner_body}>

                            <div style={styles.content}>
                                <DateInputComponent 
                                    label='Thời hạn :' 
                                    min_date={stage_start_time}
                                    max_date={deadline}
                                    onChange={(value)=>this.updateInput('new_stage','end_time',value)}/>

                                <div style={{width:'100%',marginTop:20}}>

                                    <NumberInputComponent 
                                        label='Tiến độ đạt được:' 
                                        domain={[process,100]}
                                        unit='%'
                                        value={[process]}
                                        onChange={(value)=>this.updateInput('new_stage','process',value)}/>
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


