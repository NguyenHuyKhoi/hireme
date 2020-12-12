import {FaHome,FaAdd,FaAdobe, FaMobile,FaWikipediaW,FaAccessibleIcon,FaBitcoin, FaHubspot, FaPaypal, FaBroom} from "react-icons/fa"
export const bullshitIcons={
    home :<FaHome/>,
    cat_design:<FaAdobe/>,
    cat_mobile:<FaMobile/>,
    cat_web:<FaWikipediaW/>,
    cat_account:<FaBitcoin/>,
    cat_customer:<FaAccessibleIcon/>,
    cat_engineer:<FaHubspot/>,
    cat_sale:<FaPaypal/>,
    cat_writing:<FaBroom/>,
    
    
}

export const routePaths={
    HOME:'/',
    FREELANCER_SEARCH:'/freelancer/search',
    FREELANCER_DETAIL:'/freelancer/detail',
    TASK_SEARCH:'/task/search',
    TASK_DETAIL:'/task/detail',
    COMPANY_SEARCH:'/company/search',
    COMPANY_DETAIL:'/company/detail',

    DASHBOARD_HOME:'/dashboard/home',
    DASHBOARD_TASK_POST:'/dashboard/task/post',
    DASHBOARD_TASK_LIST:'/dashboard/task/list',
    DASHBOARD_TASK_MANAMENT:'/dashboard/task/management',
    DASHBOARD_CHAT:'/dashboard/chat',
    DASHBOARD_PAYMENT:'/dashboard/payment',
    DASHBOARD_SETTING_FREELANCER:'/dashboard/setting/freelancer',
    DASHBOARD_SETTING_COMPANY:'/dashboard/setting/company',

    ADMIN_HOME:'/admin/home',
    ADMIN_USER_LIST:'/admin/user/list',
    ADMIN_TASK_LIST:'/admin/task/list',
    ADMIN_CHAT:'/admin/chat',
    ADMIN_SETTING:'/admin/setting',

    TEST_LIBS:'/test/libs',
    UPLOAD_FILE_AXIOS:'/test/upload_file_axios'
}


// sidebar : flex=1,  body : flex=3
export const SIDEBAR_RATIO=4

export const PADDING_BODY_DASHBOARD=50;

export const  textSizes={
    NORMAL : 20,
    SMALL  :16,
    BIG    :24,
    HEADER :28,
    HUGE :32
}
export const SHOW_LAYOUT=false
