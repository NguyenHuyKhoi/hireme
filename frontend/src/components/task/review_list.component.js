//import from library 
import React, {Component} from 'react'

import sample_db from '../../sample_db/fake_api_responses'
import HeaderListComponent from '../common/header_list.component';
import PaginationComponent from '../common/pagination.component';
import ReviewItemComponent from './review_item.component';

export default class ReviewListComponent extends Component {
    render(){
        const reviews=this.props.reviews!==undefined?this.props.reviews:[];
        return (
            <div style={styles.container}>
           
                <HeaderListComponent title='Reviews'/>


                <div style={styles.body}>
                {
                    reviews.map((item,index)=>
                        <ReviewItemComponent 
                            key={''+index}
                            review={item} index={index}/>
                    )
                }
                </div>
           

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