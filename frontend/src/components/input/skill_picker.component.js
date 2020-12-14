//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK, BLUE_1, GRAY_1, GRAY_2, GRAY_3, GRAY_5, WHITE } from '../../utils/palette'
import { CATEGORIES_DOMAIN } from '../../utils/constants'

class Item extends Component{
    render(){
        const item=this.props.item;
        const is_picked=this.props.is_picked;
        return (
            <div
                onClick={this.props.onClick} 
                style={{display:'flex',marginRight:10,marginTop:7,
                    justifyContent: 'center',alignItems: 'center',
                    borderRadius:3,padding: 7,
                    backgroundColor: is_picked?BLUE_1:GRAY_3}}>
            <text style={{fontSize:TEXT_SIZES.SMALL,
                    color: is_picked?WHITE:GRAY_1}}>
                {item.name} 
            </text>
        </div>
        )
    }
}

export default class SkillPickerComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            picked_skills:[]
        };
        this.props.onChange(this.state.value)
    }   

    getPredefinedSkills=(name)=>{
        let arr=CATEGORIES_DOMAIN.filter(item=>item.name===name);
        console.log('category_arr on skills :',arr)
        let cat=arr[0];
        return cat.predefined_skills;
    }

    isPicked=(skill_name)=>{
        //only save skill_name on picked_skills
        return (this.state.picked_skills.filter(item=>item===skill_name).length)>0;
    }

    clickItem= (skill_name)=>{

        console.log('click_skill :',skill_name)

        let arr=this.state.picked_skills;
        // skill_name is not on picked_skills
        if (this.isPicked(skill_name)){
            arr=arr.filter(item=>item!==skill_name);
        }
        else{
            arr.push(skill_name)
        };

        console.log('picked_skills:',arr)

        this.setState({
            picked_skills:arr
        })

        this.props.onChange(arr)

    }


    render(){
        const label=this.props.label!==undefined?this.props.label:'';
        const category_name=this.props.category_name;

        console.log('category_name on skills :',category_name)
        const domain=this.getPredefinedSkills(category_name);
        return (
            <div style={{display:'flex',flex:1,flexDirection: 'column'}}>
                    <text style={{fontSize:TEXT_SIZES.NORMAL,color:BLACK}}>
                        {label}
                    </text>
                    
                    <div style={{marginTop:5,width:'100%',alignSelf: 'baseline',display:'flex',
                        flexDirection: 'row',flexWrap:'wrap',alignItems: 'flex-start'}}>
                        {
                            domain.map((item,index)=>{
                           //     console.log('Item in SkillPicker :',item)
                                const is_picked=this.isPicked(item.name)
                                return (
                                    <Item
                                        onClick={()=>this.clickItem(item.name)} 
                                        item={item}
                                        key={''+index}
                                        is_picked={is_picked}
                                    />
                                )
                             }
                            )
                        }
                    </div>
            
                </div>

        )
    }
}
