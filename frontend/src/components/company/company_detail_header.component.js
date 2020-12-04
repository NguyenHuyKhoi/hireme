//import from library 
import React, {Component} from 'react'

export default class CompanyDetailHeaderComponent extends Component {
    render(){
        return (
            
            <div style={{width:'100%',height:150,backgroundColor: '#024832',
            display:'flex',flexDirection: 'row',justifyContent:'center',
            alignItems: 'center'}}>

            <div style={{width:'50%',display:'flex',flexDirection: 'row',marginRight:'15%'}}>
                <img src='https://randomuser.me/api/portraits/men/17.jpg'
                    style={{width:'10%',height:'10%',borderRadius:'5%'}}/>
                
                <div style={{marginLeft:20,display:'flex',flex:1,flexDirection: 'column'}}>
                    <text style={{fontSize:30,color:'#000000'}}>
                        Facebook
                    </text>

                    <text style={{fontSize:22,color:'#000000'}}>
                        A softwar company
                    </text>
                </div>
            </div>

            <div style={{width:'15%'}}/>



        </div>

        
    
        )
    }
}
