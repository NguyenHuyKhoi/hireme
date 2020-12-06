//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths } from '../../utils/constants'
import RateScoreComponent from '../common/rate_score.component'

export default class TaskItemBriefComponent extends Component {
    render(){
        return (
            
            <div style={{display:'flex',width:'100%',alignSelf:'baseline',
                backgroundColor: '#093853',        
                flexDirection: 'row'}}>
    

                <div style={{paddingTop: 15,paddingBottom:15,paddingLeft:30
                    ,flex:5,display:'flex',flexDirection: 'column',

                    backgroundColor: '#329573'}}>

                    <div style={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <text style={{fontSize:20,color:'#000000',fontWeight:'bold',marginRight:30  }}>
                            Task name1
                        </text>

                        <RateScoreComponent/>
                    </div>

                    <div style={{width:'100%',display:'flex',flexDirection:'row',
                        justifyContent: 'space-between'}}>
                        <div style={{display:'flex',flex:1}}    >
                            <text style={{fontSize:16,color:'#000000'}}>
                                Posted :04/12/2020
                            </text>
                        </div>

                        <div style={{display:'flex',flex:1}}    >
                            <text style={{fontSize:16,color:'#000000'}}>
                                Undertaked : 12/12/2020
                            </text>
                        </div>

                        <div style={{display:'flex',flex:1}}    >
                            <text style={{fontSize:16,color:'#000000'}}>
                                Done : 26/12/2020
                            </text>
                        </div>
                    </div>
                
        
                </div>

                <div style={{flex:1,display:'flex',justifyContent: 'center',
                    alignItems: 'center',backgroundColor: '#032585'}}>
                
                    <Link 
                        to={routePaths.DASHBOARD_TASK_MANAMENT}
                        style={{textDecoration:'none',
                            width:'60%',height:40,display:'flex',
                        backgroundColor: '#297235',borderRadius:7,
                        justifyContent: 'center',alignItems: 'center'}}
                        >
                        <text style={{fontSize:16,color:'#ffffff'}}>
                            Detail
                        </text>

                    </Link>
                        
                </div>
            </div>


    
        )
    }
}
