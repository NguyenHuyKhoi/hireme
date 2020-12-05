//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../common/button.component'


import visa_logo from  '../../assets/images/visa.PNG'
import master_card_logo from  '../../assets/images/master_card.PNG'
import american_express_logo from  '../../assets/images/american_express.PNG'
import discover from '../../assets/images/discover.PNG'

const card_types=[
    {
        index:1,
        logo:visa_logo,
        name:'Visa',
        code:'visa'
    },
    {
        index:2,
        logo:master_card_logo,
        name:'Master Card',
        code:'master_card'
    },
    {
        index:3,
        logo:american_express_logo,
        name:'American Express',
        code:'american_express'
    },
    {
        index:4,
        logo:discover,
        name:'Discover',
        code:'discover'
    }
]
class LabeledInput extends Component {
    render(){
        return (
            <div style={{display: 'flex',flex:1,flexDirection: 'row',alignItems: 'center'}}>
                <text style={{fontSize: this.props.size,color:'#000000',width:85}}>
                    {this.props.label}
                </text>

                <input 
                    style={{fontSize: this.props.size,color:'#000000',width: 10*this.props.size,
                        border:'none',background:'rgba(0,0,0,0)',padding:0}}
                    value={this.props.value}
                    type={this.props.type!==undefined?this.props.type:'text'}
                    onChange={event=>this.props.onChange(event.target.value)}
                    disabled={this.props.disabled}>
                </input>
            </div>
        )
    }
}
export default class CreditCardItemComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            card:this.props.card,
        }
    }

    onChangeInput=(value,field)=>{
        let card=this.state.card
        card[field]=value
        this.setState({
            card:card
        })
    }
    createCard=()=>{
        alert('call api create card :'+this.state.card.number)
    }

    formatDate=(date_str)=>{
        return date_str.substring(0,date_str.indexOf('T'))
    }

    deleteCard=()=>{
        alert('call api delete card :'+this.state.card.number)
    }
    render(){
        const card=this.state.card;
        console.log('hello')
        const index=this.props.index
        const disabled=card.is_new_card!==undefined?false:true

        return (
            <div  style={{  padding:30,display:'flex',flex:1,flexDirection:'column',
                backgroundColor:index%2==1?'#ffffff':'#f0f0f0'}}>    

                    <div style={styles.row}>
                        <div style={{width:'100%',display: 'flex', flexDirection: 'row',justifyContent: 'space-between'}}>
                            {
                            card_types.map(type=>
                                <img src={type.logo} 
                                    onClick={()=>{
                                        if (disabled===false) this.onChangeInput(type.code,'card_company')
                                    }}
                                    style={{...styles.logo,
                                    opacity:type.code!==card.card_company?0.1:1}}/>    
                            )
                            }
                        </div>

                        <div 
                            onClick={()=>{
                                if (!disabled) this.createCard()
                                    else this.deleteCard()
                            }}
                            style={{...styles.action_btn,
                                backgroundColor: !disabled?'#47BB67':'#D98383'}}>
                            <text style={styles.action_btn_label}>
                                {
                                    !disabled?'+':'-'
                                }
                            </text>
                        </div>
                   
                    </div>
                   

                    <LabeledInput 
                        size={20} value={card.number} label='Number :'
                        type='number'
                        onChange={(value)=>this.onChangeInput(value,'number')}
                        disabled={disabled}
                        />
     

                        
                    <div style={styles.row}>

                        
                        <LabeledInput 
                        size={17} value={card.owner_name} label='Name :'
                        type='text'
                        onChange={(value)=>this.onChangeInput(value,'owner_name')}
                        disabled={disabled}
                        />
                        
                        <LabeledInput 
                        size={17} value={this.formatDate(card.expired_date)} label='Expired :'
                        type='date'
                        onChange={(value)=>this.onChangeInput(value,'expired_date')}
                        disabled={disabled}
                        />

                       
                    </div>
                    <div style={styles.row}>

                        <LabeledInput 
                            size={17} value={card.email} label='Email :'
                            type='email'
                            onChange={(value)=>this.onChangeInput(value,'email')}
                            disabled={disabled}
                        />
                        
                        <LabeledInput 
                            size={17} value={card.ccv} label='CCV :'
                            type='password'
                            onChange={(value)=>this.onChangeInput(value,'ccv')}
                            disabled={disabled}
                        />

                    </div> 

                   
            </div>
        )
    }
}

const styles={
    container :{
      

    },
    logo_container:{width:'100%',display: 'flex', flexDirection: 'row',justifyContent: 'space-between'
    },
    logo:{
        width:60    ,
        height:40
    },
    normal_text:{
        fontSize: 20,
        flex:1,
        color:'#000000',
        marginTop:7
    },
    small_text:{
        fontSize: 17,
        flex:1,
        color:'#000000'
    },
    row  :{
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 3
    },
    action_btn:{
        width: 40,
        height:40,
        marginLeft: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    action_btn_label:{
        fontSize: 35,
        color:'#ffffff',
        textAlign: 'center'
    }
    
    
}

