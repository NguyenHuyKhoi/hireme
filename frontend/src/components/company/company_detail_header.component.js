//import from library 
import React, {Component} from 'react'
import banner from '../../assets/images/banner.jpg'
import { TEXT_SIZES } from '../../utils/constants'
import { BLACK, WHITE, YELLOW_1 } from '../../utils/palette'
import SmallFieldComponent from '../common/small_field.component'

export default class CompanyDetailHeaderComponent extends Component {
    render(){
        const company=this.props.company
        return (
            
            <div style={{width:'100%',height:150,
                backgroundImage:`url(${banner})`,
                backgroundRepeat:  'no-repeat',
                backgroundSize:'cover',
                display:'flex',flexDirection: 'row'}}>

                <div style={{flex:1}}/>
                <div style={{flex:5,display:'flex',flexDirection: 'row',alignItems: 'center'}}>
                    <img src={company.avatar}
                        style={{height: '60%',aspectRatio:1,borderRadius:'50%'}}/>
                    
                    <div style={{marginLeft:15,display:'flex',flex:1,flexDirection: 'column'}}>
                        <text style={{fontSize:TEXT_SIZES.BIG,color:BLACK}}>
                            {company.company_name}
                        </text>

                        <text style={{fontSize:TEXT_SIZES.NORMAL,color:BLACK,marginBottom:5}}>
                            {company.tagline}
                        </text>

                        {/* <SmallFieldComponent 
                            background_color={YELLOW_1} 
                            label_color={WHITE} 
                            label={company.rate_score}/> */}
                    </div>
                </div>

                <div style={{flex:4}}/>



            </div>

    
    
        )
    }
}
