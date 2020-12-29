//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants';
import { BLACK } from '../../utils/palette';

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

    deleteItem=(id)=>{
        console.log('ExperienceListComponent deleteItem :',id)
        //id : not auto-generated id by firebase ,it is timestamp :
        let arr=this.state.experiences.filter(item=>item.id!==id);
        this.setState({
            experiences:arr
        });

        this.props.onChange(arr)
    };

    


    addItem=async (exp)=>{
        console.log('ExperienceListComponent addItem :',exp)
        let arr=this.state.experiences;
        arr.push(exp);
        await this.setState({
            experiences:arr
        });

        this.props.onChange(arr)
    }
    
    render(){
        const experiences=this.state.experiences;
        console.log('experiences :',experiences)
        const header_height=this.props.header_height;
        const is_edit=this.props.is_edit!==undefined?this.props.is_edit:false;
        return (
            <div style={styles.container}>
               
                <HeaderListComponent title='Kinh nghiệm' 
                    height={header_height!==undefined?header_height:45} />

                <div style={styles.body}>
                    {
                        experiences.length===0?
                        <text style={{fontSize: TEXT_SIZES.NORMAL,color:BLACK,margin:20}}>
                            Người dùng này chưa thêm bất kỳ lịch sử làm việc nào
                        </text>
                        :
                        null
                    }
                    {
                        is_edit?
                        <ExperienceItemComponent  
                            is_edit={is_edit} 
                            is_new={true} 
                            index={0}  
                            deleteItem={this.deleteItem}
                            addItem={this.addItem}
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
                                deleteItem={this.deleteItem}
                                addItem={this.addItem}
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