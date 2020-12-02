import React ,{Component} from 'react'
import './App.css';
import HeaderBarComponent from './components/common/header_bar.component';



export default class  App extends Component {
	render (){
		return (
			<div style={styles.container}>
				<HeaderBarComponent/>
			</div>
			
		);
  	}
}

const styles={
	container:{
		display: 'flex',
		width: '100vw',
		flexDirection: 'column',
	},
	body:{
		display: 'flex',
		flex:4,
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	}
}
