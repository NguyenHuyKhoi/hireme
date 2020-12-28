//import from library 
import React, {Component} from 'react'

import HeaderListComponent from '../common/header_list.component';
import PaginationComponent from '../common/pagination.component';
import ExperienceItemComponent from './experience_item.component';
import ReviewItemComponent from './experience_item.component';

export default class ExperienceListComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            experiences:this.props.experiences!==undefined?this.props.experiences:[]
        }
    }
    
    render(){
        const experiences=this.state.experiences;
        console.log('experiences :',experiences)
        const header_height=this.props.header_height;
        const is_edit=this.props.is_edit!==undefined?this.props.is_edit:false;
        return (
            <div style={styles.container}>
               
                <HeaderListComponent title='Kinh nghiệm' 
                    height={header_height!==undefined?header_height:60} />

     

                <div style={styles.body}>
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