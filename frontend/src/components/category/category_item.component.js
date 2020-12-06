//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths } from '../../utils/constants'

export default class CategoryItemComponent extends Component {
    render(){
        return (
            
            <Link 
                to={routePaths.TASK_SEARCH}
                style={{width:'20vw',height:200,backgroundColor: '#093853',
                textDecoration:'none',
                display:'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
            
                <img src='https://randomuser.me/api/portraits/men/17.jpg' 
                    style={{width:50,height:30}}/>
                <div style={{backgroundColor: '#398569',borderRadius:5,marginTop:10,width:50,height:20,justifyContent: 'center',alignItems: 'center',display:'flex'   }}>
                    123
                </div>

                <text style={{marginTop:10,fontSize:20,color:'#ffffff',fontWeight:'bold',marginLeft:20,marginRight:20}}>
                    Computer Science
                </text>
                <text style={{fontSize:14,color:'#ffffff',marginTop:8,textAlign:'center',marginLeft:20,marginRight:20}}>
                    Software Engineer ,Web development and more interesting jobs....
                </text>
            </Link>


    
        )
    }
}
