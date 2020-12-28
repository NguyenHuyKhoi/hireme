//import from library 
import React, {Component} from 'react'
import { BIDDING_TIME_DOMAIN, FIXED_PRICE_DOMAIN, TEXT_SIZES } from '../../utils/constants'
import { BLACK, GRAY_1, GRAY_2, GRAY_3, GRAY_4,GRAY_5, WHITE } from '../../utils/palette'
import ButtonComponent from '../common/button.component'
import NumberInputComponent from '../input/number_input.component'

export default class TaskPlaceBidComponent extends Component {
    render(){
        return (
            
            <div style={styles.container}>

                <div style={styles.header}>
                    <text style={styles.header_text}>
                            Đấu giá dự án này:
                    </text>
                </div>

                <div style={styles.body}>
                        
                        <NumberInputComponent 
                            label='Chi phí đề xuất :'
                            onChange={value=>this.props.updateInputs('bidding','budget',value)}
                            domain={FIXED_PRICE_DOMAIN}
                            value={[4000]}/>
                     

                        <div style={{width: '100%',marginTop:20}}>
                            <NumberInputComponent
                                label='Thời gian triển khai (ngày): '
                                onChange={value=>this.props.updateInputs('bidding','duration',value)}
                                domain={BIDDING_TIME_DOMAIN}
                                unit=' ngày'
                                value={[20]}/>

                        </div>
                      

                        <div style={styles.btn_container}>
                            <ButtonComponent  
                                onClick={this.props.placeBidding}
                                label='Đấu giá'/>
                        </div>
                    
                </div>

                <div style={styles.footer}>
                    <text style={styles.footer_text}>
                        Chi phí càng tối ưu, tỉ lệ được nhận càng cao!
                    </text>
                </div>
            </div>
                        
        
    
        )
    }
}

const styles={
    container:{
        width:'100%',
        borderRadius:10,
        height: 400,
        boxShadow:'5px 5px 5px #707070',
        display:'flex',
        flexDirection: 'column',
        alignSelf: 'baseline'
    },
    header:{
        flex:1,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:GRAY_4
    },
    header_text:{
        fontSize:TEXT_SIZES.NORMAL,
        color:BLACK
    },
    body:{
        flex:5,
        padding:20,
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GRAY_5
    },
    btn_container:{
        marginTop: 40,
        width: '100%'
    },
    footer:{
        flex:1,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GRAY_2
    },
    footer_text:{
        fontSize:TEXT_SIZES.SMALL,
        color:WHITE,
        textAlign: 'center'
    }
}
