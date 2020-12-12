//import from library 
import React, {Component} from 'react'
import FreelancerItemComponent from './freelancer_item.component'
import HeaderListComponent from '../common/header_list.component'
import PaginationComponent from '../common/pagination.component'

export default class FreelancerListComponent extends Component {
    render(){
        const freelancers=this.props.freelancers!==undefined?this.props.freelancers:[];

        return (
            <div style={{width:'100%',display:'flex',flexDirection: 'column'}}>
                {/* header list */}
                <HeaderListComponent title='Freelancers' is_sort={true}/>
                
                {/* body list */}

                <div style={{width:'100%',display:'flex',
                    marginTop:20,
                    flexDirection: 'row',justifyContent:'space-between',flexWrap: 'wrap',alignItems: 'flex-start'}}>
                {
                    freelancers.map((item,index)=>
                        <FreelancerItemComponent freelancer={item} key={''+index}/>
                    )
                }
                </div>


            </div>
                    
    
        )
    }
}
