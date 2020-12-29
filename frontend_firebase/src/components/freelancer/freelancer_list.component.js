//import from library 
import React, {Component} from 'react'
import FreelancerItemComponent from './freelancer_item.component'
import HeaderListComponent from '../common/header_list.component'
import PaginationComponent from '../common/pagination.component'
import { TEXT_SIZES } from '../../utils/constants';
import { BLACK } from '../../utils/palette';

export default class FreelancerListComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            first_item_index:0,
            last_item_index:Math.min(3,this.props.freelancers.length-1)
        }
        console.log('freelancer_list cons',this.props.freelancers,this.state.last_item_index)
        
     
    }

    switchPage=(l,r)=>{
        this.setState({
            first_item_index:l,
            last_item_index:r
        })
    }

    render(){
        const freelancers=this.props.freelancers!==undefined?this.props.freelancers:[];
        let l=this.state.first_item_index;
        let r=this.state.last_item_index;

        if (l===0) {
            r=Math.min(3,this.props.freelancers.length-1);
        }
        console.log('freelancer_list',l,r)
        return (
            <div style={styles.container}>
                
                <HeaderListComponent title='Freelancers' is_sort={true}/>
                

                <div style={styles.body}>
                {
                    freelancers.length===0?
                    <text style={{fontSize: TEXT_SIZES.NORMAL,color:BLACK}}>
                        Không tìm thấy freelancer nào !
                    </text>
                    :
                    null
                }
                {
                    freelancers.slice(l,r+1).map((item,index)=>
                        <FreelancerItemComponent freelancer={item} key={''+index}/>
                    )
                }
                </div>

                {
                    freelancers.length===0?
                    null
                    :

                    <PaginationComponent    
                        onClickPage={(l,r)=>this.switchPage(l,r)}
                        items={freelancers.length} items_per_page={4} />
                }


            </div>
                    
    
        )
    }
}

const styles={
    container:{
        width:'100%',
        display:'flex',
        flexDirection: 'column'
    },
    body:{
        width:'100%',
        display:'flex',
        marginTop:20,
        flexDirection: 'row',
        justifyContent:'space-between',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    }
}
