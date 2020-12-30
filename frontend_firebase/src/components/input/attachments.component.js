//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { TEXT_SIZES } from '../../utils/constants'
import { collapseText } from '../../utils/helper'
import { BLACK, BLUE_1, GRAY_2, GRAY_4, GRAY_5, RED_1, WHITE } from '../../utils/palette'
import ButtonComponent from '../common/button.component'

class NewFile extends Component{
    // onFileChange=(e)=>{
    //     console.log('picked_files:',e.target.files);
    //     this.props
    // }

    onChangeFile=(event)=>{
        event.stopPropagation();
        event.preventDefault();
        var file = event.target.files[0];
        console.log('choose_file :',file);

        if (file===undefined){
            return ;
        }
        this.setState({
            new_image:file
        }); 

        let fileObj={
            name:file.name,
            type:file.type,
            size:file.size,
            content:file,
            id:(new Date()).getTime()
        }
        this.props.choose(fileObj);
        console.log('choose_file :',fileObj)/// if you want to upload latter
    }

    render(){
        return(
            <div style={{...styles.item_container,alignItems: 'center'}}>
            <text style={styles.item_upload_label}>
                Tải lên
            </text>

            <input id="fileUpload"
                type="file"
                ref={(ref) => this.upload = ref}
                style={{display: 'none'}}
                onChange={this.onChangeFile.bind(this)}
                />

            <div style={styles.item_upload_btn}>
                {/* <input type="file" onChange={this.onFileChange} multiple /> */}
                <ButtonComponent 
                    onClick={()=>{this.upload.click()}}
                    height={30} label='Chọn' color={WHITE} text_color={BLUE_1}/>
            </div>
            </div>
                        
        )
    }
}

class NormalFile extends Component{
    convertSize=(size)=>{
        if (size<1000) return (size+' bytes');
        if (size<1000000) return (Math.floor(size/1000)+' KB');
        if (size<1000000000) return (Math.floor(size/1000000)+' MB');
    }

    displayName=(name)=>{
        let arr=name.split('.');
        return collapseText(arr[0],12)+'.'+arr[1]
    }
    render(){
        const attachment=this.props.attachment;
        const disabled=this.props.disabled
        return(
            <div style={{...styles.item_container,
                width:  disabled!==undefined && disabled===false?'10vw':'14vw'}}>

                {
                    attachment.url!==undefined?
                    <a
                        href={attachment.url}
                        target="_blank" rel="noopener noreferrer" download
                        style={styles.item_name}>
                        {this.displayName(attachment.name)}
                    </a>
                    :
                    <text style={styles.item_name}>
                        {this.displayName(attachment.name)}
                    </text>

                }
              

                <div style={styles.item_row}>
                    <text style={styles.item_type}>
                        {this.convertSize(attachment.size)}
                    </text>
                    {
                        disabled!==undefined && disabled===false?
                        <div style={styles.item_del_btn}
                            onClick={this.props.delete}>
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

    constructor(props){
        super(props);
        this.state={
            attachments:this.props.attachments
        }
    }

    deleteItem=(id)=>{
        console.log('Attachments deleteItem :',id)
        //id : not auto-generated id by firebase ,it is timestamp :
        let arr=this.state.attachments.filter(item=>item.id!==id);
        this.setState({
            attachments:arr
        });

        this.props.onChange(arr)

        this.props.addFileToDeletedQueue(id);
    };

    


    addItem=async (item)=>{
        console.log('Attachments addItem :',item)
        let arr=this.state.attachments;
        arr.push(item);
        await this.setState({
            attachments:arr
        });

        this.props.onChange(arr)
    }


    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.attachments !== this.state.attachments) {
          this.setState({ attachments: nextProps.attachments });
        }
      }

    render(){
        const attachments=this.state.attachments;
        const disabled=this.props.disabled!==undefined?this.props.disabled:true
        const label=this.props.label!==undefined?this.props.label:''
        return (
            <div style={styles.container}>

                <text style={styles.title}>
                    {label}
                </text>

                <div style={styles.body}>
                    {
                        !disabled?
                        <NewFile
                            choose={this.addItem}
                        />
                        :
                        null
                    }

                    {
                        attachments.length===0?
                        <text style={{fontSize: TEXT_SIZES.SMALL,color:BLACK,textAlign:'center',margin:10}}>
                            Hiện freelancer chưa thêm tệp nào!
                        </text>
                        :
                        null
                    }
                    {
                        attachments.map((item,index)=>
                            <NormalFile 
                                attachment={item}
                                delete={()=>this.deleteItem(item.id)}
                                disabled={disabled}  key={''+index}/>
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
        marginTop: 10,
        width:'10vw',
        height:70,
        borderRadius:8,
        backgroundColor: GRAY_4,
        flexDirection: 'column',
        display:'flex',
        justifyContent: 'center'
    },
    item_upload_label:{
        fontSize:TEXT_SIZES.SMALL,
        color:BLACK
    },
    item_upload_btn:{
        width:'70%',
        marginTop:8
    },
    item_name:{
        marginLeft: 15,
        marginTop: 5,
        fontSize:TEXT_SIZES.SMALL,
        color:BLACK
    },
    item_row:{
        display:'flex',
        marginLeft: 15,
        width:'80%',
        alignSelf:'baseline',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    item_type:{
        fontSize:TEXT_SIZES.SMALL,
        color:GRAY_2
    },
    item_del_btn:{
        width: 20,
        height:20,
        marginBottom: 15,
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
