//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants';
import { BLACK, BLUE_1, GRAY_4, WHITE } from '../../utils/palette';
const taskTabItems=[
    {
        label:'Detail'
    },
    {
        label:'Bidding'
    },
    {
        label:'Chat'
    },
    {
        label:'Process'
    },
    {
        label:'Payment'
    },
]
class TabBar extends Component{
    render(){
        const item=this.props.item;
        const is_focused=this.props.is_focused
        return (
            <div 
                onClick={this.props.onClick}
                style={{display:'flex',flex:1,alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: is_focused?WHITE:GRAY_4}}>
                <text style={{fontSize:TEXT_SIZES.NORMAL,
                        color:is_focused?BLUE_1:BLACK}}>
                    {item.label}
                </text>
            </div>
        )
    }
}
export default class TaskTabsBarComponent extends Component {
    render(){
        const focus_tab_index=this.props.focus_tab_index;
        return (
            <div style={{width:'100%',height:30,display:'flex',flexDirection: 'row'}}>
                {
                    taskTabItems.map((item,index)=>
                        <TabBar
                            key={''+index} 
                            item={item}
                            is_focused={index===focus_tab_index}
                            onClick={()=>this.props.onClickTab(index)}/>
                    )
                }       
        </div>

        )
    }
}
