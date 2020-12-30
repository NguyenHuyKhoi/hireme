//import from library 
import React, {Component} from 'react'
import { TEXT_SIZES } from '../utils/constants';
import { BLACK, GRAY_6, WHITE } from '../utils/palette';


  

   
 export default class TestLibsScreen extends Component {

    render(){
		const d=new Date();
        return (

            <div style={{width:'100vw',height:'100vh',
                backgroundColor:GRAY_6,
                display:'flex',flexDirection: 'column'}}>

				<text style={{fontSize: TEXT_SIZES.NORMAL,color:BLACK,marginTop:50}}>
					{d.toDateString()}
                </text>
				<text style={{fontSize: TEXT_SIZES.NORMAL,color:BLACK,marginTop:50}}>
					{d.toISOString()}
                </text>
				{/* <text style={{fontSize: TEXT_SIZES.NORMAL,color:BLACK,marginTop:50}}>
					{d.toTimeString()}
                </text>
				<text style={{fontSize: TEXT_SIZES.NORMAL,color:BLACK,marginTop:50}}>
					{d.toLocaleDateString()+' '+d.getHours()+':'+d.getMinutes()}
                </text>
				<text style={{fontSize: TEXT_SIZES.NORMAL,color:BLACK,marginTop:50}}>
					{d.toLocaleTimeString()}
                </text> */}
              
                

            </div>
            
        )
    }
}
