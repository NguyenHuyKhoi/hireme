//import from library 
import React, {Component} from 'react'
class TabBar extends Component{
    render(){
        return (
            <div 
                onClick={this.props.onClick}
                style={{display:'flex',flex:1,alignItems: 'center',
                justifyContent: 'center',backgroundColor: '#935735'}}>
                <text style={{fontSize:20,color:'#205823'}}>
                    Tab
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
                    [1,2,3,4,5].map((item,index)=>
                        <TabBar onClick={()=>this.props.onClickTab(index)}/>
                    )
                }       
        </div>

        )
    }
}
