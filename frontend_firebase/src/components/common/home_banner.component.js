//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import banner from '../../assets//images/banner.jpg'
import { BLACK, BLUE_1, GRAY_2, WHITE } from '../../utils/palette'
import ButtonComponent from './button.component'
import ButtonInputComponent from '../input/button_input.component'
import { routePaths, TEXT_SIZES } from '../../utils/constants'

export default class HomeBannerComponent extends Component {
    render(){
        return (
            <div style={styles.container}>

                    <div style={styles.body}>

                        <text style={styles.title}>
                            Thuê các freelancer cho mọi dự án của bạn 
                        </text>

                        <text style={styles.description}>
                            Hàng nghìn công ty đã chọn chúng tôi !
                        </text>

                        <div style={styles.question_container}>

                            <text style={styles.question}>
                                Bạn muốn tìm:
                            </text>
                        </div>


                        <Link 
                            to={routePaths.TASK_SEARCH}
                            style={styles.btn_container}>
                            <ButtonInputComponent 
                                onClick={()=>{}}
                                btn_label='Tìm' />
                        </Link>
                    
                    </div>
                </div>
        
        )
    }
}

const styles={
    container:{
        width:'100vw',
        height:'80vh',
        backgroundImage:`url(${banner})`,
        backgroundRepeat:  'no-repeat',
        backgroundSize:'cover',
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center'
    },
    body:{
        width:'50%',
        alignSelf:'baseline',
        display: 'flex',
        flexDirection: 'column',
        marginLeft:120
    },
    title:{
        fontSize:TEXT_SIZES.HEADER,
        color:WHITE,
        fontWeight:'bold'
    },
    description:{
        fontSize:TEXT_SIZES.NORMAL,
        color:WHITE,
        marginTop:5
    },
    question_container:{
        marginTop: 20,
        width:'30%',
        height:40,
        borderRadius:5,
        backgroundColor: BLUE_1,
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    question:{
        fontSize:TEXT_SIZES.NORMAL,
        color:WHITE
    },
    btn_container:{
        width:'80%',
        marginTop:20,
        textDecoration:'none'
    }
}