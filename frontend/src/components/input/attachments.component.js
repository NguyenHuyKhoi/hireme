//import from library 
import React, {Component} from 'react'
import { textSizes } from '../../utils/constants'
import { BLACK, BLUE_1, GRAY_2, GRAY_4, GRAY_5, RED_1, WHITE } from '../../utils/palette'
import ButtonComponent from '../common/button.component'
import {connect }from 'react-redux'
import * as actions from '../../redux/action/input.action'

class NewFile extends Component{
    // onFileChange=(e)=>{
    //     console.log('picked_files:',e.target.files);
    //     this.props
    // }

    render(){
        return(
            <div style={{marginRight:10,marginTop: 7,width:'9vw',height:70,borderRadius:8,
                backgroundColor: BLUE_1,
                flexDirection: 'column',alignItems:'center',
                display:'flex',justifyContent: 'center'}}>
            <text style={{fontSize:textSizes.SMALL,color:WHITE}}>
                Upload
            </text>

            <div style={{width:'60%',marginTop:5}}>
                {/* <input type="file" onChange={this.onFileChange} multiple /> */}
                <ButtonComponent height={30} label='Choose' color={WHITE} text_color={BLUE_1}/>
            </div>
            </div>
                        
        )
    }
}

class NormalFile extends Component{
    render(){
        const attachment=this.props.attachment;
        const is_edit=this.props.is_edit
        return(
            <div style={{marginRight:10,marginTop: 7,width:'9vw',height:70,borderRadius:8,
                backgroundColor: GRAY_4,
                flexDirection: 'column',
                display:'flex',justifyContent: 'center'}}>
                <text style={{marginLeft:15,fontSize:textSizes.SMALL,color:BLACK}}>
                    {attachment.name}
                </text>

                <div style={{display:'flex',width:'75%',marginLeft:15,
                    alignSelf:'baseline',
                    flexDirection:'row',justifyContent:'space-between'}}>
                    <text style={{fontSize:textSizes.SMALL,color:GRAY_2}}>
                        {attachment.type}
                    </text>
                    {
                        is_edit!==undefined && is_edit===true?
                        <div style={{width: 25,height:25,borderRadius:3,  
                            display:'flex',justifyContent:'center',alignItems:'center',
                            backgroundColor:RED_1}}>
                            <text style={{fontSize: textSizes.SMALL,color:WHITE}}>
                                x
                            </text>
                        </div>
                        :
                        null
                    }
                </div>
               
                
            </div>
                        
        )
    }
}


class AttachmentsComponent extends Component {
    render(){
        const attachments=this.props.attachments!==undefined?this.props.attachments:[];
        const is_edit=this.props.is_edit!==undefined?this.props.is_edit:false
        const input_field=this.props.input_field;
        console.log('input_field_key:',input_field.key)
        return (
            <div style={{width:'100%',alignSelf: 'baseline',
                display:'flex',flexDirection: 'column'}}>
                <text style={{fontSize:textSizes.BIG,color:BLACK}}>
                    {input_field.label}
                </text>

                <div style={{width:'100%',display:'flex',flexDirection: 'row',
                    flexWrap:'wrap',alignItems: 'flex-start'}}>
                    {
                        is_edit?
                        <NewFile/>
                        :
                        null
                    }
                    {
                        attachments.map((item,index)=>
                            <NormalFile 
                                attachment={item}
                                is_edit={is_edit}  key={''+index}/>
                        )
                    }
                </div>
                
            </div>

            
        
    
        )
    }
}

const mapStateToProps = state => ({
	input_store: state.input_store
});




export default connect(mapStateToProps,actions)(AttachmentsComponent)
