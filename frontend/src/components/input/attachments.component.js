//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK, BLUE_1, GRAY_2, GRAY_4, GRAY_5, RED_1, WHITE } from '../../utils/palette'
import ButtonComponent from '../common/button.component'

class NewFile extends Component{
    // onFileChange=(e)=>{
    //     console.log('picked_files:',e.target.files);
    //     this.props
    // }

    render(){
        return(
            <div style={styles.item_container}>
            <text style={styles.item_upload_label}>
                Upload
            </text>

            <div style={styles.item_upload_btn}>
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
            <div style={styles.item_container}>

                <text style={styles.item_name}>
                    {attachment.name}
                </text>

                <div style={styles.item_row}>
                    <text style={styles.item_type}>
                        {attachment.type}
                    </text>
                    {
                        is_edit!==undefined && is_edit===true?
                        <div style={styles.item_del_btn}>
                            <text style={styles.item_del_label}>
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


export default class AttachmentsComponent extends Component {
    render(){
        const attachments=this.props.attachments!==undefined?this.props.attachments:[];
        const is_edit=this.props.is_edit!==undefined?this.props.is_edit:false
        const label=this.props.label!==undefined?this.props.label:''
        return (
            <div style={styles.container}>

                <text style={styles.title}>
                    {label}
                </text>

                <div style={styles.body}>
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

const styles={
    container:{
        width:'100%',
        alignSelf: 'baseline',
        display:'flex',
        flexDirection: 'column'
    },
    title:{
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK
    },
    body:{
        width:'100%',
        display:'flex',
        flexDirection: 'row',
        flexWrap:'wrap',
        alignItems: 'flex-start'
    },
    item_container:{
        marginRight:10,
        marginTop: 7,
        width:'9vw',
        height:70,
        borderRadius:8,
        backgroundColor: GRAY_4,
        flexDirection: 'column',
        display:'flex',
        justifyContent: 'center'
    },
    item_upload_label:{
        fontSize:TEXT_SIZES.SMALL,
        color:WHITE
    },
    item_upload_btn:{
        width:'60%',
        marginTop:5
    },
    item_name:{
        marginLeft:15,
        fontSize:TEXT_SIZES.SMALL,
        color:BLACK
    },
    item_row:{
        display:'flex',
        width:'75%',
        marginLeft:15,
        alignSelf:'baseline',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    item_type:{
        fontSize:TEXT_SIZES.SMALL,
        color:GRAY_2
    },
    item_del_btn:{
        width: 25,
        height:25,
        borderRadius:3,  
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:RED_1
    },
    item_del_label:{
        fontSize: TEXT_SIZES.SMALL,
        color:WHITE
    }
}
