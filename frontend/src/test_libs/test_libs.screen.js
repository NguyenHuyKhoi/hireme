//import from library 
import React, {Component} from 'react'
import Pagination from "react-js-pagination";
import { BLACK, GRAY_6, WHITE } from '../utils/palette';


  

   
 export default class TestLibsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activePage: 15
        };
      }

     
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
      }
    render(){
        return (

            <div style={{width:'100vw',height:'100vh',
                backgroundColor:GRAY_6,
                display:'flex',flexDirection: 'row'}}>
              
        

                {/* pagination */}
                    <Pagination
                    style={{display: 'flex',flexDirection: 'row'}}
                    activePage={this.state.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={450}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)}
                    />


                

            </div>
            
        )
    }
}
