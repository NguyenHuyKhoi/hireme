//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths, SHOW_LAYOUT, textSizes } from '../../utils/constants'
import banner from '../../assets//images/banner.jpg'
import { BLACK, BLUE_1, GRAY_2, WHITE } from '../../utils/palette'
import ButtonComponent from './button.component'
export default class HomeBannerComponent extends Component {
    render(){
        return (
            <div style={{
                    width:'100vw',height:'80vh',
                    backgroundImage:`url(${banner})`,
                    backgroundRepeat:  'no-repeat',
                    backgroundSize:'cover',
                    backgroundColor: SHOW_LAYOUT?'#093255':'',
                    display:'flex',flexDirection: 'column',justifyContent:'center'}}>

                    <div style={{width:'50%',alignSelf:'baseline',display: 'flex',flexDirection: 'column',
                        marginLeft:120}}>

                        <text style={{fontSize:textSizes.HEADER,color:WHITE,fontWeight:'bold'}}>
                            Hire Expert or be hire for any job, any time
                        </text>

                        <text style={{fontSize:textSizes.NORMAL,color:WHITE,marginTop:5}}>
                            Thousands small company use hireo to make their ideas be reality.
                        </text>

                        <div style={{marginTop: 20,width:'30%',height:40,borderRadius:5,
                            backgroundColor: BLUE_1,
                            display: 'flex', justifyContent: 'center', 
                            alignItems: 'center'}}>

                            <text style={{fontSize:textSizes.NORMAL,color:WHITE}}>
                                What do you want ?
                            </text>
                        </div>

                        <div style={{marginTop:10,width:'80%',height:52,paddingLeft:10,paddingRight:10,
                            backgroundColor: WHITE,borderWidth:2,borderColor:GRAY_2,
                            borderRadius:5,
                            display:'flex',flexDirection: 'row',alignItems: 'center'}}>

                            <input  placeholder='Enter you keyword' 
                                style={{flex:4,height:'80%',paddingLeft:10,fontSize:textSizes.NORMAL,
                                    borderWidth:0 ,boxShadow: 'none'}}/>

                            <div style={{flex:1,display: 'flex',justifyContent:'center',alignItems:'center'}}>
                                <Link to={routePaths.TASK_SEARCH}
                                    style={{width:'80%', textDecoration:'none'}}>
                                    <ButtonComponent label='Search'/>
                                </Link>
                            </div>
                            
                        </div>
                    
                    </div>
                </div>
        
        )
    }
}
