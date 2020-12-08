//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, BLUE_1, GRAY_1, GRAY_2, GRAY_3, GRAY_5, WHITE } from '../../utils/palette'
import {connect }from 'react-redux'
import * as actions from '../../redux/action/input.action'

class Item extends Component{
    constructor(props){
        super(props);
        this.state={
            is_picked:false
        }
    }

    render(){
        const is_picked=this.state.is_picked;
        return (
            <div
                onClick={()=>{
                    this.setState({is_picked:!is_picked});
                    this.props.onClick();
                }} 
                style={{display:'flex',marginRight:10,marginTop:7,
                    justifyContent: 'center',alignItems: 'center',
                    borderRadius:3,padding: 7,
                    backgroundColor: is_picked?BLUE_1:GRAY_3}}>
            <text style={{fontSize:textSizes.SMALL,
                    color: is_picked?WHITE:GRAY_1}}>
                {this.props.name} 
            </text>
        </div>
        )
    }
}
class ListPickerComponent extends Component {

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
        this.props.inputAField({[this.props.input_field.key]:arr})
    }

    isPickedItem=(e)=>{
        const arr=this.getValueFromStore();
        return arr.filter(item=>item.name===e.name).length>0;
    }

    render(){
        const input_field=this.props.input_field;
        console.log('input_field of ListPickerComponent:',input_field)
        console.log('input_store:',this.props.input_store)
        return (
            <div style={{display:'flex',flex:1,flexDirection: 'column'}}>
                    <text style={{fontSize:textSizes.NORMAL,color:BLACK}}>
                        {input_field.label}
                    </text>
                    
                    <div style={{marginTop:5,width:'100%',alignSelf: 'baseline',display:'flex',
                        flexDirection: 'row',flexWrap:'wrap',alignItems: 'flex-start'}}>
                        {
                            input_field.domain_value===undefined?
                            null
                            :
                            input_field.domain_value.map((item,index)=>{
                                const is_picked=this.isPickedItem(item);
                                return (
                                    <Item item={item}
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




export default connect(mapStateToProps,actions)(ListPickerComponent)
