import React ,{Component} from 'react'
import './App.css';
import HomeScreen from './screens/home.screen';



export default class  App extends Component {
	render (){
		return (
			<div style={styles.container}>
				<HomeScreen/>
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
