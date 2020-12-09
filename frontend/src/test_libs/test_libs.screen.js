//import from library 
import React, {Component} from 'react'
import Pagination from "react-js-pagination";
import Select from 'react-select';
import { Range } from 'react-range';
import {connect }from 'react-redux'
import * as actions from '../redux/action/input.action'
import { textSizes } from '../utils/constants';
import { BLACK, GRAY_6, WHITE } from '../utils/palette';
import ButtonComponent from '../components/common/button.component';


const colourOptions= [
    { value: {title:'category1'}, label: 'ChocolateLabel' },
    { value: {title:'category2'}, label: 'StrawberryLabel' },
    { value: {title:'category3'}, label: 'VanillaLabel' }
]

const options = {
    baseUrl: 'http://127.0.0.1',
    query: {
      warrior: 'fight'
    }
}
  

   
 class TestLibsScreen extends Component {
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

const mapStateToProps = state => ({
	input_store: state.input_store
});




export default connect(mapStateToProps,actions)(TestLibsScreen)
