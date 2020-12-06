//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK } from '../../utils/palette'
import CategoryItemComponent from './category_item.component'

export default class CategoryTopListComponent extends Component {
    render(){
        const categories=this.props.categories;
        return (
            <div style={{
                width:'100vw',display:'flex',
                alignSelf: 'baseline',
                flexDirection: 'column',alignItems: 'center'}}>

            <text style={{fontSize:textSizes.HEADER,color:BLACK,marginTop:50}}>
                Popular Task Categories 
            </text>

            <div style={{
                marginTop:20,width:'80vw',
                display:'flex',flexDirection: 'row',flexWrap: 'wrap',
                alignItems: 'flex-start'}}>
                {
                    categories.map((item,index)=>
                        <CategoryItemComponent category={item} index={index}/>
                    )
                }
            </div>  
           
        </div>
    
        )
    }
}
