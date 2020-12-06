//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths } from '../../utils/constants'

export default class TaskDetailHeaderComponent extends Component {
    render(){
        return (
            
            <div style={{width:'100%',height:150,backgroundColor: '#024832',
            display:'flex',flexDirection: 'row',justifyContent:'center',
            alignItems: 'center'}}>

            <div style={{width:'50%',display:'flex',flexDirection: 'row',marginRight:'15%'}}>
                <img 
                    src='https://randomuser.me/api/portraits/men/17.jpg'
                    style={{width:'10%',height:'10%',borderRadius:'5%'}}/>
            
               
                
                <div style={{marginLeft:20,display:'flex',flex:1,flexDirection: 'column'}}>
                    <text style={{fontSize:30,color:'#000000'}}>
                        Build an e-commercer app
                    </text>

                    <Link 
                        to={routePaths.COMPANY_DETAIL}
                        style={{fontSize:22,color:'#000000',textDecoration:'none'}}>
                        FaceBook
                    </Link>
                </div>
            </div>

            <div style={{width:'15%',height:80,
                borderRadius:10,
                backgroundColor: '#239794',
                flexDirection: 'column',
                display:'flex',justifyContent: 'center',alignItems: 'center'}}>
                    <text style={{fontSize:16,color:'#000000'}}>
                        Project Budget
                    </text>

                    <text style={{fontSize:22,color:'#000000'}}>
                        $2200 - $6000
                    </text>
            </div>

        </div>

        
    
        )
    }
}
