//import from library 
import React, {Component} from 'react'

import HeaderListComponent from '../common/header_list.component';
import PaginationComponent from '../common/pagination.component';
import ExperienceItemComponent from './experience_item.component';
import ReviewItemComponent from './experience_item.component';

export default class ExperienceListComponent extends Component {
    render(){
        const header_height=this.props.header_height;
        const can_edit=this.props.can_edit;
        return (
            <div style={{flex:1,marginTop: 20,
            display:'flex',flexDirection: 'column'}}>
                {/* header list */}
                <HeaderListComponent title='Experiences' 
                    height={header_height!==undefined?header_height:60} />

                {/* body list */}

                <div style={{width:'100%',display:'flex',flexDirection: 'column'}}>
                {
                    [1,2,3,4].map((item,index)=>
                        <ExperienceItemComponent index={index} can_edit={can_edit} />
                    )
                }
                </div>

                {/* pagination  */}
                {/* <PaginationComponent/> */}

            </div>
            
        )
    }
}
