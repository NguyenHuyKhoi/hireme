//import from library 
import React, {Component} from 'react'
import { inputField } from '../../redux/constant/input.constant';
import sample_db from '../../sample_db/sample_db.json'
import { textSizes } from '../../utils/constants';
import { BLUE_1, GRAY_2, GREEN_1, RED_1, WHITE, YELLOW } from '../../utils/palette';
import ButtonComponent from '../common/button.component';
import ButtonInputComponent from '../input/button_input.component';


const chats=sample_db.chats   ;

const action_buttons=[
    [
        {
            title : 'When task is on process,  press to give up, get refund 50% budget.',
            background:YELLOW,
            code:'company_give_up'
        },
        {
            title : 'When task is confirmed as complete, leave a review about freelance below.',
            background:GREEN_1,
            code:'company_review'
        },
        {
            title : 'When task has any problem, press to send report.',
            background:RED_1,
            code:'company_report'
        }
    ],
    [
        {
            title : 'When task is on process,press to give up and get fine 20% budget.',
            background:YELLOW,
            code:'freelancer_give_up'
        },
        {
            title : 'When task is confirm as complete,leave a review about company below. ',
            background:GREEN_1,
            code:'freelancer_review'
        },
        {
            title : 'When task has any problem, press to send report.',
            background:BLUE_1,
            code:'freelancer_report'
        }
    ]
]

class ActionButtons extends Component{
    render(){
        const data=this.props.data; 
        return (
            <div 
                onClick={this.props.onClick}
                style={{width:'100%',height:'25%', borderRadius: 5,
                    boxShadow:'3px 3px 3px 3px #707070',
                    backgroundColor: data.background,
                    display:'flex',justifyContent: 'center',alignItems: 'center'}}>
                <text style={{color:WHITE,fontSize: textSizes.NORMAL,marginLeft:10}}>
                    {data.title}
                </text>
            </div>  
        )
    }
}

class SingleField extends Component {
    render(){
        return (
            <text style={{
                fontSize:this.props.big!==undefined?textSizes.HUGE:textSizes.NORMAL,
                color:WHITE}}>
                {this.props.label}
            </text>
        )
    }
}
class ProjectDetail extends Component {
    render(){
        return (
            <div style={{flex:1,alignSelf:'center',padding:20, backgroundColor: BLUE_1,borderRadius: 6}}>

                <div style={{display:'flex',flexDirection: 'row',
                    marginBottom:20,
                    justifyContent: 'space-between',alignItems: 'center'}}>
                        
                    <SingleField label='Project Budget' big={true}/>
                    <SingleField label='$3500' big={true}/>
                </div>

                <div style={{display:'flex',flexDirection: 'row',justifyContent:'space-between'}}>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <SingleField label='Company '/>
                        <SingleField label='Freelancer  '/>
                        <SingleField label='Deadline  '/>
                        <SingleField label='State  '/>
                        <SingleField label='Payment  '/>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
                        <SingleField label=' Facebook'/>
                        <SingleField label=' Freelancer1'/>
                        <SingleField label=' 14/02/2020'/>
                        <SingleField label=' Complete'/>
                        <SingleField label=' Unpaid'/>
                    </div>


                </div>
            </div>
        )
    }
}
export default class PaymentTabComponent extends Component {

    onClickBtn=(code)=>{
        alert(code);
    }

    render(){
        const company_view=false;
        return (
            <div  style={{flex:1,flexDirection:'column',display:'flex'} }> 
                <div style={{flex:1,width:'100%',display:'flex',flexDirection: 'row',
                    alignItems: 'center',justifyContent: 'space-between'}}>
                    
                    <div style={{flex:1}}>
                        <ProjectDetail/>
                    </div>
                  
                    <div style={{flex:1,marginLeft:60,height:'100%',
                            display:'flex',flexDirection: 'column',
                            alignItems: 'center',justifyContent: 'space-between'}}>
                        {
                            action_buttons[company_view===true?0:1].map((item,index)=>
                                
                                <ActionButtons 
                                    key={''+index}
                                    data={btn} onClick={()=>this.onClickBtn(btn.code)}/>
                            )
                        }
                    </div>
                  
                </div>  

                <div style={{marginTop:30}}>
                    <ButtonInputComponent  btn_label='Send'
                        input_field={inputField.REVIEW} 
                        placeholder='Leave a review when job is done !'/>
                </div>
            
     
            </div>
        )
    }
}

