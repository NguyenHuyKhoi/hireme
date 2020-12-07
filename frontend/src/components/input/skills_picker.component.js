//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, BLUE_1, GRAY_1, GRAY_2, GRAY_3, GRAY_5, WHITE } from '../../utils/palette'
const skills=[
    'angular','react','front-end','vue','design','reactJS','wordpress'
]

class SkillItem extends Component{
    constructor(props){
        super(props);
        this.state={
            is_picked:false
        }
    }

    render(){
        const is_picked=this.state.is_picked;
        return (
            <div
                onClick={()=>{
                    this.setState({is_picked:!is_picked});
                    this.props.onClick();
                }} 
                style={{display:'flex',marginRight:10,marginTop:7,
                    justifyContent: 'center',alignItems: 'center',
                    borderRadius:3,padding: 7,
                    backgroundColor: is_picked?BLUE_1:GRAY_3}}>
            <text style={{fontSize:textSizes.SMALL,
                    color: is_picked?WHITE:GRAY_1}}>
                {this.props.skill} 
            </text>
        </div>
        )
    }
}
export default class SkillsPickerComponent extends Component {

    onClickItem=(skill)=>{

    }
    render(){
        return (
            <div style={{display:'flex',flex:1,flexDirection: 'column'}}>
                    <text style={{fontSize:textSizes.NORMAL,color:BLACK}}>
                        Skills
                    </text>
                    
                    <div style={{marginTop:5,width:'100%',alignSelf: 'baseline',display:'flex',
                        flexDirection: 'row',flexWrap:'wrap',alignItems: 'flex-start'}}>
                        {
                            skills.map((item)=>
                                <SkillItem skill={item}
                                    onClick={()=>this.onClickItem(item)}
                                />
                                )
                        }
                    </div>
            
                </div>

        )
    }
}