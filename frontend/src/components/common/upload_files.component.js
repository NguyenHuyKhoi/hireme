//import from library 
import React, {Component} from 'react'

export default class UploadFilesComponent extends Component {
    render(){
        return (
            <div style={{marginTop:20,display:'flex',flex:1,flexDirection: 'column'}}>
                <text style={{fontSize:20,color:'#000000'}}>
                    Upload files
                </text>

                <div style={{marginTop:20,width:'60%',height:40,borderRadius:10,
                    backgroundColor: '#923575',display:'flex',
                    justifyContent: 'center',alignItems:'center'}}>
                    <text style={{fontSize:20,color:'#000000'}}>
                         Choose
                    </text>
                </div>
                
                <div style={{marginTop:20,width:'100%',display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                    {
                    [1,2,3,4].map((item,index)=>
                        <text 
                            key={''+index}
                            style={{marginRight:40,fontSize:20,color:'#359550'}}>
                            File1.pdf
                        </text>
                    )  
                        
                    }
                </div>
                
            </div>
        )
    }
}