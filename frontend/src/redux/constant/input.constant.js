import { businessAreas, cardCompanies, categories, companySizes, taskTypes } from "./domain_value.constant"

export const inputAction={
    INPUT_A_FIELD:'INPUT_A_FIELD'
}

export const inputField={
    EMAIL:{
        key:'EMAIL',
        label:'Email',
        type:'email'
       
    },
    PASSWORD:{
        key:'PASSWORD',
        label:'Password',
        type:'password'
       
    },

    REPEAT_PASSWORD:{
        key:'REPEAT_PASSWORD',
        label:'Repeat Password',
        type:'password'
        
    },

    NEW_PASSWORD:{
        key:'NEW_PASSWORD',
        label:'New Password',
        type:'text'
        
    },

    REPEAT_NEW_PASSWORD:{
        key:'REPEAT_NEW_PASSWORD',
        label:'Repeat New Password',
        type:'password'
        
    },

    CATEGORY:{
        key:'CATEGORY',
        label:'Category',
        default_value:categories[0],
        domain_value:categories
    },

    KEYWORD:{
        key:'KEYWORD',
        label:'Keyword',
        type:'text'
        
    },

    HOURLY_RATE:{
        key:'HOURLY_RATE',
        label:'Hourly Rate',
        default_value:[50],
        domain_value:[10,100],
        unit:'$'
    },

    FIXED_PRICE:{
        key:'FIXED_PRICE',
        label:'Fixed Price',
        default_value:[50,1000],
        domain_value:[10,10000],
        unit:'$'
    },

    SKILLS:{
        key:'SKILLS',
        label:'Fixed Price',
        default_value:[],
        domain_value:categories[0].predefined_skills
    },

    BIDDING_COST:{
        key:'BIDDING_COST',
        label:'Bidding Cost',
        default_value:[500],
        domain_value:[10,10000],
        unit:'$'
    },

    BIDDING_TIME:{
        key:'BIDDING_TIME',
        label:'Bidding Time',
        default_value:[20],
        domain_value:[1,100],
        unit:'hour'
    },

    TASK_NAME:{
        key:'TASK_NAME',
        label:'Task Name',
        type:'text'
        
    },

    TASK_BUDGET:{
        key:'TASK_BUDGET',
        label:'Task Budget',
        default_value:[500],
        domain_value:[10,10000],
        unit:'$'
    },

    TASK_TYPE:{
        key:'TASK_TYPE',
        label:'Task type',
        default_value:taskTypes[0],
        domain_value:taskTypes
    },
        
    FILES:{
        key:'FILES',
        label:'Attachments',
        default_value:[]
    },

    DESCRIPTION:{
        key:'DESCRIPTION',
        label:'Description',
        type:'text'
    },

    MESSAGE:{
        key:'MESSAGE',
        label:'Message',
        type:'text'
    },


    CARD_COMPANY:{
        key:'CARD_COMPANY',
        label:'Card Company',
        default_value:cardCompanies[0],
        domain_name:cardCompanies
    },

    CARD_NUMBER:{
        key:'CARD_NUMBER',
        label:'Number',
        type:'number'
        
    },

    CARD_OWNER:{
        key:'CARD_OWNER',
        label:'Owner',
        type:'text'
        
    },

    CARD_DATE:{
        key:'CARD_DATE',
        label:'Expired :',
        default_value:new Date(),
        type:'date'
    },

    CARD_CVV:{
        key:'CARD_CVV',
        label:'CVV/CCV',
        domain_value:[0,999],
        type:'number'
    },

    CARD_EMAIL:{
        key:'CARD_EMAIL',
        label:'Email',
        type:'email'
        
    },


    TRANSFER_AMOUNT:{
        key:'TRANSFER_AMOUNT',
        label:'Amount',
        type:'number'
    },

    TRANSDER_CARD:{
        key:'TRANSFER_CARD',
        label:'Card'
    },


    FIRST_NAME:{
        key:'FIRST_NAME',
        label:'First Name',
        type:'text' 
    },

    LAST_NAME:{
        key:'LAST_NAME',
        label:'Last Name',
        type:'text'
    },

    TAGLINE:{
        key:'TAGLINE',
        label:'Tagline',
        type:'text'
    },

    EXP_ROLE:{
        key:'EXP_ROLE',
        label:'Role',
        type:'text'
    },

    EXP_COMPANY:{
        key:'EXP_COMPANY',
        label:'Company',
        type:'text'
    },

    EXP_FROM:{
        key: 'EXP_FROM',
        label:'From',
        type:'date'
    },

    EXP_TO:{
        key:'EXP_TO',
        label:'To',
        type:'date'
    },

    EXP_DESCRIPTION:{
        key:'EXP_DESCRIPTION',
        label:'Description',
        type:'text'
    },

    REVIEW:{
        key:'REVIEW',
        label:'Review',
        type:'text'
    },

    COMPANY_NAME:{
        key:'COMPANY_NAME',
        label:'Company Name',
        type:'text'
    },

    COMPANY_SIZE:{
        key:'COMPANY_SIZE',
        label:'Size ',
        default_value:companySizes[0],
        domain_value:companySizes
    },

    BUSINESS_AREA:{
        key:'BUSINESS_AREA',
        label:'Business Area',
        default_value:businessAreas[0],
        domain_value:businessAreas
    },

    LOCATION:{
        key:'LOCATION',
        label:'Location',
        type:'text'
    },

    LINK:{
        key:'LINK',
        label:'Link',
        type:'text'
    },
    
    NOTE:{
        key:'NOTE',
        label:'Note',
        type:'text'
    }
}

