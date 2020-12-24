import React ,{Component,Fragment} from 'react'
import { BrowserRouter,Route, Link, NavLink, Switch } from "react-router-dom";
import {Provider} from 'react-redux'
import {store,persistor} from './redux/store/index.store'

import './App.css';
import { PersistGate } from 'redux-persist/integration/react'

import {routePaths} from './utils/constants'
import HomeScreen from './screens/home.screen';
import FreelancerSearchScreen from './screens/freelancer_search.screen';
import TaskSearchScreen from './screens/task_search.screen';

import TaskDetailScreen from './screens/task_detail.screen';
import CompanyDetailScreen from './screens/company_detail.screen';
import FreelancerDetailScreen from './screens/freelancer_detail.screen';
import DashBoardHomeScreen from './screens/dashboard/dashboard_home.screen';
import DashBoardChatScreen from './screens/dashboard/dashboard_chat.screen';
import DashBoardTaskListScreen from './screens/dashboard/dashboard_task_list';
import DashBoardPaymentScreen from './screens/dashboard/dashboard_payment.screen';
import DashboardSettingFreelancerScreen from './screens/dashboard/dashboard_setting_freelancer.screen';
import DashboardSettingCompanyScreen from './screens/dashboard/dashboard_setting_company.screen';
import DashBoardTaskPostScreen from './screens/dashboard/dashboard_task_post.screen';
import TestLibsScreen from './test_libs/test_libs.screen';
import AdminHomeScreen from './screens/admin/admin_home.screen';
import AdminUserListScreen from './screens/admin/admin_user_list.screen';
import AdminTaskListScreen from './screens/admin/admin_task_list.screen';
import AdminChatScreen from './screens/admin/admin_chat.screen';
import AdminSettingScreen from './screens/admin/admin_setting.screen';
import DashBoardTaskManagementScreen from './screens/dashboard/dashboard_task_management';
import UploadFileAxiosScreen from './test_libs/upload_file_axios';



export default class  App extends Component {
	render (){
		return (
			<Provider store={store}>
				 <PersistGate loading={null} persistor={persistor}>

			
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
							<Route path={routePaths.FREELANCER_DETAIL+'/:id'} component={FreelancerDetailScreen}/>
							<Route path={routePaths.TASK_SEARCH} component={TaskSearchScreen}/>
							<Route path={routePaths.TASK_DETAIL+'/:id'} component={TaskDetailScreen}/>
							<Route path={routePaths.COMPANY_DETAIL+'/:id'} component={CompanyDetailScreen}/>
							
							{/* dashboard screens */}
							
							<Route path={routePaths.DASHBOARD_HOME} component={DashBoardHomeScreen}/>
							<Route path={routePaths.DASHBOARD_TASK_POST} component={DashBoardTaskPostScreen}/>
							<Route path={routePaths.DASHBOARD_TASK_LIST} component={DashBoardTaskListScreen}/>
							<Route path={routePaths.DASHBOARD_TASK_MANAMENT+'/:id'} component={DashBoardTaskManagementScreen}/>
							<Route path={routePaths.DASHBOARD_CHAT} component={DashBoardChatScreen}/>
							<Route path={routePaths.DASHBOARD_PAYMENT} component={DashBoardPaymentScreen}/>
							<Route path={routePaths.DASHBOARD_SETTING_FREELANCER} component={DashboardSettingFreelancerScreen}/>
							<Route path={routePaths.DASHBOARD_SETTING_COMPANY} component={DashboardSettingCompanyScreen}/>

							{/* admin screens */}
							
							<Route path={routePaths.ADMIN_HOME} component={AdminHomeScreen}/>
							<Route path={routePaths.ADMIN_USER_LIST} component={AdminUserListScreen}/>
							<Route path={routePaths.ADMIN_TASK_LIST} component={AdminTaskListScreen}/>
							<Route path={routePaths.ADMIN_CHAT} component={AdminChatScreen}/>
							<Route path={routePaths.ADMIN_SETTING} component={AdminSettingScreen}/>
							

							<Route path={routePaths.TEST_LIBS} component={TestLibsScreen}/>
							<Route path={routePaths.UPLOAD_FILE_AXIOS} component={UploadFileAxiosScreen}/>


							<Route path={routePaths.HOME} component={HomeScreen}/>

							

						</Switch>
				</BrowserRouter>
				</PersistGate>
			</Provider>
			
		);
  	}
}
