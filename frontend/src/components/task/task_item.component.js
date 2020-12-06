//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths } from '../../utils/constants'

export default class TaskItemComponent extends Component {
    render(){
        return (
            
            <div style={{width:'55vw',height:200,backgroundColor: '#093853',
                marginTop:20,            
                display:'flex',flexDirection: 'row'}}>
    
                <div style={{flex:4,display:'flex',flexDirection: 'column',padding: 20,
                    backgroundColor: '#329573'}}>

                    <text style={{fontSize:20,color:'#000000',fontWeight:'bold'}}>
                        Task name1
                    </text>

                    <text style={{fontSize:14,color:'#ffffff'}}>
                        5 minute ago
                    </text>

                    <text style={{marginTop:10,fontSize:14,color:'#ffffff'  }}>
                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. 
                    </text>

                    
                    <div style={{marginTop:8,width:'100%',alignSelf: 'baseline',display:'flex',
                        flexDirection: 'row',flexWrap:'wrap',
                        alignItems: 'flex-start'}}>
                        {
                            [1,2,3,4].map((item)=>
                                <div style={{display:'flex',marginRight:10,marginTop:7,
                                    justifyContent: 'center',alignItems: 'center',
                                    borderRadius:5,backgroundColor: '#639343',padding: 7}}>
                                    <text style={{fontSize:15,color:'#359325'}}>
                                        riu3ry23y 
                                    </text>
                                </div>
                                )
                        }
                    </div>
                </div>

                <div style={{flex:2,display:'flex',justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',backgroundColor: '#032585'}}>
                    <text style={{fontSize:18,color:'#ffffff'}}>
                        $456
                    </text>

                    <text style={{fontSize:16,color:'#ffffff'}}>
                        Fixed Price
                    </text>
                    <Link  
                        to={routePaths.TASK_DETAIL}
                        style={{marginTop:15,width:'60%',height:40,display:'flex',textDecoration: 'none' ,
                        backgroundColor: '#297235',borderRadius:7,
                        justifyContent: 'center',alignItems: 'center'}}
                        >
                        <text style={{fontSize:16,color:'#ffffff'}}>
                            Bid Now
                        </text>

                    </Link>
                        
                </div>

                

                    


              
                                                

            </div>


    
        )
    }
}
