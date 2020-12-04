//import from library 
import React, {Component} from 'react'

export default class FooterBarComponent extends Component {
    render(){
        return (
            <div style={{width:'100vw',backgroundColor: '#238355',
            paddingTop:40,paddingBottom:40,
            display:'flex',justifyContent: 'center',alignItems: 'center'}}>

            <div style={{width:'80%',height:160,
                display:'flex',flexDirection: 'row',justifyContent: 'space-between'}}>

                <div style={{width:'30%',backgroundColor: '#292975'}}>

                </div>

                <div style={{width:'20%',backgroundColor: '#292975'}}>
                    
                </div>

                <div style={{width:'30%',backgroundColor: '#292975'}}>
                    
                </div>
            </div>
                        
           
        </div>
          
        )
    }
}
