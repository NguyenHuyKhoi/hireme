//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK, GRAY_3, GRAY_4, WHITE } from '../../utils/palette'
import ButtonComponent from '../common/button.component'


export default  class ButtonInputComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }
    render(){
        const value=this.state.value
        const btn_label=this.props.btn_label;
        return (
            <div style={{width:'100%',height:60,display:'flex',flexDirection:'row',
                backgroundColor:GRAY_3,
                justifyContent:'space-around',alignItems:'center'}}>

                <input 
                    onChange={e=>{
                        this.setState({value:e.target.value});
                        console.log('enter :',e.target.value)
                        this.props.onChange(e.target.value)}
                    }
                    value={value}
                    style={{ width:'60%', height:40,backgroundColor: WHITE,
                        paddingLeft:10,fontSize: TEXT_SIZES.NORMAL,
                        borderColor:GRAY_3,borderWidth: 1}} />

                <div style={{width: '20%'}}>
                    <ButtonComponent 
                        onClick={()=>{
                            this.setState({value:''})
                            this.props.onClick()
                        }}
                        label={btn_label!==undefined?btn_label:'Send'} />
                </div>
          

        </div>
        )
    }
}

