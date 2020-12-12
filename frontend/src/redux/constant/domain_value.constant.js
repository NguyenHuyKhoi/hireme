
export const cardCompanies=[
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

export const hourlyRate=[10,500]
export const fixedPrice=[10,10000]
export const biddingTime=[1,100]
export const cvv=[0,999]
export const businessAreas=[
    {
        name:'Strategy'
    },
    {
        name:'Marketing'
    },
    {
        name:'Finance'
    },
    {
        name:'Human resources'
    },
    {
        name:'Technology'
    },
    {
        name:'Operations'
    },
    {
        name:'Education'
    },

    {
        name:'Others'
    }
]
export const companySizes=[
    {
        name:'0 - 10'
    },
    {
        name:'10 - 50'
    },
    {
        name:'50 - 100'
    },
    {
        name:'100 - 500'
    },
    {
        name:'Over 500'
    }
]
export const taskTypes=[  
    {
        name:'Fixed Price',
        code:'fixed_price'
    },
    {
        name:'Hourly Rate',
        code:'hourly_rate'
    }
]
export const categories=[
    {
        id:0, //defined same both server and client
        icon:'cat_design',
        name:'Design & Creative',
        description:'Design a website, an advertisement, or just a nice poster,...',
        predefined_skills:[
            {
                //defined same both server and client, 
                //structure : [2]{0-9}[2]{0-9} : 'CATEGORY_ID''SKILLS_INDEX'
                // or CATEGORY_ID*100 + SKILLS_INDEX
                id:0, 
                name:'Modelers',
                description:''
            },
            {
                id:1, 
                name:'2D Animators',
                description:''
            },
            {
                id:2, 
                name:'3D Artists',
                description:''
            },
            {
                id:3, 
                name:'Game Assets',
                description:''
            },
            {
                id:4, 
                name:'Blender3D',
                description:''
            },
            {
                id:5, 
                name:'CAD',
                description:''
            },
            {
                id:6, 
                name:'Figma',
                description:''
            },
            {
                id:7, 
                name:'3Ds Max',
                description:''
            },
            {
                id:8,
                name:'PhotoSlideShow',
                description:''
            },
            {
                id:9,
                name:'SketchUp',
                description:''
            },
            {
                id:10, 
                name:'Typography',
                description:''
            },
            {
                id:11, 
                name:'Virtual Reality',
                description:''
            },
            {
                id:12, 
                name:'Photoshop',
                description:''
            },
            {
                id:13, 
                name:'Adobe XD',
                description:''
            },
            {
                id:14, 
                name:'After Effect',
                description:''
            },
            {
                id:15, 
                name:'AIllustrator',
                description:''
            },
            {
                id:16, 
                name:'Logo',
                description:''
            },
        ]
    },
    {
        id:1, //defined same both server and client
        icon:'cat_mobile',
        name:'Mobile',
        description:'Development mobile app on android,iOS,...',
        predefined_skills:[
            {
                //defined same both server and client, 
                //structure : [2]{0-9}[2]{0-9} : 'CATEGORY_ID''SKILLS_INDEX'
                // or CATEGORY_ID*100 + SKILLS_INDEX
                id:100, 
                name:'Android',
                description:''
            },
            {
                id:101, 
                name:'React Native',
                description:''
            },
            {
                id:102, 
                name:'Cordova',
                description:''
            },
            {
                id:103, 
                name:'Flutter',
                description:''
            },
            {
                id:104, 
                name:'iOS',
                description:''
            },
            {
                id:105, 
                name:'Native App',
                description:''
            },
            {
                id:106, 
                name:'Wep App',
                description:''
            },
            {
                id:107, 
                name:'E-commerce',
                description:''
            },
            {
                id:108,
                name:'Firebase',
                description:''
            },
            {
                id:109,
                name:'Java',
                description:''
            },
            {
                id:110, 
                name:'Xamarin',
                description:''
            }
        ]
    },
    {
        id:2, //defined same both server and client
        icon:'cat_web',
        name:'Web',
        description:'Development websites on any platforms.',
        predefined_skills:[
            {
                //defined same both server and client, 
                //structure : [2]{0-9}[2]{0-9} : 'CATEGORY_ID''SKILLS_INDEX'
                // or CATEGORY_ID*100 + SKILLS_INDEX
                id:200, 
                name:'HTML/CSS',
                description:''
            },
            {
                id:201, 
                name:'JS',
                description:''
            },
            {
                id:202, 
                name:'ReactJS',
                description:''
            },
            {
                id:203, 
                name:'Wordpress',
                description:''
            },
            {
                id:204, 
                name:'Angular',
                description:''
            },
            {
                id:205, 
                name:'NodeJS',
                description:''
            },
            {
                id:206, 
                name:'AWS',
                description:''
            },
            {
                id:207, 
                name:'Front-end',
                description:''
            },
            {
                id:208,
                name:'Back-end',
                description:''
            },
            {
                id:209,
                name:'CSS Dev',
                description:''
            },
            {
                id:210, 
                name:'Database Designer',
                description:''
            },
            {
                id:211, 
                name:'PHP',
                description:''
            },
            {
                id:212, 
                name:'Admin',
                description:''
            }
        ]
    },
    {
        id:3, //defined same both server and client
        icon:'cat_account',
        name:'Accountings/Consulting',
        description:'Give valuable analytics about any fiels.',
        predefined_skills:[
            {
                //defined same both server and client, 
                //structure : [2]{0-9}[2]{0-9} : 'CATEGORY_ID''SKILLS_INDEX'
                // or CATEGORY_ID*100 + SKILLS_INDEX
                id:300, 
                name:'Business Planning',
                description:''
            },
            {
                id:301, 
                name:'Curriculum',
                description:''
            },
            {
                id:302, 
                name:'Project manage',
                description:''
            },
            {
                id:303, 
                name:'MathLab',
                description:''
            },
            {
                id:304, 
                name:'Excel',
                description:''
            },
            {
                id:305, 
                name:'Business Analysts',
                description:''
            },
            {
                id:306, 
                name:'Trello',
                description:''
            },
            {
                id:307, 
                name:'Tax',
                description:''
            },
            {
                id:308,
                name:'Customer Service',
                description:''
            },
            {
                id:309,
                name:'Interviewers',
                description:''
            },
            {
                id:310, 
                name:'IBM SPSS',
                description:''
            }
        ]
    },
    {
        id:4, //defined same both server and client
        icon:'cat_customer',
        name:'Customer Service',
        description:'Design a website, an advertisement, or just a nice poster,...',
        predefined_skills:[
            {
                //defined same both server and client, 
                //structure : [2]{0-9}[2]{0-9} : 'CATEGORY_ID''SKILLS_INDEX'
                // or CATEGORY_ID*100 + SKILLS_INDEX
                id:400, 
                name:'Account Manager',
                description:''
            },
            {
                id:401, 
                name:'Cisco',
                description:''
            },
            {
                id:402, 
                name:'Agile CRM',
                description:''
            },
            {
                id:403, 
                name:'Billing',
                description:''
            },
            {
                id:404, 
                name:'Zendesk',
                description:''
            },
            {
                id:405, 
                name:'BMS',
                description:''
            },
            {
                id:406, 
                name:'Network Architects',
                description:''
            },
            {
                id:407, 
                name:'Broadcast',
                description:''
            },
            {
                id:408,
                name:'Art Curators',
                description:''
            },
            {
                id:409,
                name:'Content Moderators',
                description:''
            },
            {
                id:410, 
                name:'AppFolio',
                description:''
            }
        ]
    },
    {
        id:5, //defined same both server and client
        icon:'cat_engineer',
        name:'Engineering',
        description:'Hire the best engineers for your work.',
        predefined_skills:[
            {
                //defined same both server and client, 
                //structure : [2]{0-9}[2]{0-9} : 'CATEGORY_ID''SKILLS_INDEX'
                // or CATEGORY_ID*100 + SKILLS_INDEX
                id:500, 
                name:'AutoCAD',
                description:''
            },
            {
                id:501, 
                name:'AutoDesk',
                description:''
            },
            {
                id:502, 
                name:'Amazon FBA',
                description:''
            },
            {
                id:503, 
                name:'Adruino',
                description:''
            },
            {
                id:504, 
                name:'CNC',
                description:''
            },
            {
                id:505, 
                name:'CRM',
                description:''
            },
            {
                id:506, 
                name:'COMSOL',
                description:''
            },
            {
                id:507, 
                name:'Electrical',
                description:''
            },
            {
                id:508,
                name:'IBM SPSS',
                description:''
            },
            {
                id:509,
                name:'LaTex Editors',
                description:''
            },
            {
                id:510, 
                name:'Powerpoint',
                description:''
            }
        ]
    },
    {
        id:6, //defined same both server and client
        icon:'cat_sale',
        name:'Sales & Marketing',
        description:'Hire saler and marketer for your products',
        predefined_skills:[
            {
                //defined same both server and client, 
                //structure : [2]{0-9}[2]{0-9} : 'CATEGORY_ID''SKILLS_INDEX'
                // or CATEGORY_ID*100 + SKILLS_INDEX
                id:600, 
                name:'Affiliate Marketers',
                description:''
            },
            {
                id:601, 
                name:'ActiceCampaign',
                description:''
            },
            {
                id:602, 
                name:'SEO',
                description:''
            },
            {
                id:603, 
                name:'Content Marketers',
                description:''
            },
            {
                id:604, 
                name:'CRM Specialist',
                description:''
            },
            {
                id:605, 
                name:'Email Marketers',
                description:''
            },
            {
                id:606, 
                name:'Hubspot',
                description:''
            },
            {
                id:607, 
                name:'Market Research',
                description:''
            },
            {
                id:608,
                name:'Saleforce',
                description:''
            },
            {
                id:609,
                name:'Social Media',
                description:''
            },
            {
                id:610, 
                name:'Tele Marketers',
                description:''
            }
        ]
    },
    {
        id:7, //defined same both server and client
        icon:'cat_writing',
        name:'Writing & Translation',
        description:'Work with the best writor and authors on worlds',
        predefined_skills:[
            {
                //defined same both server and client, 
                //structure : [2]{0-9}[2]{0-9} : 'CATEGORY_ID''SKILLS_INDEX'
                // or CATEGORY_ID*100 + SKILLS_INDEX
                id:700, 
                name:'Academic Writing',
                description:''
            },
            {
                id:701, 
                name:'Copy Editor',
                description:''
            },
            {
                id:702, 
                name:'Grant Writer',
                description:''
            },
            {
                id:703, 
                name:'Excel Expert',
                description:''
            },
            {
                id:704, 
                name:'CopyWriter',
                description:''
            },
            {
                id:705, 
                name:'Content Writer',
                description:''
            },
            {
                id:706, 
                name:'SEO Expert',
                description:''
            },
            {
                id:707, 
                name:'English Translation',
                description:''
            },
            {
                id:708,
                name:'Social Media',
                description:''
            },
            {
                id:709,
                name:'Froofreader',
                description:''
            },
            {
                id:710, 
                name:'Techcinal Writer',
                description:''
            }
        ]
    }
]

export const taskState=[
    {
        name:'All',
        code:'all'
    },
    {
        name:'Bidding',
        code:'bidding'
    },
    {
        name:'Doing',
        code:'doing'
    },
    {
        name:'Done',
        code:'done'
    },
    {
        name:'Reported',
        code:'reported'
    },
    {
        name:'Cancel',
        code:'canceled'
    }
]

export const userFilter=[
    {
        name:'All',
        code:'all'
    },
    {
        name:'Freelancer',
        code:'freelancer'
    },
    {
        name:'Company',
        code:'company'
    }
]
