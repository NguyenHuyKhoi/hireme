//import from library 
import React, {Component} from 'react'

export default class HeaderListComponent extends Component {
    render(){
        return (
            <div style={{width:'100%',height:40,display:'flex',flexDirection: 'row',
                backgroundColor: '#903893',
                alignItems: 'center',justifyContent: 'space-between'}}>

                <text style={{fontSize:25,color:'#000000',marginLeft:20}}>
                    Search Result
                </text>

                <div style={{display:'flex',flexDirection: 'row',marginRight:20}}>
                    <text style={{fontSize:16,color:'#043854'}}>
                        sort by
                    </text>

                    <text style={{marginLeft:20,fontSize:16,color:'#043854'}}>
                        Newest
                    </text>
                </div>
            </div>
                     
    
        )
    }
}
