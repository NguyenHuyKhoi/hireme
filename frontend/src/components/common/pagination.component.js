//import from library 
import React, {Component} from 'react'

export default class PaginationComponent extends Component {
    render(){
        return (
            <div style={{marginTop:30,width:'60%',display:'flex',flexDirection: 'row',alignSelf : 'center',backgroundColor: '#028350'}}>
            {
                ['<',1,2,3,4,'>'].map((item,index)=>
                <div 
                    key={''+index}
                    style={{width:60,height:60,borderRadius:7,
                    display:'flex',justifyContent: 'center',alignItems: 'center',
                    marginRight:15,backgroundColor: '#025835'}}>
                    <text style={{fontSize:30,color:'#995735'}}>
                        {item}
                    </text>
                </div>
                )
            }
        </div>
        )
    }
}
