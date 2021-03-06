
import {FaHome,FaAdd,FaAdobe, FaMobile,FaWikipediaW,
    FaAccessibleIcon,FaBitcoin, FaHubspot, 
    FaPaypal, FaBroom,FaUser,FaTasks,FaFacebookMessenger,FaStreetView,FaSignOutAlt} from "react-icons/fa"
export const BASE_URL='https://localhost:3000'
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

    //sidebar_icons :
    user:<FaUser/>,
    task:<FaTasks/>,
    chat:<FaFacebookMessenger/>,
    setting:<FaStreetView/>,
    payment:<FaPaypal/>,
    logout:<FaSignOutAlt/>

    
    
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
    DASHBOARD_SETTING_USER:'/dashboard/setting/user',

    ADMIN_HOME:'/admin/home',
    ADMIN_USER_LIST:'/admin/user/list',
    ADMIN_TASK_LIST:'/admin/task/list',
    ADMIN_CHAT:'/admin/chat',
    ADMIN_SETTING:'/admin/setting',

    TEST_LIBS:'/test/libs',
    UPLOAD_FILE_AXIOS:'/test/upload_file_axios',
    TEST_FIREBASE:'/test/firebase'
}


export const INPUT_TYPE={
    EMAIL:'EMAIL',
    PASSWORD:'PASSWORD',
    USERNAME:'USERNAME'
}

// sidebar : flex=1,  body : flex=3
export const SIDEBAR_RATIO=4

export const PADDING_BODY_DASHBOARD=50;

export const  TEXT_SIZES={
    NORMAL : 20,
    SMALL  :16,
    BIG    :24,
    HEADER :28,
    HUGE :32
}
export const SHOW_LAYOUT=false


export const CARD_COMPANIES_DOMAIN=[
    {
        index:1,
        name:'Visa',
        code:'visa'
    },
    {
        index:2,
        name:'Master Card',
        code:'master_card'
    },
    {
        index:3,
        name:'American Express',
        code:'american_express'
    },
    {
        index:4,
        name:'Discover',
        code:'discover'
    }
]

export const HOURLY_RATE_DOMAIN=[10000,500000]
export const FIXED_PRICE_DOMAIN=[100000,10000000]
export const BIDDING_TIME_DOMAIN=[1,100]
export const CVV_DOMAIN=[0,999]
export const BUSINESS_AREA_DOMAIN=['Công nghệ','Marketing','Tài chính','Du lịch','Giáo dục','Thể thao','Tư vấn','Khác']
export const COMPANY_SIZES_DOMAIN=[ '0 - 10', '10 - 50', '50 - 100', '100 - 500','Over 500']
export const TASKS_TYPE_DOMAIN=['Giá cố định','Giá theo giờ']

export const CATEGORIES_DOMAIN=[
    {
        id:0, //defined same both server and client
        icon:'cat_mobile',
        name:'Mobile',
        description:'Phát triển ứng dụng trên Android ,IOS...',
        predefined_skills:[
            {
                //defined same both server and client, 
                //structure : [2]{0-9}[2]{0-9} : 'CATEGORY_ID''SKILLS_INDEX'
                // or CATEGORY_ID*100 + SKILLS_INDEX
                id:100, 
                name:'Android',
                
            },
            {
                id:101, 
                name:'React Native',
                
            },
            {
                id:102, 
                name:'Cordova',
                
            },
            {
                id:103, 
                name:'Flutter',
                
            },
            {
                id:104, 
                name:'iOS',
                
            },
            {
                id:105, 
                name:'Native App',
                
            },
            {
                id:106, 
                name:'Wep App',
                
            },
            {
                id:107, 
                name:'E-commerce',
                
            },
            {
                id:108,
                name:'Firebase',
                
            },
            {
                id:109,
                name:'Java',
                
            },
            {
                id:110, 
                name:'Xamarin',
                
            }
        ]
    },
    {
        id:1, //defined same both server and client
        icon:'cat_web',
        name:'Web',
        description:'Phát triển website trên mọi nền tảng.',
        predefined_skills:[
            {
                //defined same both server and client, 
                //structure : [2]{0-9}[2]{0-9} : 'CATEGORY_ID''SKILLS_INDEX'
                // or CATEGORY_ID*100 + SKILLS_INDEX
                id:200, 
                name:'HTML/CSS',
                
            },
            {
                id:201, 
                name:'JS',
                
            },
            {
                id:202, 
                name:'ReactJS',
                
            },
            {
                id:203, 
                name:'Wordpress',
                
            },
            {
                id:204, 
                name:'Angular',
                
            },
            {
                id:205, 
                name:'NodeJS',
                
            },
            {
                id:206, 
                name:'AWS',
                
            },
            {
                id:207, 
                name:'Front-end',
                
            },
            {
                id:208,
                name:'Back-end',
                
            },
            {
                id:209,
                name:'CSS Dev',
                
            },
            {
                id:210, 
                name:'Database Designer',
                
            },
            {
                id:211, 
                name:'PHP',
                
            },
            {
                id:212, 
                name:'Admin',
                
            }
        ]
    },
    {
        id:2, //defined same both server and client
        icon:'cat_design',
        name:'Design & Creative',
        description:'Thiết kế website, logo , banner ,...',
        predefined_skills:[
            {
                //defined same both server and client, 
                //structure : [2]{0-9}[2]{0-9} : 'CATEGORY_ID''SKILLS_INDEX'
                // or CATEGORY_ID*100 + SKILLS_INDEX
                id:0, 
                name:'Modelers',
                
            },
            {
                id:1, 
                name:'2D Animators',
                
            },
            {
                id:2, 
                name:'3D Artists',
                
            },
            {
                id:3, 
                name:'Game Assets',
                
            },
            {
                id:4, 
                name:'Blender3D',
                
            },
            {
                id:5, 
                name:'CAD',
                
            },
            {
                id:6, 
                name:'Figma',
                
            },
            {
                id:7, 
                name:'3Ds Max',
                
            },
            {
                id:8,
                name:'PhotoSlideShow',
                
            },
            {
                id:9,
                name:'SketchUp',
                
            },
            {
                id:10, 
                name:'Typography',
                
            },
            {
                id:11, 
                name:'Virtual Reality',
                
            },
            {
                id:12, 
                name:'Photoshop',
                
            },
            {
                id:13, 
                name:'Adobe XD',
                
            },
            {
                id:14, 
                name:'After Effect',
                
            },
            {
                id:15, 
                name:'AIllustrator',
                
            },
            {
                id:16, 
                name:'Logo',
                
            },
        ]
    },

 
    {
        id:3, //defined same both server and client
        icon:'cat_account',
        name:'Accountings/Consulting',
        description:'Đưa ra những phân tích giá trị trên mọi lĩnh vực.',
        predefined_skills:[
            {
                //defined same both server and client, 
                //structure : [2]{0-9}[2]{0-9} : 'CATEGORY_ID''SKILLS_INDEX'
                // or CATEGORY_ID*100 + SKILLS_INDEX
                id:300, 
                name:'Business Planning',
                
            },
            {
                id:301, 
                name:'Curriculum',
                
            },
            {
                id:302, 
                name:'Project manage',
                
            },
            {
                id:303, 
                name:'MathLab',
                
            },
            {
                id:304, 
                name:'Excel',
                
            },
            {
                id:305, 
                name:'Business Analysts',
                
            },
            {
                id:306, 
                name:'Trello',
                
            },
            {
                id:307, 
                name:'Tax',
                
            },
            {
                id:308,
                name:'Customer Service',
                
            },
            {
                id:309,
                name:'Interviewers',
                
            },
            {
                id:310, 
                name:'IBM SPSS',
                
            }
        ]
    },
    {
        id:4, //defined same both server and client
        icon:'cat_customer',
        name:'Customer Service',
        description:'Các dịch vụ chăm sóc khách hàng..',
        predefined_skills:[
            {
                //defined same both server and client, 
                //structure : [2]{0-9}[2]{0-9} : 'CATEGORY_ID''SKILLS_INDEX'
                // or CATEGORY_ID*100 + SKILLS_INDEX
                id:400, 
                name:'Account Manager',
                
            },
            {
                id:401, 
                name:'Cisco',
                
            },
            {
                id:402, 
                name:'Agile CRM',
                
            },
            {
                id:403, 
                name:'Billing',
                
            },
            {
                id:404, 
                name:'Zendesk',
                
            },
            {
                id:405, 
                name:'BMS',
                
            },
            {
                id:406, 
                name:'Network Architects',
                
            },
            {
                id:407, 
                name:'Broadcast',
                
            },
            {
                id:408,
                name:'Art Curators',
                
            },
            {
                id:409,
                name:'Content Moderators',
                
            },
            {
                id:410, 
                name:'AppFolio',
                
            }
        ]
    },
    {
        id:5, //defined same both server and client
        icon:'cat_engineer',
        name:'Engineering',
        description:'Thuê các kỹ sư có tay nghề cao .',
        predefined_skills:[
            {
                //defined same both server and client, 
                //structure : [2]{0-9}[2]{0-9} : 'CATEGORY_ID''SKILLS_INDEX'
                // or CATEGORY_ID*100 + SKILLS_INDEX
                id:500, 
                name:'AutoCAD',
                
            },
            {
                id:501, 
                name:'AutoDesk',
                
            },
            {
                id:502, 
                name:'Amazon FBA',
                
            },
            {
                id:503, 
                name:'Adruino',
                
            },
            {
                id:504, 
                name:'CNC',
                
            },
            {
                id:505, 
                name:'CRM',
                
            },
            {
                id:506, 
                name:'COMSOL',
                
            },
            {
                id:507, 
                name:'Electrical',
                
            },
            {
                id:508,
                name:'IBM SPSS',
                
            },
            {
                id:509,
                name:'LaTex Editors',
                
            },
            {
                id:510, 
                name:'Powerpoint',
                
            }
        ]
    },
    {
        id:6, //defined same both server and client
        icon:'cat_sale',
        name:'Sales & Marketing',
        description:'Làm việc với các nhà bán hàng, marketer hàng đầu.',
        predefined_skills:[
            {
                //defined same both server and client, 
                //structure : [2]{0-9}[2]{0-9} : 'CATEGORY_ID''SKILLS_INDEX'
                // or CATEGORY_ID*100 + SKILLS_INDEX
                id:600, 
                name:'Affiliate Marketers',
                
            },
            {
                id:601, 
                name:'ActiceCampaign',
                
            },
            {
                id:602, 
                name:'SEO',
                
            },
            {
                id:603, 
                name:'Content Marketers',
                
            },
            {
                id:604, 
                name:'CRM Specialist',
                
            },
            {
                id:605, 
                name:'Email Marketers',
                
            },
            {
                id:606, 
                name:'Hubspot',
                
            },
            {
                id:607, 
                name:'Market Research',
                
            },
            {
                id:608,
                name:'Saleforce',
                
            },
            {
                id:609,
                name:'Social Media',
                
            },
            {
                id:610, 
                name:'Tele Marketers',
                
            }
        ]
    },
    {
        id:7, //defined same both server and client
        icon:'cat_writing',
        name:'Writing & Translation',
        description:'Dịch thuật tài liệu, viết lách ,sửa bản in...',
        predefined_skills:[
            {
                //defined same both server and client, 
                //structure : [2]{0-9}[2]{0-9} : 'CATEGORY_ID''SKILLS_INDEX'
                // or CATEGORY_ID*100 + SKILLS_INDEX
                id:700, 
                name:'Academic Writing'
            },
            {
                id:701, 
                name:'Copy Editor',
                
            },
            {
                id:702, 
                name:'Grant Writer',
                
            },
            {
                id:703, 
                name:'Excel Expert',
                
            },
            {
                id:704, 
                name:'CopyWriter',
                
            },
            {
                id:705, 
                name:'Content Writer',
                
            },
            {
                id:706, 
                name:'SEO Expert',
                
            },
            {
                id:707, 
                name:'English Translation',
                
            },
            {
                id:708,
                name:'Social Media',
                
            },
            {
                id:709,
                name:'Froofreader',
                
            },
            {
                id:710, 
                name:'Techcinal Writer',
                
            }
        ]
    }
]

export const TASK_STATE_DOMAIN=[ 'all','bidding','doing','done','reported','canceled']

export const TASK_TRANSACTION={
    DONE_PAY:{
        factor:1,
        task_state:'done',
        type:['Nhận từ','Thanh toán']
    },
    FREELANCER_GIVE_UP:{
        factor:-0.5,
        task_state:'freelancer_give_up',
        type:['Từ bỏ','Nhận đền bù']
    },
    COMPANY_GIVE_UP:{
        factor:0.5,
        task_state:'company_give_up',
        type:['Nhận đền bù','Từ bỏ']
    }
}
export const USER_FILTER_DOMAIN=[ 'Tất cả' ,'Freelancer','Công ty']
