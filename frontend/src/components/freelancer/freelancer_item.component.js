//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths } from '../../utils/constants'

export default class FreelancerItemComponent extends Component {
    render(){
        return (
            
            <div style={{width:'25vw',height:500,backgroundColor: '#093853',
                marginTop:40,                   
                display:'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
            
                <img src='https://randomuser.me/api/portraits/men/17.jpg' 
                    style={{width:100,height:100,borderRadius:50}}/>

                <text style={{marginTop:10,fontSize:20,color:'#000000',fontWeight:'bold',marginLeft:20,marginRight:20}}>
                    Freelancers1
                </text>
                <text style={{marginTop:10,fontSize:14,color:'#ffffff',marginTop:8,textAlign:'center',marginLeft:20,marginRight:20}}>
                    UI/UX designer..
                </text>
                <div style={{marginTop:10,backgroundColor: '#398569',borderRadius:5,marginTop:10,width:40,height:30,
                    justifyContent: 'center',alignItems: 'center',display:'flex'   }}>
                    123
                </div>

                <div style={{width:'90%',height:100,
                    display:'flex',flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center'}}>
                    
                    {
                    [1,2,3].map((item)=>
                        <div style={{display:'flex',flexDirection: 'column',alignItems: 'center'}}>
                            <text style={{marginTop:10,fontSize:20,color:'#000000',fontWeight:'bold',marginLeft:20,marginRight:20}}>
                                $35
                            </text>
                            <text style={{marginTop:10,fontSize:14,color:'#ffffff',marginTop:8,textAlign:'center',marginLeft:20,marginRight:20}}>
                                Hourly Rate
                            </text>
                        </div>
                    )
                    }
                    
                    
                </div>

                <Link
                    to={routePaths.FREELANCER_DETAIL}
                style={{marginTop:20,width:'90%',height:50,backgroundColor: '#358235',
                    textDecoration:'none',
                    display:'flex',justifyContent: 'center',alignItems: 'center'}}>
                        <text style={{fontSize:20,color:'#ffffff'}}>
                        View Profile
                    </text>
                </Link>
                                                

            </div>


    
        )
    }
}
