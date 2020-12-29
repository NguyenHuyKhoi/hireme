//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../common/button.component'

import sample_db from '../../sample_db/fake_api_responses.json'
import HeaderListComponent from '../common/header_list.component'
import PaginationComponent from '../common/pagination.component'
import TransactionItemComponent from './transaction_item.component'
import { BLACK, WHITE } from '../../utils/palette'
import { TEXT_SIZES } from '../../utils/constants'

export default class TransactionListComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            first_item_index:0,
            last_item_index:Math.min(2,this.props.transactions.length-1)
        }
    }

    switchPage=(l,r)=>{
        this.setState({
            first_item_index:l,
            last_item_index:r
        })
    }

    render(){
        const transactions=this.props.transactions;
        let l=this.state.first_item_index;
        let r=this.state.last_item_index;
    
        if (l===0) r=Math.min(2,this.props.transactions.length-1)
        console.log('TransactionsList :',this.props.transactions,l,r)
        return (
            <div style={styles.container}>

                <HeaderListComponent title='Lịch sử giao dịch' height={40} is_sort={true}/>
                
                
                <div style={styles.body}>


                    <div style={styles.inner_body}>
            
                        {
                            transactions.length===0?
                            <text style={{fontSize:TEXT_SIZES.NORMAL,color:BLACK,margin:30}}>
                                Bạn hiện chưa thực hiện giao dịch nào.
                            </text>
                            :
                            null
                        }
                        {
                            transactions.slice(l,r+1).map((item,index)=>(
                                <TransactionItemComponent 
                                    transaction={item} index={index} key={''+index}/>
                            ))
                        }
                    </div>

                    {/* <div style={{flex:1}}/> */}
                </div>

                {
                    transactions.length===0?
                    null
                    :
                    <PaginationComponent    
                        onClickPage={(l,r)=>this.switchPage(l,r)}
                        items={transactions.length} items_per_page={3} />
                }
                
              
                

            </div>
        )
    }
}

const styles={

    container:{ 
        display:'flex',
        flex:1,
        flexDirection: 'column',
        backgroundColor: WHITE,
        boxShadow:'3px 5px 3px 3px #707070'
    },
    body:{
        flex:1,
        display: 'flex',
        flexDirection:'row'
    },
    inner_body:{
        display:'flex',
        flex:8,
        flexDirection: 'column'
    }
}
