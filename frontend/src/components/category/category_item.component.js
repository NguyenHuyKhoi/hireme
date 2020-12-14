//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { bullshitIcons, routePaths, TEXT_SIZES } from '../../utils/constants'
import { BLACK, BLUE_0, BLUE_1, GRAY_1, GRAY_2, GRAY_3, WHITE } from '../../utils/palette'
import {IconContext} from 'react-icons'
import SmallFieldComponent from '../common/small_field.component'


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
            

                <text style={{fontSize:TEXT_SIZES.NORMAL,marginLeft:20,marginRight:20,
                    marginBottom:10,
                        color: this.state.hover?WHITE:BLACK}}>
                    {category.name}
                </text>
                {/* <div style={{marginTop:2}}> */}
                    <SmallFieldComponent 
                        background_color={this.state.hover?BLUE_0:GRAY_3} 
                        label_color={this.state.hover?WHITE:GRAY_1} 
                        label={category.tasks}/>
                {/* </div>
               */}

            
                <text style={{fontSize:TEXT_SIZES.SMALL,
                    color: this.state.hover?GRAY_3:GRAY_1,marginTop:2,
                    marginLeft:5,marginRight:5,
                    textAlign:'center'}}>
                    {category.description}
                </text>
            </Link>
        )
    }
}


