//import from library 
import React, {Component} from 'react'

import HeaderListComponent from '../common/header_list.component';
import PaginationComponent from '../common/pagination.component';
import ExperienceItemComponent from './experience_item.component';
import ReviewItemComponent from './experience_item.component';

export default class ExperienceListComponent extends Component {
    render(){
        const experiences=this.props.experiences!==undefined?this.props.experiences:[]
        const header_height=this.props.header_height;
        const is_edit=this.props.is_edit!==undefined?this.props.is_edit:false;
        return (
            <div style={{flex:1,marginTop: 20,
            display:'flex',flexDirection: 'column'}}>
                {/* header list */}
                <HeaderListComponent title='Experiences' 
                    height={header_height!==undefined?header_height:60} />

                {/* body list */}

                <div style={{width:'100%',display:'flex',flexDirection: 'column'}}>
                    {
                        is_edit?
                        <ExperienceItemComponent  
                            is_edit={is_edit} 
                            is_new={true} 
                            index={0}  
                            key={''+0}/>
                        :
                        null
                    }

                  
                    {
                        experiences.map((item,index)=>(
                            <ExperienceItemComponent 
                                is_edit={is_edit}
                                is_new={false}
                                experience={item} 
                                index={index+1} 
                                key={''+(index+1)}/>
                        ))
                    }
            
               
                </div>

                {/* pagination  */}
                {/* <PaginationComponent/> */}

            </div>
            
        )
    }
}
