//import from library 
import React, {Component} from 'react'
import HeaderListComponent from '../common/header_list.component';
import PaginationComponent from '../common/pagination.component';
import BiddingItemComponent from './bidding_item.component';

// * bidding [
//     {
//       * id
//       * freelancer : {id ,name ,avatar ,rate_score}
//       * intended_time , intended_cost
//       * post_time
//     }
//   ]
export default class BiddingListComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            first_item_index:0,
            last_item_index:Math.min(4,this.props.biddings.length-1)
        }
    }

    switchPage=(l,r)=>{
        this.setState({
            first_item_index:l,
            last_item_index:r
        })
    }

    render(){
        const biddings=this.props.biddings;
        const user_type=this.props.user_type!==undefined?this.props.user_type:'freelancer';
        const l=this.state.first_item_index;
        const r=this.state.last_item_index;

        console.log('Tasks :',this.props.tasks,l,r)
    
        return (
            <div style={{flex:1,
            display:'flex',flexDirection: 'column'}}>
                <HeaderListComponent title='Biddings'/>


                <div style={{flex:1,display:'flex',flexDirection: 'column'}}>
                    {
                    biddings.slice(l,r+1).map((item,index)=>
                        <BiddingItemComponent 
                            user_type={user_type}
                            bidding={item} 
                            index={index} 
                            key ={''+index}/>
                    )
                    }
                </div>
                
                <PaginationComponent    
                    onClickPage={(l,r)=>this.switchPage(l,r)}
                    items={biddings.length} items_per_page={5} />


            </div>
            
        )
    }
}
