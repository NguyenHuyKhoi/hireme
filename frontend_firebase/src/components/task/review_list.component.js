//import from library 
import React, {Component} from 'react'

import sample_db from '../../sample_db/fake_api_responses'
import HeaderListComponent from '../common/header_list.component';
import ReviewItemComponent from './review_item.component';
import PaginationComponent from '../common/pagination.component';
import { TEXT_SIZES } from '../../utils/constants';
import { BLACK } from '../../utils/palette';
export default class ReviewListComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            first_item_index:0,
            last_item_index:Math.min(3,this.props.reviews.length-1)
        }
    }

    switchPage=(l,r)=>{
        this.setState({
            first_item_index:l,
            last_item_index:r
        })
    }
    render(){
        const reviews=this.props.reviews!==undefined?this.props.reviews:[];
        const l=this.state.first_item_index;
        const r=this.state.last_item_index;
        return (
            <div style={styles.container}>
           
                <HeaderListComponent title='Nhận xét' height={45}/>


                <div style={styles.body}>
                {
                        reviews.length===0?
                        <text style={{fontSize: TEXT_SIZES.NORMAL,color:BLACK,margin:20}}>
                            Hiện chưa có bất kỳ đánh giá nào.
                        </text>
                        :
                        null
                }
                {
                    reviews.slice(l,r+1).map((item,index)=>
                        <ReviewItemComponent 
                            key={''+index}
                            review={item} index={index}/>
                    )
                }
                </div>

                {
                    reviews.length>0?
                    <PaginationComponent    
                        onClickPage={(l,r)=>this.switchPage(l,r)}
                        items={reviews.length} items_per_page={4} />
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
        marginTop: 20,
        display:'flex',
        flexDirection: 'column'
    },
    body:{
        width:'100%',
        display:'flex',
        flexDirection: 'column'
    }
}