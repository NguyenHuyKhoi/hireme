//import from library 
import React, {Component} from 'react'
import sample_db from '../sample_db/sample_db.json'
import ButtonComponent from '../components/common/button.component';


const chats=sample_db.chats   ;

const action_buttons=[
    [
        {
            title : 'When task is on process,  press to give up, get refund 50% budget.',
            background:'#FEBE42',
            code:'company_give_up'
        },
        {
            title : 'When task is confirmed as complete, leave a review about freelance below.',
            background:'#47BB67',
            code:'company_review'
        },
        {
            title : 'When task has any problem, press to send report.',
            background:'#EE202E',
            code:'company_report'
        }
    ],
    [
        {
            title : 'When task is on process,press to give up and get fine 20% budget.',
            background:'#FEBE42',
            code:'freelancer_give_up'
        },
        {
            title : 'When task is confirm as complete,leave a review about company below. ',
            background:'#47BB67',
            code:'freelancer_review'
        },
        {
            title : 'When task has any problem, press to send report.',
            background:'#EE202E',
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
                style={{width:'100%',height:'25%',
                    borderRadius: 5,backgroundColor: data.background,
                    display:'flex',justifyContent: 'center',alignItems: 'center'}}>
                <text style={{color:'#ffffff',fontSize: 20,marginLeft:10}}>
                    {data.title}
                </text>
            </div>  
        )
    }
}

class ProjectDetail extends Component {
    render(){
        return (
            <div style={{width:'48%',height: '60%', backgroundColor: '#3F50CD',borderRadius: 10}}>
                <div style={{margin:10,display:'flex',flex:1,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center'}}>
                    <text style={{fontSize: 30,color:'#ffffff'}}>
                        Project Budget 
                    </text>

                    <text style={{fontSize: 30,color:'#ffffff'}}>
                        $3000
                    </text>
                </div>

                <div style={{marginLeft:30,marginRight:10,display:'flex',flexDirection: 'column',flex:4}}>
                    <text style={{fontSize: 20,color:'#ffffff'}}>
                        Hirer : Facebook
                    </text>
                    <text style={{fontSize: 20,color:'#ffffff'}}>
                        Hirer : Facebook
                    </text>
                    <text style={{fontSize: 20,color:'#ffffff'}}>
                        Hirer : Facebook
                    </text>
                    <text style={{fontSize: 20,color:'#ffffff'}}>
                        Hirer : Facebook
                    </text>
                    <text style={{fontSize: 20,color:'#ffffff'}}>
                        Hirer : Facebook
                    </text>
                </div>
            </div>
        )
    }
}
export default class TaskPaymentScreen extends Component {

    onClickBtn=(code)=>{
        alert(code);
    }

    render(){
        const user_type='freelancer';
        return (
            <div  style={styles.container}> 
                <div style={{flex:1,width:'100%',display:'flex',flexDirection: 'row',
                    alignItems: 'center',justifyContent: 'space-between'}}>
                    
                    <ProjectDetail/>
                    <div style={{width: '48%',height:'100%',display:'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'space-between'}}>
                        {
                            action_buttons[user_type==='company'?0:1].map(btn=>
                                <ActionButtons data={btn} onClick={()=>this.onClickBtn(btn.code)}/>
                            )
                        }
                    </div>
                  
                </div>  

                <div style={{marginTop: 30,width: '100%',height:50,borderRadius: 5,padding:5,borderColor: '#707070',
                    display:'flex',flexDirection: 'row',
                    backgroundColor: '#ffffff',
                    justifyContent: 'space-between',alignItems: 'center'}}>
                        <input 
                            style={{fontSize: 20,height:40,color:'#000000',width: '80%',borderWidth: 0}}
                            placeholder='Leave a review'/>
                        <ButtonComponent color='#3F50CD' label='Send'/>
                </div> 

     
            </div>
        )
    }
}

const styles={
    container :{
        width:'80%',
        height:'65%',
        flexDirection:'column',
        display:'flex'
    } 
}

