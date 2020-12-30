//import from library 
import React, {Component} from 'react'
import { WHITE } from '../../utils/palette'
import HeaderListComponent from '../common/header_list.component'

import LabeledInputComponent from '../input/labeled_input.component'
import LabeledSelectedInputComponent from '../input/labeled_selected_input.component'

import default_avatar from '../../assets/images/logo.png'
export default class SettingAccountComponent extends Component {
   
    constructor(props){
        super(props);
        this.state={
            new_image:null
        }
    }

    onChangeFile(event) {
        event.stopPropagation();
        event.preventDefault();
        var file = event.target.files[0];
        console.log(file);
        this.setState({
            new_image:file
        }); 

        this.props.updateInput('account','new_avatar',file);
        console.log('choose_file :',file)/// if you want to upload latter
    }

    render(){
        const account=this.props.account;

        let new_image_url=null
        if (this.state.new_image!==null) new_image_url=URL.createObjectURL(this.state.new_image)
        return (
            <div style={styles.container}>

                <HeaderListComponent title='Tài khoản' height={40}/>

                <div style={styles.body}>

                        <div style={{display:'flex',flex:1,flexDirection:'column',
                            justifyContent:'center',alignItems:'center'}}>

                            <input id="fileUpload"
                                type="file"
                                ref={(ref) => this.upload = ref}
                                style={{display: 'none'}}
                                onChange={this.onChangeFile.bind(this)}
                                />
                            <img src={
                                new_image_url!==null?
                                    new_image_url
                                    :
                                    account.avatar==='' || account.avatar===undefined?
                                        default_avatar
                                        :
                                        account.avatar
                                    } 
                                onClick={()=>{this.upload.click()}}
                                style={{width:100,height:100,borderRadius:50}}/>

                           
                        </div>
                      
                      

                        <div style={styles.content}>

                            <div style={styles.row1}>

                                <div style={{flex:4}}>
                                    <LabeledInputComponent 
                                        onChange={(value)=>{
                                            this.props.updateInput('account','username',value)
                                        }}
                                        label='Tên người dùng'
                                        value={account.username}/>
                                </div>

                                <div style={{flex:1}}/>

                                
                                <div style={{flex:4}}>
                                <LabeledInputComponent 
                                    onChange={(value)=>this.props.updateInput('account','email',value)}
                                    label='Email'
                                    value={account.email}/>
                                </div>
                            </div>

                            {/* <div style={styles.row2}>
                               
                            </div> */}
                         
                        </div>
                    </div>
                
                
            </div>
                    
           
    )
    }
}

const styles={
    container:{
        flex:1,
        display: 'flex',
        flexDirection:'column',
        backgroundColor:WHITE,
        borderRadius:3,
        boxShadow:'3px 5px 3px 3px #707070'
    },
    body:{
        flex:1,
        paddingLeft:60,
        paddingRight:60,
        paddingBottom:30,
        paddingTop:30,
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center'
    },
    avatar:{
        height:'60%',
        aspectRatio:1,
        borderRadius:10
    },
    content:{
        marginLeft:40,
        flex:3,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'
    },
    row1:{
        display:'flex',
        flexDirection:'row'
    },
    row2:{
        marginTop:15
    }
}

