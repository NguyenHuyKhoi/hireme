//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK, BLUE_1, BLUE_2, GRAY_3, GRAY_4, GRAY_5, GREEN_1, RED_1, WHITE } from '../../utils/palette'
import ButtonComponent from '../common/button.component'
import RateScoreComponent from '../common/rate_score.component'
import LabelInputComponent from '../input/labeled_input.component'
// + id (integer )
//    + time (string)
//    + score (float)
//    + content (string)
//    + reviewer : { id ,name ,avatar } ,trong bảng Review_Task
//        ** is_company == true => reviewer là 1 company ,đánh giá freelancer
//        ** is_company == false => reviewer là 1 freelancer ,đánh giá company 
//    + task : { id ,name }

export default class ExperienceItemComponent extends Component {

    constructor(props){
        super(props);
        this.state={};
    }
    updateInput=(part,field,value)=>{
        console.log('update_inputs_exp:',part,field,value)
        this.setState({
            [part]:{
                ...this.state[part],
                [field]:value
            }
        });
    }

    add=()=>{
        let e=this.state.new_experience;
        if (e===undefined) {
            alert('Vui lòng điền đủ các trường!');
            return;
        };
        let fields=['role','company','start_time','end_time','description'];
        let is_empty=false;
        fields.map(item=>{
            if (e[item]===undefined || e[item]==='') is_empty=true;
        });

        if (is_empty){
            alert('Vui lòng điền đủ các trường!');
            return;
        };
        
        if (e.start_time>e.end_time){
            // || e.start_time>(new Date()) || e.end_time>(new Date())){
            alert('Vui lòng xem lại các mốc thời gian ');
            return ;
        }

        this.props.addItem({
            ...e,
            id:new Date().getTime()
        });
     
    }

    
    delete=()=>{
        this.props.deleteItem(this.props.experience.id);
    }
    render(){
       
        const experience=this.props.experience;
        console.log('experience_item :',experience)
        const is_new=this.props.is_new!==undefined?this.props.is_new:false;
        const is_edit=this.props.is_edit!==undefined?this.props.is_edit:false;

        const index=this.props.index;

        const input_not_disabled = (is_edit && is_new)
        const btn_add_visible= (is_edit && is_new)
        const btn_remove_visible= (is_edit===true && is_new===false)
        // if  on edit_mode (freelancer_setting_screen) :(is_edit === true )
        //   + new_experience_item : (is_new===true)  input is not disabled, btn_add is visible (not disable);
        //   + old_experience_items: (is_new===false) input is disable ,btn_remove is visible (not disable);

        //if on view_mode (freelancer_detail_screen) : is_edit === false
        //   + new_experience_item :  (is_new===true)input is disable ,btn_add is invisiable (disable); 
        //   + old_experience_item :  (is_new===false) input is disable ,btn_remobe is invisiable (disable); 
        const disabled=!(is_edit && is_new );
        return (
            <div  
                style={{
                    ...styles.container,
                    backgroundColor:index%2==0?WHITE:GRAY_4}}>    

                    <div style={styles.row1}>

                        <div style={{width:'45%'}}>
                            <LabelInputComponent 
                                label='Chức vụ'
                                placeholder='Chức vụ của bạn'
                                disabled={!input_not_disabled}
                                hide_label={true}
                                inline={true}
                                onChange={value=>this.updateInput('new_experience','role',value)}
                                value={is_new?'':experience.role}
                                />
                        </div>
                        {
                            btn_add_visible?
                            <div 
                            onClick={this.add}
                            style={{...styles.action_btn,paddingRight:10,paddingLeft:10,paddingTop:5,paddingBottom:5,backgroundColor:GREEN_1}}>
                                <text style={styles.action_btn_label}>
                                    +
                                </text>
                            </div>
                            :
                            null

                        }

                        {
                            btn_remove_visible?
                            <div 
                            onClick={this.delete}
                            style={{...styles.action_btn,paddingRight:10,paddingLeft:10,paddingTop:5,paddingBottom:5,backgroundColor: RED_1}}>
                                <text style={styles.action_btn_label}>
                                    -
                                </text>
                            </div>
                            :
                            null

                        }
                       
                    </div>
                    
                    

                    <div style={styles.row2}>
                        <div style={styles.row2_col1}>
                            <LabelInputComponent 
                                label='Công ty'
                                placeholder='Nhập tên công ty ... '
                                size={TEXT_SIZES.SMALL}
                                disabled={!input_not_disabled}
                                hide_label={true}
                                inline={true}
                                onChange={value=>this.updateInput('new_experience','company',value)}
                                value={is_new?'':experience.company}
                                />
                        </div>
                        
                        <div style={{width:'10%'}}/>

                        <div style={styles.row2_col2}>
                            <div style={{display:'flex',flex:1,marginRight: 20}}>
                                <LabelInputComponent
                                    label='Từ' 
                                    size={TEXT_SIZES.SMALL}
                                    disabled={!input_not_disabled}
                                    inline={true}
                                    hide_label={true}
                                    type='date'
                                    onChange={value=>this.updateInput('new_experience','start_time',value)}
                                    value={is_new?new Date():experience.start_time}
                                    />
                            </div>

                
                          
                            <div style={{display:'flex',flex:1}}>
                            <LabelInputComponent 
                                label='Đến'
                                size={TEXT_SIZES.SMALL}
                                disabled={!input_not_disabled}
                                hide_label={true}
                                inline={true}
                                type='date'
                                onChange={value=>this.updateInput('new_experience','end_time',value)}
                                value={is_new?new Date():experience.end_time}
                                />
                            </div>
                          
                        </div>
                        <div style={{width:'5%'}}/>
                        
                    </div>

                    <div style={styles.row3}>
                        <LabelInputComponent 
                            label='Mô tả ngắn'
                            placeholder='Mô tả ngắn về công việc...'
                            size={TEXT_SIZES.SMALL}
                            disabled={!input_not_disabled}
                            inline={true}
                            hide_label={true}
                            onChange={value=>this.updateInput('new_experience','description',value)}
                            value={is_new?'':experience.description}
                            />
                    </div>
                    
          
            </div>
        )
    }
}

const styles={
    container:{
        display:'flex',
        width:'100%',
        height:150,
        flexDirection: 'column',
        justifyContent:'center',
    },
    row1:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    action_btn:{
        marginRight:20
    },
    action_btn_label:{
        fontSize: TEXT_SIZES.NORMAL,
        color:WHITE
    },
    row2:{
        display:'flex',
        width:'100%',
        flexDirection: 'row',
        marginTop:10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    row2_col1:{
        width:'30%',
        marginRight:40
    },
    row2_col2:{
        display:'flex',
        flex:1,
        flexDirection:'row'
    },
    row3:{
        width:'90%',
        marginTop:3
    }
}
