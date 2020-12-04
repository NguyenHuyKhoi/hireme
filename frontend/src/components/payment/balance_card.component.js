//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../common/button.component'


import visa_logo from  '../assets/images/visa.PNG'
import master_card_logo from  '../assets/images/master_card.PNG'
import american_express_logo from  '../assets/images/american_express.PNG'
import discover from  '../assets/images/discover.PNG'

import CreditCardComponent from './credit_card.component'
import sample_db from '../../sample_db/sample_db.json'
let cards=sample_db.credit_cards.slice(0,4)
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

export default class BalanceCardComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            card:cards[0],
			amount:0,
        }
    }

    onChangeInput=(value,field)=>{
        let card=this.state.card
        card[field]=value
        this.setState({
            card:card
        })
	}
	
	findCardLogo=(code)=>{
		let arr=card_types.filter(item=>item.code===code)
		alert(arr[0].logo)
		return arr[0].logo
	}

	withdraw=()=>{
		alert('Call api withdraw')
	}

	recharge=()=>{
		alert('Call api recharge')
	}

    render(){
        return (
            <div  style={styles.container}>    

					<text style={styles.header}>
						Current Balance
					</text>
					<text style={styles.balance}>
						$25000
					</text>

					<div style={styles.row}>
						<text style={styles.label}>
							Amount 
						</text>
						<input type='number' placeholder='Enter amount ...' 
							style={styles.amount_input}
							onChange={event=>this.setState({amount:event.target.value})}/>
					</div>

					<div style={styles.row}>
						<text style={styles.label}>
							Card 
						</text>

						<select value={this.state.card} 
							onChange={event=>this.setState({
								card:event.target.value
							})}
							style={styles.card_input}>
							{
								cards.map(card=>(
									<option value={card} style={styles.card_input}>
										{/* <img src={this.findCardLogo(card.card_company)} style={styles.card_logo}/> */}
										{card.number}
									</option>
								))
							}
          				</select>
                   </div>

				   <div style={styles.footer}>
					   <ButtonComponent color='#FEBE42' label='Withdraw'
						   	onClick={this.withdraw}
					   />
					   <ButtonComponent color='#47BB67' label='Recharge'
							onClick={this.recharge}
					   />
				   </div>

   
            </div>
        )
    }
}

const styles={
    container :{
        width:450, 
        padding:10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#707070',
        backgroundColor: '#F0F0F0',
        flexDirection:'column',
        display:'flex',
        alignItems: 'center'

    },
    header:{
        fontSize: 25,
        color:'#707070'
    },
    balance:{
        fontSize: 30,
        color:'#000000',
        fontWeight: 'bold'
    },
    row:{
        display: 'flex',
		flex:1,
		width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 40,
        marginRight: 40
    },
    label:{
        fontSize: 17,
        color:'#000000',
		width:80,
    },
    amount_input:{
        fontSize: 17,

	},
	card_logo:{
		width: 40,
		height:20
	},
	card_input:{
		fontSize: 17,

	},
	footer:{
		width:'100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 20
	}
    
    
}

