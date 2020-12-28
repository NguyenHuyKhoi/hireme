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
                                label='Role'
                                placeholder='Enter your role...'
                                disabled={!input_not_disabled}
                                hide_label={true}
                                inline={true}
                                value={is_new?'':experience.role}
                                />
                        </div>
                        {
                            btn_add_visible?
                            <div 
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
                                label='Company'
                                placeholder='Enter company name...'
                                size={TEXT_SIZES.SMALL}
                                disabled={!input_not_disabled}
                                hide_label={true}
                                inline={true}
                                value={is_new?'':experience.company_name}
                                />
                        </div>
                        
                        <div style={{width:'10%'}}/>

                        <div style={styles.row2_col2}>
                            <div style={{display:'flex',flex:1,marginRight: 20}}>
                                <LabelInputComponent
                                    label='From' 
                                    size={TEXT_SIZES.SMALL}
                                    disabled={!input_not_disabled}
                                    inline={true}
                                    hide_label={true}
                                    type='date'
                                    value={is_new?new Date():experience.start_time}
                                    />
                            </div>

                
                          
                            <div style={{display:'flex',flex:1}}>
                            <LabelInputComponent 
                                label='To'
                                size={TEXT_SIZES.SMALL}
                                disabled={!input_not_disabled}
                                hide_label={true}
                                inline={true}
                                type='date'
                                value={is_new?new Date():experience.end_time}
                                />
                            </div>
                          
                        </div>
                        <div style={{width:'5%'}}/>
                        
                    </div>

                    <div style={styles.row3}>
                        <LabelInputComponent 
                            label='Description'
                            placeholder='Description your works...'
                            size={TEXT_SIZES.SMALL}
                            disabled={!input_not_disabled}
                            inline={true}
                            hide_label={true}
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
