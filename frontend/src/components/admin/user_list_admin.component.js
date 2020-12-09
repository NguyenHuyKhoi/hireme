//import from library 
import React, {Component} from 'react'
import { inputField } from '../../redux/constant/input.constant'
import { WHITE } from '../../utils/palette'
import HeaderListComponent from '../common/header_list.component'
import UserItemAdminComponent from './user_item_admin.component'

export default class UserListAdminComponent extends Component {
    render(){
        return (
            <div style={{ display:'flex',flex:1,flexDirection: 'column',backgroundColor: WHITE,

                boxShadow:'3px 5px 3px 3px #707070'}}>
                {/* header list */}
                <HeaderListComponent   title='Tasks'
                    filter={inputField.USER_FILTER}/>
                
                {/* body list */}

                <div style={{display:'flex',flex:1,flexDirection: 'column'}}>
                {
                    [1,2,3,4,5].map((item,index)=>
                        <UserItemAdminComponent  
                            key={''+index}
                            index={index}/>
                    )
                }
                </div>
            

            </div>
                    
    
        )
    }
}
