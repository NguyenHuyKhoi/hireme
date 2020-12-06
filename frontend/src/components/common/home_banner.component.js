//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths } from '../../utils/constants'

export default class HomeBannerComponent extends Component {
    render(){
        return (
            <div style={{width:'100vw',height:'80vh',backgroundColor: '#093255',
                    display:'flex',flexDirection: 'column',
                    paddingLeft:50,paddingTop:120}}>
                    <text style={{fontSize:30,color:'#000000',fontWeight:'bold'}}>
                        Hire Expert or be hire for any job, any time
                    </text>

                    <text style={{fontSize:25,color:'#000000',marginTop:10}}>
                        Thousands small company use hireo to make their ideas be reality.
                    </text>

                    <div style={{width:300,height:40,borderRadius:10,backgroundColor: '#309258',
                        display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:10}}>
                        <text style={{fontSize:25,color:'#000000'}}>
                            What do you want ?
                        </text>
                    </div>

                    <div style={{width:'50%',height:80,paddingLeft:10,paddingRight:10,marginTop:20,
                        backgroundColor: '#ffffff',
                        display:'flex',flexDirection: 'row',alignItems: 'center'}}>
                        <input  placeholder='Enter you keyword' style={{flex:1,height:60,paddingLeft:10}}/>

                        <Link 
                            to={routePaths.TASK_SEARCH}
                            style={{width:100,height:60,borderRadius:10,backgroundColor: '#309258',
                            textDecoration:'none',
                        marginLeft:20,
                        display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:10}}>

                        <text style={{fontSize:25,color:'#000000'}}
                           >
                            Search
                        </text>
                    </Link>
                    </div>
                </div>
        
        )
    }
}
