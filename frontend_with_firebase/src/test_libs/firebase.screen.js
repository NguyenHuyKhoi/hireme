//import from library 
import React, {Component} from 'react'
import { BLACK, GRAY_6, WHITE } from '../utils/palette';


import firebase from '../firebase/config'
import ButtonComponent from '../components/common/button.component';

  

   
export default class FirebaseScreen extends Component {

    uploadFirebase=()=>{
        const ref= firebase.database().ref('test');
        ref.push({
            title:'title book',
            author :'author book'
        })
    }

    render(){
        return (

            <div style={{width:'100vw',height:'100vh',
                backgroundColor:GRAY_6,
                display:'flex',flexDirection: 'row'}}>
                <ButtonComponent
                    onClick={this.uploadFirebase}
                     label='Upload'/>
                

            </div>
            
        )
    }
}
