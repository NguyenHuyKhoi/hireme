//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, WHITE } from '../../utils/palette'
import FreelancerItemComponent from './freelancer_item.component'

export default class FreelancerTopListComponent extends Component {
    render(){
        const freelancers=this.props.freelancers;
        freelancers=freelancers.slide(0,3);
        return (
            <div style={{width:'100vw',
                alignSelf: 'baseline',
                display:'flex',flexDirection: 'column',alignItems: 'center'}}>

                <text style={{fontSize:textSizes.HEADER,color:BLACK,marginTop:60}}>
                    Top Freelancers
                </text>
                <div style={{marginTop:20,width:'80vw',display:'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row'
                }}>
                    {
                        freelancers.map((item,index)=>
                            <FreelancerItemComponent  key={''+index}/>
                        )
                    }
                </div>  
            
            </div>
                
        )
    }
}
