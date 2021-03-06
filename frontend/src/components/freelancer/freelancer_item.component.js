//import from library 
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { routePaths, TEXT_SIZES } from '../../utils/constants'
import { BLACK, BLUE_0, GRAY_1, GRAY_3, WHITE, YELLOW_1 } from '../../utils/palette'
import ButtonComponent from '../common/button.component'
import InforsBarComponent from '../common/infors_bar.component'
import SmallFieldComponent from '../common/small_field.component'

export default class FreelancerItemComponent extends Component {
    render(){
        const freelancer=this.props.freelancer
        return (
            <div style={styles.container}>
            
                <img src={freelancer.avatar}  style={styles.avatar}/>

                <text style={styles.freelancer_name}>
                    {freelancer.name}
                </text>

                <text style={styles.freelancer_tagline}>
                    {freelancer.tagline}
                </text>

                <SmallFieldComponent 
                    background_color={YELLOW_1} 
                    label_color={WHITE} 
                    label={freelancer.rate_score}/>



                <div style={styles.fields}>
                    <InforsBarComponent fields={[
                        {
                            key:'Hourly Rate',value:freelancer.hourly_rate
                        },
                        {
                            key:'Done Tasks',value:freelancer.done_tasks
                        },
                        {
                            key:'Income($)',value:freelancer.income
                        }
                    ]}/>
                </div>
                <Link 
                    to={routePaths.FREELANCER_DETAIL+`/${freelancer.id}`}
                    style={styles.btn_container}>
                    <ButtonComponent label='View Profile '/>
                </Link>
               
        
                                                

            </div>


    
        )
    }
}


const styles={
    container:{
        width:'20vw',
        height:450,
        backgroundColor: WHITE,  
        boxShadow:'5px 5px 5px 5px #707070',
        padding:20, 
        marginBottom:50,           
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar:{
        width:'40%',
        height:'25%',
        borderRadius:'50%'
    },
    freelancer_name:{
        marginTop:20,
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK
    },
    tagline:{
        fontSize:TEXT_SIZES.SMALL,
        color:GRAY_1,
        textAlign:'center',
        marginBottom:10
    },
    fields:{
        width: '100%',
        marginTop:60
    },
    btn_container:{
        width: '100%',
        marginTop:10,
        textDecoration:'none'
    }
}