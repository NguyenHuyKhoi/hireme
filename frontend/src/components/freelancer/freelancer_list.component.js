//import from library 
import React, {Component} from 'react'
import FreelancerItemComponent from './freelancer_item.component'
import HeaderListComponent from '../common/header_list.component'
import PaginationComponent from '../common/pagination.component'

export default class FreelancerListComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            first_item_index:0,
            last_item_index:Math.min(3,this.props.freelancers.length-1)
        }
    }

    switchPage=(l,r)=>{
        this.setState({
            first_item_index:l,
            last_item_index:r
        })
    }

    render(){
        const freelancers=this.props.freelancers!==undefined?this.props.freelancers:[];
        const l=this.state.first_item_index;
        const r=this.state.last_item_index;
        console.log('freelancer_list',l,r)
        return (
            <div style={{width:'100%',display:'flex',flexDirection: 'column'}}>
                {/* header list */}
                <HeaderListComponent title='Freelancers' is_sort={true}/>
                
                {/* body list */}

                <div style={{width:'100%',display:'flex',
                    marginTop:20,
                    flexDirection: 'row',justifyContent:'space-between',flexWrap: 'wrap',alignItems: 'flex-start'}}>
                {
                    freelancers.slice(l,r+1).map((item,index)=>
                        <FreelancerItemComponent freelancer={item} key={''+index}/>
                    )
                }
                </div>

                <PaginationComponent    
                    onClickPage={(l,r)=>this.switchPage(l,r)}
                    items={freelancers.length} items_per_page={4} />


            </div>
                    
    
        )
    }
}
