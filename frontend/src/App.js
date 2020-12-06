import React ,{Component,Fragment} from 'react'
import { BrowserRouter,Route, Link, NavLink, Switch } from "react-router-dom";
import './App.css';

import {routePaths} from './utils/constants'
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
import DashBoardPaymentScreen from './screens/dashboard/dashboard_payment.screen';
import DashboardSettingFreelancerScreen from './screens/dashboard/dashboard_setting_freelancer.screen';
import DashboardSettingCompanyScreen from './screens/dashboard/dashboard_setting_company.screen';
import DashBoardTaskManagementScreen from './screens/dashboard/dashboard_task_management';



export default class  App extends Component {
	render (){
		return (
			<BrowserRouter>	
					{/* <nav >
						<div style={{display: 'flex',flexDirection: 'column'}}>
							<Link to={routePaths.HOME}>Home</Link>
							<Link to={routePaths.FREELANCER_SEARCH}>FREELANCER_SEARCH</Link>
							<Link to={routePaths.FREELANCER_DETAIL}>FREELANCER_DETAIL</Link>
							<Link to={routePaths.TASK_SEARCH}>TASK_SEARCH</Link>
						</div>

					
					</nav> */}
					<Switch>
						{/* //outside screens */}
				
						<Route path={routePaths.FREELANCER_SEARCH} component={FreelancerSearchScreen}/>
						<Route path={routePaths.FREELANCER_DETAIL} component={FreelancerDetailScreen}/>
						<Route path={routePaths.TASK_SEARCH} component={TaskSearchScreen}/>
						<Route path={routePaths.TASK_DETAIL} component={TaskDetailScreen}/>
						<Route path={routePaths.COMPANY_DETAIL} component={CompanyDetailScreen}/>
						
						{/* dashboard screens */}
						
						<Route path={routePaths.DASHBOARD_HOME} component={DashBoardHomeScreen}/>
						<Route path={routePaths.DASHBOARD_TASK_POST} component={DashBoardPostTaskScreen}/>
						<Route path={routePaths.DASHBOARD_TASK_LIST} component={DashBoardTaskListScreen}/>
						<Route path={routePaths.DASHBOARD_TASK_MANAMENT} component={DashBoardTaskManagementScreen}/>
						<Route path={routePaths.DASHBOARD_CHAT} component={DashBoardChatScreen}/>
						<Route path={routePaths.DASHBOARD_PAYMENT} component={DashBoardPaymentScreen}/>
						<Route path={routePaths.DASHBOARD_SETTING_FREELANCER} component={DashboardSettingFreelancerScreen}/>
						<Route path={routePaths.DASHBOARD_SETTING_COMPANY} component={DashboardSettingCompanyScreen}/>


						<Route path={routePaths.HOME} component={HomeScreen}/>
					</Switch>
			</BrowserRouter>
			
		);
  	}
}
