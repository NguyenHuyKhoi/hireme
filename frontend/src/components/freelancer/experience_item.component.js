//import from library 
import React, {Component} from 'react'
import { inputField } from '../../redux/constant/input.constant'
import { textSizes } from '../../utils/constants'
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
        const is_new=this.props.is_new!==undefined?this.props.is_new:false;
        const is_edit=this.props.is_edit!==undefined?this.props.is_edit:false;
        const experience=this.props.experience;
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
                    display:'flex',width:'100%',height:150,
                    flexDirection: 'column',
                    justifyContent:'center',
                    backgroundColor:index%2==0?WHITE:GRAY_4}}>    

                    <div style={{width:'100%',display:'flex',flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'space-between'}}>
                        <div style={{width:'45%'}}>
                            <LabelInputComponent 
                                disabled={!input_not_disabled}
                                hide_label={true}
                                inline={true}
                                input_field={inputField.EXP_ROLE}
                                />
                        </div>
                        {
                            btn_add_visible?
                            <div 
                            style={{...styles.action_btn,
                                marginRight:20,
                                backgroundColor:GREEN_1}}>
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
                            style={{...styles.action_btn,
                                marginRight:20,
                                toundColor: RED_1}}>
                                <text style={styles.action_btn_label}>
                                    -
                                </text>
                            </div>
                            :
                            null

                        }
                       
                    </div>
                    
                    

                    <div style={{display:'flex',width:'100%',flexDirection: 'row',
                        marginTop:10,
                        justifyContent: 'space-between',alignItems: 'center'}}>
                        <div style={{width:'30%',marginRight:40}}>
                            <LabelInputComponent 
                                size={textSizes.SMALL}
                                disabled={!input_not_disabled}
                                hide_label={true}
                                inline={true}
                                input_field={inputField.EXP_COMPANY}
                                />
                        </div>
                        
                        <div style={{width:'5%'}}/>
                        <div style={{width:'5%'}}/>
                        <div style={{display:'flex',flex:1,flexDirection:'row'}}>
                            <div style={{display:'flex',flex:1,marginRight: 20}}>
                            <LabelInputComponent 
                                size={textSizes.SMALL}
                                disabled={!input_not_disabled}
                                inline={true}
                                hide_label={true}
                                input_field={inputField.EXP_FROM}
                                />
                            </div>

                
                          
                            <div style={{display:'flex',flex:1}}>
                            <LabelInputComponent 
                                size={textSizes.SMALL}
                                disabled={!input_not_disabled}
                                hide_label={true}
                                inline={true}
                                input_field={inputField.EXP_TO}
                                />
                            </div>
                          
                        </div>
                        <div style={{width:'5%'}}/>
                        
                    </div>

                    <div style={{width:'90%',marginTop:3}}>
                        <LabelInputComponent 
                            size={textSizes.SMALL}
                            disabled={!input_not_disabled}
                            inline={true}
                            hide_label={true}
                            input_field={inputField.EXP_DESCRIPTION}
                            />
                    </div>
                    
          
            </div>
        )
    }
}

const styles={

    action_btn:{
        width: 40,
        height:40,
        marginLeft: 20,
        borderRadius: 5,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
    }
    
}
