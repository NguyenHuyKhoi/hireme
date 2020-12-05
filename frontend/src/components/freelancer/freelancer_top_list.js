//import from library 
import React, {Component} from 'react'
import FreelancerItemComponent from './freelancer_item.component'

export default class FreelancerTopListComponent extends Component {
    render(){
        return (
            <div style={{width:'100vw',display:'flex',flexDirection: 'column',alignItems: 'center'}}>
                <text style={{fontSize:30,color:'#000000',marginTop:100}}>
                    Top Freelancers
                </text>
                <div style={{marginTop:20,width:'80vw',display:'flex',backgroundColor: '#932575',
                    flexDirection: 'row',alignItems: 'flex-start',justifyContent: 'space-between'}}>
                    {
                        [1,2,3,4,5,6].map((item)=>
                            <FreelancerItemComponent/>
                        )
                    }
                </div>  
            
            </div>
                
        )
    }
}
