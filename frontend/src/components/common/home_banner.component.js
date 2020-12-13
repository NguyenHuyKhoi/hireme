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
            <div style={{
                    width:'100vw',height:'80vh',
                    backgroundImage:`url(${banner})`,
                    backgroundRepeat:  'no-repeat',
                    backgroundSize:'cover',
                    display:'flex',flexDirection: 'column',justifyContent:'center'}}>

                    <div style={{width:'50%',alignSelf:'baseline',display: 'flex',flexDirection: 'column',
                        marginLeft:120}}>

                        <text style={{fontSize:TEXT_SIZES.HEADER,color:WHITE,fontWeight:'bold'}}>
                            Hire Expert or be hire for any job, any time
                        </text>

                        <text style={{fontSize:TEXT_SIZES.NORMAL,color:WHITE,marginTop:5}}>
                            Thousands small company use us to make their ideas be reality.
                        </text>

                        <div style={{marginTop: 20,width:'30%',height:40,borderRadius:5,
                            backgroundColor: BLUE_1,
                            display: 'flex', justifyContent: 'center', 
                            alignItems: 'center'}}>

                            <text style={{fontSize:TEXT_SIZES.NORMAL,color:WHITE}}>
                                What do you want ?
                            </text>
                        </div>


                        <Link 
                            to={routePaths.TASK_SEARCH}
                            style={{width:'80%',marginTop:20,textDecoration:'none'}}>
                            <ButtonInputComponent 
                                btn_label='Search' />
                        </Link>
                    
                    </div>
                </div>
        
        )
    }
}
