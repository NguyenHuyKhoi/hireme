//import from library 
import React, {Component} from 'react'

import sample_db from '../../sample_db/sample_db.json'
import HeaderListComponent from '../common/header_list.component';
import PaginationComponent from '../common/pagination.component';
import ExperienceItemComponent from './experience_item.component';
import ReviewItemComponent from './experience_item.component';

export default class ExperienceListComponent extends Component {
    render(){
        return (
            <div style={{width:'100%',marginTop: 20,
            display:'flex',flexDirection: 'column',backgroundColor: '#903553'}}>
                {/* header list */}
                <HeaderListComponent/>

                {/* body list */}

                <div style={{width:'100%',display:'flex',flexDirection: 'column'}}>
                {
                    [1,2,3,4].map((item,index)=>
                        <ExperienceItemComponent index={index} />
                    )
                }
                </div>

                {/* pagination  */}
                <PaginationComponent/>

            </div>
            
        )
    }
}
