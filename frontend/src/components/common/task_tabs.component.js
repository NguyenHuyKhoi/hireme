//import from library 
import React, {Component} from 'react'
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
        return (
            <div 
                onClick={this.props.onClick}
                style={{display:'flex',flex:1,alignItems: 'center',
                justifyContent: 'center',backgroundColor: '#935735'}}>
                <text style={{fontSize:20,color:'#205823'}}>
                    {item.label}
                </text>
            </div>
        )
    }
}
export default class TaskTabsBarComponent extends Component {
    render(){
        return (
            <div style={{width:'80vw',height:30,display:'flex',flexDirection: 'row',backgroundColor: '#302585'}}>
                {
                    taskTabItems.map((item,index)=>
                        <TabBar 
                            item={item}
                            onClick={()=>this.props.onClickTab(index)}/>
                    )
                }       
        </div>

        )
    }
}
