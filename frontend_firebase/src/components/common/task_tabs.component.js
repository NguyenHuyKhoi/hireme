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
                style={{...styles.item_container,
                backgroundColor: is_focused?WHITE:GRAY_4}}>
                <text style={{...styles.item_label, color:is_focused?BLUE_1:BLACK}}>
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
            <div style={styles.container}>
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

const styles={
    item_container:{
        display:'flex',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item_label:{
        fontSize:TEXT_SIZES.NORMAL
    },
    container:{
        width:'100%',
        height:30,
        display:'flex',
        flexDirection: 'row'
    }
}
