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
            
            <div style={styles.container}>

                <div style={{flex:1}}/>

                <div style={styles.body}>
                    <img src={company.avatar}  style={styles.avatar}/>
                    
                    <div style={styles.content}>
                        <text style={styles.company_name}>
                            {company.company_name}
                        </text>

                        <text style={styles.company_tagline}>
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

const styles={
    container:{
        width:'100%',
        height:150,
        backgroundImage:`url(${banner})`,
        backgroundRepeat:  'no-repeat',
        backgroundSize:'cover',
        display:'flex',
        flexDirection: 'row'
    },
    body:{
        flex:5,
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar:{
        height: '60%',
        aspectRatio:1,
        borderRadius:'50%'
    },
    content:{
        marginLeft:15,
        display:'flex',
        flex:1,
        flexDirection: 'column'
    },
    company_name:{
        fontSize:TEXT_SIZES.BIG,
        color:BLACK
    },
    company_tagline:{
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK,
        marginBottom:5
    }
}
