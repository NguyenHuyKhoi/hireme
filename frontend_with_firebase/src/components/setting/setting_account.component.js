//import from library 
import React, {Component} from 'react'
import { WHITE } from '../../utils/palette'
import HeaderListComponent from '../common/header_list.component'

import LabeledInputComponent from '../input/labeled_input.component'
import LabeledSelectedInputComponent from '../input/labeled_selected_input.component'

import default_avatar from '../../assets/images/logo.png'
export default class SettingAccountComponent extends Component {
   

    render(){
        const account=this.props.account
        return (
            <div style={styles.container}>

                <HeaderListComponent title='Account' height={40}/>

                <div style={styles.body}>

                        <img src={
                            account.avatar_url==='' || account.avatar_url===undefined?
                                default_avatar
                                :
                                account.avatar_url
                            } 
                            style={{width:100,height:100,borderRadius:50}}/>

                        <div style={styles.content}>

                            <div style={styles.row1}>

                                <div style={{flex:4}}>
                                    <LabeledInputComponent 
                                        onChange={(value)=>this.props.updateInputs('account','username',value)}
                                        label='User Name'
                                        value={account.username}/>
                                </div>

                                <div style={{flex:1}}/>

                                
                                <div style={{flex:4}}>
                                <LabeledInputComponent 
                                    onChange={(value)=>this.props.updateInputs('account','email',value)}
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
        flex:1,
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

