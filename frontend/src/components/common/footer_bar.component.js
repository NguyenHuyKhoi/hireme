//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths, TEXT_SIZES } from '../../utils/constants'
import { BLUE_1, GRAY_1, GRAY_2, WHITE } from '../../utils/palette'
import ButtonComponent from './button.component'

export default class FooterBarComponent extends Component {
    render(){
        return (
            <div style={styles.container}>

            <div style={{flex:1}}/>

            <div style={styles.body}>

                <div style={styles.row1}>
                    <text style={styles.big_text}>
                        About us
                    </text>
                    <text style={styles.normal_text}>
                        The best platform for freelancers and companies ,and more....
                    </text>
                </div>

                <div style={styles.row2}>
                    
                    <div style={styles.row2_col1}>
                        <text style={styles.normal_text}>
                            HIREME
                        </text>
                        <text style={styles.small_text}>
                            Contact us: 
                        </text>
                        <text style={styles.small_text}>
                            hireme.contact@gmail.com
                        </text>
                    </div>

                    <div style={styles.row2_col2}>

                        <text style={styles.normal_text}>
                            Usefull links
                        </text>

                        <div style={styles.link_container}>
                            <div style={styles.link_sub_container}>
                                <Link
                                    to={routePaths.TASK_SEARCH}
                                    style={styles.small_text}>
                                    Find Tasks 
                                </Link>
                                <Link
                                    to={routePaths.FREELANCER_SEARCH}
                                    style={styles.small_text}>
                                    Find Freelancers 
                                </Link>
                            </div>

                            <div style={styles.link_sub_container}>
                                <Link
                                    to={routePaths.HOME}
                                    style={styles.small_text}>
                                    Guides
                                </Link>
                                <Link
                                    to={routePaths.HOME}
                                    style={styles.small_text}>
                                    About us 
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div style={styles.row2_col3}>
                        <text style={{...styles.normal_text,marginTop:10}}>
                            Register news from us :
                        </text>

                        <div style={styles.email_register}>
                            <input style={styles.email_input} placeholder='Enter your email ...'/>

                            <div style={styles.btn_container}>
                                <ButtonComponent label={'->'} height={35}/>
                            </div>
                          
                        </div>
                      
                    </div>
                </div>
             
            </div>
           
            <div style={{flex:1}}/>
        
                        
           
        </div>
          
        )
    }
}

const styles={
    container:{
        width:'100vw',
        height:250,
        backgroundColor: GRAY_1,
        flexDirection:'row', 
        display:'flex'
    },
    body:{
        flex:8,
        flexDirection:'column'
    },
    row1:{
        width:'100%',
        display:'flex',
        alignSelf:'baseline',
        flexDirection:'column',
        paddingTop:25,
        alignItems:'center'
    },
    big_text:{
        fontSize:TEXT_SIZES.BIG, 
        color:WHITE
    },
    normal_text:{
        fontSize:TEXT_SIZES.NORMAL, 
        color:GRAY_2
    },
    row2:{
        width:'100%',
        flex:1,
        flexDirection:'row',
        display:'flex',
        paddingTop:15
    },
    row2_col1:{
        flex:2 ,
        display:'flex',
        flexDirection:'column'
    },
    small_text:{
        marginTop:10,
        fontSize:TEXT_SIZES.SMALL,
        color:GRAY_2
    },
    row2_col2:{
        flex:2, 
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    row2_col3:{
        flex:2,
        display:'flex',
        alignItems:'flex-end',
        flexDirection:'column'
    },
    link_container:{
        marginTop:10,
        width:'100%',
        flex:1,
        flexDirection:'row',
        display:'flex'
    },
    link_sub_container:{
        flex:1,
        flexDirection:'column',
        display:'flex',
        alignItems:'center'
    },
    email_register:{
        marginTop:10,
        display:'flex',
        flexDirection:'row'
    },
    email_input:{
        height:30,
        backgroundColor:'#262626',
        color:GRAY_2,
        borderRadius:6,
        fontSize:TEXT_SIZES.SMALL
    },
    btn_container:{
        width:35,
        marginLeft:10
    }
}
