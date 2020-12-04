//import from library 
import React, {Component} from 'react'
import CategoryItemComponent from './category_item.component'

export default class CategoryTopListComponent extends Component {
    render(){
        return (
            <div style={{width:'100vw',display:'flex',flexDirection: 'column',alignItems: 'center'}}>
            <text style={{fontSize:30,color:'#000000',marginTop:100}}>
                Popular Task Categories 
            </text>
            <div style={{marginTop:20,width:'80vw',display:'flex',flexDirection: 'row',flexWrap: 'wrap',alignItems: 'flex-start'}}>
                {
                    [1,2,3,4,5,6,7,8].map((item)=>
                        <CategoryItemComponent/>
                    )
                }
            </div>  
           
        </div>
    
        )
    }
}
