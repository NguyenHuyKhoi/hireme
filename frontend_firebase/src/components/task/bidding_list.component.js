//import from library 
import React, {Component} from 'react'
import HeaderListComponent from '../common/header_list.component';
import PaginationComponent from '../common/pagination.component';
import BiddingItemComponent from './bidding_item.component';

import firebase from '../../firebase/firebase'
import { TEXT_SIZES } from '../../utils/constants';
import { BLACK } from '../../utils/palette';
export default class BiddingListComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            first_item_index:0,
            last_item_index:Math.min(4,this.props.task.biddings.length-1)
        }
    }

    switchPage=(l,r)=>{
        this.setState({
            first_item_index:l,
            last_item_index:r
        })
    }

    removeBidding=async (b)=>{
        console.log('taskManagement removeBidding',b.id)
        await firebase.set('/task/'+this.props.task.id+'/biddings/'+b.id,null);
        alert('Đã xóa đơn đấu giá.')
    }

    acceptBidding=async (b)=>{
        console.log('taskManagement acceptBiding',b.id)
        await firebase.set('/task/'+this.props.task.id+'/accepted_bidding/',b);
        await firebase.set('/task/'+this.props.task.id+'/state/','doing');

        let date= new Date();
        date.setDate(date.getDate()+b.duration);
        await firebase.set('/task/'+this.props.task.id+'/deadline/',date.toISOString());
        alert('Đã chấp nhận đơn đấu giá.')
    }


    render(){
        const task=this.props.task;
        const biddings=task.biddings;
        const accepted_bidding=task.accepted_bidding;
        const type=this.props.type!==undefined?this.props.type:'freelancer';
        let l=this.state.first_item_index;
        let r=this.state.last_item_index;

        if (l===0){
            r=Math.min(4,this.props.task.biddings.length-1)
        }

    
        return (
            <div style={styles.container}>
                <HeaderListComponent title='Danh sách đấu giá' height={45}/>


                <div style={styles.body}>
                    {
                        biddings.length===0?
                        
                        <text style={{fontSize: TEXT_SIZES.NORMAL,color:BLACK,margin:20}}>
                            Dự án này chưa có đơn đấu giá nào!
                        </text>
                        :
                        null
                    }
                    {
                    biddings.slice(l,r+1).map((item,index)=>
                        <BiddingItemComponent 
                            type={type}
                            state={task.state}
                            bidding={item} 
                            index={index} 
                            key ={''+index}
                            is_accepted={accepted_bidding!==undefined && accepted_bidding.freelancer.id===item.freelancer.id}
                            acceptBidding={()=>this.acceptBidding(item)}
                         //   removeBidding={()=>this.removeBidding(item)}
                            />
                    )
                    }
                </div>
                
                {
                    biddings.length>0?
                    <PaginationComponent    
                        onClickPage={(l,r)=>this.switchPage(l,r)}
                        items={biddings.length} items_per_page={5} />
                    :
                    null
                }
               


            </div>
            
        )
    }
}


const styles={
    container:{
        flex:1,
        display:'flex',
        flexDirection: 'column'
    },
    body:{
        flex:1,
        display:'flex',
        flexDirection: 'column'
    }
}
