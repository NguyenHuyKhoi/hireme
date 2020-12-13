//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, BLUE_1, GRAY_1, GRAY_2, GRAY_3, GRAY_5, WHITE } from '../../utils/palette'
import {connect }from 'react-redux'
import * as actions from '../../redux/action/input.action'
import { inputField } from '../../redux/constant/input.constant'
import { categories } from '../../redux/constant/domain_value.constant'

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
            <text style={{fontSize:textSizes.SMALL,
                    color: is_picked?WHITE:GRAY_1}}>
                {item.name} 
            </text>
        </div>
        )
    }
}
class SkillPickerComponent extends Component {
    constructor(props){
        super(props);
        const input_field=this.props.input_field;
        let value=this.props.value;

        console.log('value_skills :',value);
        if (value!==undefined){
            this.props.inputAField({[input_field.key]:value})
        }
    }

    findCategoryByName=(name)=>{
        let arr=categories.filter(item=>item.name===name);
        console.log('arr_cat:',arr[0]);
        return arr[0]
    }
    
    getValueFromStore=()=>{
        const arr=this.props.input_store[this.props.input_field.key];
        if (arr===undefined) return [];
        return arr;
    }

    onClickItem=(e)=>{
        let arr=this.getValueFromStore();
        if (this.isPickedItem(e)){
            const arr1=arr.filter(item=>item.name!==e.name);
            arr=arr1;
        }
        else{
            arr.push(e);
        };

        console.log('Picked Arr on SkillPicker :',arr);
        this.props.inputAField({[this.props.input_field.key]:arr})
    }

    isPickedItem=(e)=>{
        const arr=this.getValueFromStore();
        return arr.filter(item=>item.name===e.name).length>0;
    }

    render(){
        const input_field=this.props.input_field;
        const categoryNameInStore=this.props.input_store[inputField.CATEGORY.key]
        const cat=this.findCategoryByName(categoryNameInStore)
        const domain_value=cat!==undefined?
                cat.predefined_skills
                :
                input_field.domain_value;

        return (
            <div style={{display:'flex',flex:1,flexDirection: 'column'}}>
                    <text style={{fontSize:textSizes.NORMAL,color:BLACK}}>
                        {input_field.label}
                    </text>
                    
                    <div style={{marginTop:5,width:'100%',alignSelf: 'baseline',display:'flex',
                        flexDirection: 'row',flexWrap:'wrap',alignItems: 'flex-start'}}>
                        {
                            domain_value===undefined?
                            null
                            :
                            domain_value.map((item,index)=>{
                           //     console.log('Item in SkillPicker :',item)
                                const is_picked=this.isPickedItem(item);
                                return (
                                    <Item 
                                        item={item}
                                        key={''+index}
                                        onClick={()=>this.onClickItem(item)}
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

const mapStateToProps = state => ({
	input_store: state.input_store
});




export default connect(mapStateToProps,actions)(SkillPickerComponent)
