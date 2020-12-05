import React ,{Component} from 'react'
import './App.css';
import HomeScreen from './screens/home.screen';
import FreelancerSearchScreen from './screens/freelancer_search.screen';
import TaskSearchScreen from './screens/task_search.screen';
import TaskDetailScreen from './screens/task_detail.screen';
import CompanyDetailScreen from './screens/company_detail.screen';
import FreelancerDetailScreen from './screens/freelancer_detail.screen';
import DashBoardHomeScreen from './screens/dashboard/dashboard_home.screen';
import DashBoardChatScreen from './screens/dashboard/dashboard_chat.screen';
import DashBoardPostTaskScreen from './screens/dashboard/dashboard_post_task.screen';
import DashBoardTaskListScreen from './screens/dashboard/dashboard_task_list';



export default class  App extends Component {
	render (){
		return (
			<div style={styles.container}>
				<DashBoardTaskListScreen/>
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
