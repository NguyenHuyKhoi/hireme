//import from library 
import React, {Component} from 'react'

import sample_db from '../../sample_db/fake_api_responses'
import HeaderListComponent from '../common/header_list.component';
import ReviewItemComponent from './review_item.component';
import PaginationComponent from '../common/pagination.component';
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
           
                <HeaderListComponent title='Nhận xét'/>


                <div style={styles.body}>
                {
                    reviews.slice(l,r+1).map((item,index)=>
                        <ReviewItemComponent 
                            key={''+index}
                            review={item} index={index}/>
                    )
                }
                </div>

                <PaginationComponent    
                    onClickPage={(l,r)=>this.switchPage(l,r)}
                    items={reviews.length} items_per_page={4} />
           

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