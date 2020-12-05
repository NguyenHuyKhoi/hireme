//import from library 
import React, {Component} from 'react'
class Item extends Component{
    render(){
        return (
            <div style={{height:50,width:'100%',display:'flex',
                flexDirection: 'row',alignItems: 'center',
                justifyContent: 'center',backgroundColor: '#935735'}}>
                <text style={{fontSize:20,color:'#205823'}}>
                    Hello
                </text>
            </div>
        )
    }
}
export default class SidebarComponent extends Component {
    render(){
        return (
            <div style={{flex:1,display:'flex',flexDirection: 'column',
            alignItems: 'center',backgroundColor: '#302585'}}>
            
            <div style={{marginTop:60,width:120,height:40,borderRadius:10,
                display:'flex',justifyContent: 'center',alignItems: 'center',
                
                left:60,
                backgroundColor: '#023583'}}>
                     <text style={{fontSize:20,color:'#205823'}}>
                        Hello
                    </text>
            </div>
            <div style={{marginTop:30,display:'flex',width:'100%',flexDirection: 'column'}}>

                {
                    [1,2,3,4,5,6,7].map((item,index)=>
                        <Item/>)
                }
                
            </div>
        </div>

        )
    }
}
