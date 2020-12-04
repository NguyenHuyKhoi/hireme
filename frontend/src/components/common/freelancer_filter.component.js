//import from library 
import React, {Component} from 'react'

export default class FreelancerFilterComponent extends Component {
    render(){
        return (
            <div style={{width:'20vw',display:'flex',flexDirection: 'column',
            backgroundColor: '#305835'}}>

            <div style={{width:'80%',display:'flex',flexDirection: 'column'}}>
                <text style={{fontSize:22,color:'#000000'}}>
                    Category
                </text>
                
                <input style={{width:'100%',height:30,marginTop:15}} placeholder='Computer science'/>
            </div>
            <div style={{marginTop:20,width:'80%',display:'flex',flexDirection: 'column'}}>
                <text style={{fontSize:22,color:'#000000'}}>
                    Keyword
                </text>
                
                <input style={{width:'100%',height:30,marginTop:15}} placeholder='Computer science'/>
            </div>

            <div style={{marginTop:20,width:'80%',display:'flex',flexDirection: 'column'}}>
                <text style={{fontSize:22,color:'#000000'}}>
                    Hourly Rate
                </text>
                
                <input style={{width:'100%',height:30,marginTop:15}} placeholder='Computer science'/>
            </div>

            <div style={{marginTop:20,width:'80%',display:'flex',flexDirection: 'column'}}>
                <text style={{fontSize:22,color:'#000000'}}>
                    Skill
                </text>
                
                <div style={{marginTop:20,width:'100%',alignSelf: 'baseline',display:'flex',
                    flexDirection: 'row',flexWrap:'wrap',
                    alignItems: 'flex-start'}}>
                {
                    [1,2,3,4,5,6,7,8].map((item)=>
                        <div style={{display:'flex',marginRight:10,marginTop:7,
                            justifyContent: 'center',alignItems: 'center',
                            borderRadius:5,backgroundColor: '#639343',padding: 7}}>
                            <text style={{fontSize:15,color:'#359325'}}>
                                riu3ry23y 
                            </text>
                        </div>
                        )
                }

                <div style={{marginTop:20,width:'100%',height:30,display:'flex',
                    backgroundColor: '#298235',
                    flexDirection: 'row',alignItems: 'center'}}>
                    <text style={{fontSize:17,color:'#292532'}}>
                        Load more item
                    </text>
                </div>
            </div>
        </div>

        </div>
       
    
        )
    }
}
