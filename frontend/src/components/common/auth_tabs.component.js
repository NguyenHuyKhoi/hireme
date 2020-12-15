//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants';
import { BLUE_1, GRAY_2, GRAY_4, WHITE } from '../../utils/palette';

const tabs=[
    {
        label:'Login'
    },
    {
        label:'Register'
    }
]
class TabBar extends Component{
    render(){
        const is_focused=this.props.is_focused;
        const tab=this.props.tab;
        return (
            <div 
                onClick={this.props.onClick}
                style={{
                    ...styles.item_container,
                    backgroundColor: is_focused?WHITE:GRAY_4}}>
                <text style={{...styles.item_label, color:is_focused?BLUE_1:GRAY_2}}>
                    {tab.label}
                </text>
            </div>
        )
    }
}

export default class AuthTabsComponent extends Component {

    render(){
        const idx=this.props.focus_tab_index
        return (
            <div style={styles.container}>
                {
                    tabs.map((item,index)=>
                        <TabBar 
                            key={''+index}
                            onClick={()=>this.props.onClickTab(index)}
                            tab={item}
                            is_focused={idx===index}/>
                    )
                }    
                <div    
                    onClick={this.props.onClickClose}
                    style={styles.btn_container}>
                    <text style={styles.btn_label}>
                        x    
                    </text>        
                </div>   
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
        fontSize:TEXT_SIZES.SMALL
    },
    container:{
        width:'100%',
        height:50,
        display:'flex',
        flexDirection: 'row' 
    },
    btn_container:{
        height:50,
        width:50,
        backgroundColor:GRAY_4,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    btn_label:{
        fontSize:TEXT_SIZES.HUGE,
        color: GRAY_2
    }
}
