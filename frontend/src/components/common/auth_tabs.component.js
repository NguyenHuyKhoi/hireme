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
export default class AuthTabsComponent extends Component {
    render(){
        return (
            <div style={{width:'100%',height:30,display:'flex',
                flexDirection: 'row',backgroundColor: '#302585'}}>
                {
                    [1,2].map((item,index)=>
                        <TabBar onClick={()=>this.props.onClickTab(index)}/>
                    )
                }    
                <div style={{height:30,width:30,backgroundColor:'#935855',
                    display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <text style={{fontSize:24,color:'#335305'}}>
                        x    
                    </text>        
                </div>   
        </div>

        )
    }
}
