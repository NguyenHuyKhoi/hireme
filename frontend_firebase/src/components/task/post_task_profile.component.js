//import from library 
import React, {Component} from 'react'
import { BLACK, GRAY_1, GRAY_2, GRAY_3, WHITE } from '../../utils/palette'

import LabeledInputComponent from '../input/labeled_input.component'
import TextareaInputComponent from '../input/textarea_input.component'
import LabeledSelectedInputComponent from '../input/labeled_selected_input.component'
import RangeInputComponent from '../input/range_input.component'
import SkillPickerComponent from '../input/skill_picker.component'
import ExperienceListComponent from '../freelancer/experience_list.component'
import AttachmentsComponent from '../input/attachments.component'
import { CATEGORIES_DOMAIN, FIXED_PRICE_DOMAIN, TASKS_TYPE_DOMAIN, TEXT_SIZES } from '../../utils/constants'
import HeaderListComponent from '../common/header_list.component'

export default class PostTaskProfileComponent extends Component {

    render(){
        const category=this.props.category;
        return (

            <div style={styles.container}>

                <HeaderListComponent title='Mô tả dự án của bạn :' height={40}/>

                <div style={styles.body}>
                
                  
                        <div style={styles.row1}>
                        
                            <div style={styles.row1_col1}>

                                <div style={{width:'70%'}}>
                                    <LabeledInputComponent 
                                        onChange={(value)=>this.props.updateInputs('task_name',value)}
                                        label='Tên dự án'/>
                                </div>

                                <div style={{width:'80%',marginTop:30}}>
                                    <RangeInputComponent 
                                        onChange={(value)=>{
                                            this.props.updateInputs('min_budget',value[0]);
                                            this.props.updateInputs('max_budget',value[1])
                                        }}
                                        label='Chi phí ước tính:' 
                                        domain={FIXED_PRICE_DOMAIN}
                                        value={[1000,5000]}/>
                                </div>

                              


                            </div>


                            <div style={styles.row1_col2}>

                                <div style={{width:'70%'}}>
                                    <LabeledSelectedInputComponent  
                                        onChange={(value)=>this.props.updateInputs('category',value)}
                                        label='Danh mục'
                                        domain={CATEGORIES_DOMAIN.map(item=>item.name)}
                                        value={CATEGORIES_DOMAIN[0].name}/>
                                </div>

                                <div style={{width:'70%',marginTop:30}}>
                                    <SkillPickerComponent  
                                        onChange={(value)=>this.props.updateInputs('skills',value)}
                                        label='Kỹ năng yêu cầu'
                                        category={category} />
                                </div>

                               

                                {/* <div style={{width:'70%',marginTop:30}}>
                                    <AttachmentsComponent
                                        label='Attachments'
                                        onChange={(value)=>this.props.updateInputs('attachments',value)}
                                        is_edit={true} />
                                </div> */}
                            </div>

                        
                        </div>

                       <div style={styles.row2}>
                           <TextareaInputComponent 
                              onChange={(value)=>this.props.updateInputs('description',value)}
                            label='Mô tả '/>
                       </div>
                
                    
                </div>
              
            </div>
                  
           
    )
    }
}


const styles={
    container:{
        flex:1,
        display: 'flex',
        flexDirection:'column',
        backgroundColor:WHITE,
        borderRadius:8,
        boxShadow:'3px 5px 3px 3px #707070'
    },
    body:{
        flex:1,
        padding:50,
        display:'flex',
        justifyContent:'center',
        flexDirection:'column'
    },
    row1:{
        display:'flex',
        flexDirection: 'row'
    },
    row1_col1:{
        display:'flex',
        flex:1,
        flexDirection: 'column'
    },
    row1_col2:{
        display:'flex',
        flexDirection: 'column',
        flex:1,
        alignItems:'center'
    },
    row2:{
        marginTop:30
    }
}

