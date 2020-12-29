//import from library 
import React, {Component} from 'react'
import ButtonComponent from '../common/button.component'

import sample_db from '../../sample_db/fake_api_responses.json'
import HeaderListComponent from '../common/header_list.component'
import PaginationComponent from '../common/pagination.component'
import TransactionItemComponent from './transaction_item.component'
import { WHITE } from '../../utils/palette'

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
        const l=this.state.first_item_index;
        const r=this.state.last_item_index;
    
        console.log('Tasks :',this.props.tasks,l,r)
        return (
            <div style={styles.container}>

                <HeaderListComponent title='Lịch sử giao dịch' height={40} is_sort={true}/>
                
                <div style={styles.body}>

                    <div style={styles.inner_body}>
            
                        {
                            transactions.slice(l,r+1).map((item,index)=>(
                                <TransactionItemComponent 
                                    transaction={item} index={index} key={''+index}/>
                            ))
                        }
                    </div>

                    {/* <div style={{flex:1}}/> */}
                </div>

                
                <PaginationComponent    
                    onClickPage={(l,r)=>this.switchPage(l,r)}
                    items={transactions.length} items_per_page={3} />
                

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
