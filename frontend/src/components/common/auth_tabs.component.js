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
                    display:'flex',flex:1,alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: is_focused?WHITE:GRAY_4}}>
                <text style={{fontSize:TEXT_SIZES.SMALL,
                    color:is_focused?BLUE_1:GRAY_2}}>
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
            <div style={{
                width:'100%',height:50,display:'flex',
                flexDirection: 'row' }}>
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
                    style={{height:50,width:50,backgroundColor:GRAY_4,
                        display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <text style={{fontSize:TEXT_SIZES.HUGE,color: GRAY_2}}>
                        x    
                    </text>        
                </div>   
        </div>

        )
    }
}
