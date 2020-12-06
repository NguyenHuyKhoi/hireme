//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { bullshitIcons, routePaths, textSizes } from '../../utils/constants'
import { BLACK, BLUE_0, BLUE_1, GRAY_1, GRAY_2, GRAY_3, WHITE } from '../../utils/palette'
import {IconContext} from 'react-icons'
import SmallFieldComponent from '../common/small_field.component'

class CategoryIcon extends Component{
    render(){
        return (
            <IconContext.Provider value={{ color: this.props.color, style:{width: 30,height: 30,borderRadius:2}} }>
                <div>
                    {bullshitIcons[this.props.icon]}
                </div>
            </IconContext.Provider>
        )
    }
}
export default class CategoryItemComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            hover:false
        }
    }
    render(){
        const category=this.props.category;
        return (
            
            <Link 
                onMouseLeave={()=>this.setState({hover:false})}
                onMouseEnter={()=>this.setState({hover:true})}

                to={routePaths.TASK_SEARCH}
                style={{width:'20vw',height:200,
                backgroundColor: this.state.hover?BLUE_1:WHITE,
                textDecoration:'none',
                display:'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
            
                <CategoryIcon icon='home' color={ this.state.hover?WHITE:BLUE_1}/>
                <SmallFieldComponent 
                    background_color={this.state.hover?BLUE_0:GRAY_3} 
                    label_color={this.state.hover?WHITE:GRAY_1} 
                    label={category.tasks}/>

                <text style={{fontSize:textSizes.NORMAL,marginLeft:20,marginRight:20,
                        color: this.state.hover?WHITE:BLACK}}>
                    {category.name}
                </text>
                <text style={{fontSize:textSizes.SMALL,
                    color: this.state.hover?GRAY_3:GRAY_1,marginTop:2,
                    marginLeft:20,marginRight:20,
                    textAlign:'center'}}>
                    {category.description}
                </text>
            </Link>
        )
    }
}


