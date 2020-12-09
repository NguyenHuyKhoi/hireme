import { biddingTime, businessAreas, cardCompanies, categories, companySizes, cvv, fixedPrice, hourlyRate, taskState, taskTypes, userFilter } from "./domain_value.constant"

export const inputAction={
    INPUT_A_FIELD:'INPUT_A_FIELD'
}

export const inputField={
    EMAIL:{
        key:'EMAIL',
        label:'Email',
        type:'email',
        placeholder:'Enter email'
       
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
        type:'text',
        placeholder:'Eg: mobile dev'
        
    },

    HOURLY_RATE:{
        key:'HOURLY_RATE',
        label:'Hourly Rate',
        default_value:[10,400],
        domain_value:hourlyRate,
        unit:'$'
    },

    FIXED_PRICE:{
        key:'FIXED_PRICE',
        label:'Fixed Price',
        default_value:[50,5000],
        domain_value:fixedPrice,
        unit:'$'
    },

    SKILLS:{
        key:'SKILLS',
        label:'Skills',
        default_value:[],
        domain_value:categories[0].predefined_skills
    },

    BIDDING_COST:{
        key:'BIDDING_COST',
        label:'Bidding Cost',
        default_value:[1000],
        domain_value:fixedPrice,
        unit:'$'
    },

    BIDDING_TIME:{
        key:'BIDDING_TIME',
        label:'Bidding Time',
        default_value:[20],
        domain_value:biddingTime,
        unit:'hour'
    },

    TASK_NAME:{
        key:'TASK_NAME',
        label:'Task Name',
        type:'text',
        placeholder:'Eg: Build a chat app'
        
    },

    TASK_BUDGET:{
        key:'TASK_BUDGET',
        label:'Task Budget',
        default_value:[50,5000],
        domain_value:fixedPrice,
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
        type:'text',
        placeholder:'Write detail more ...'
    },

    MESSAGE:{
        key:'MESSAGE',
        label:'Message',
        type:'text',
        placeholder:'Enter your message'
    },


    CARD_COMPANY:{
        key:'CARD_COMPANY',
        label:'Card Company',
        default_value:cardCompanies[0],
        domain_value:cardCompanies
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
        label:'Expired ',
        default_value:new Date(),
        type:'date'
    },

    CARD_CVV:{
        key:'CARD_CVV',
        label:'CVV/CCV',
        domain_value:cvv,
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

    TRANSFER_CARD:{
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
        type:'text',
        placeholder:'Short description...'
    },

    EXP_ROLE:{
        key:'EXP_ROLE',
        label:'Role',
        type:'text',
        placeholder:'Eg: Fresher / Junior ...'
    },

    EXP_COMPANY:{
        key:'EXP_COMPANY',
        label:'Company',
        type:'text',
        placeholder:'Eg: Facebook'
    },

    EXP_FROM:{
        key: 'EXP_FROM',
        label:'From',
        type:'date',
        placeholder:'Eg : 12/02/2016'
    },

    EXP_TO:{
        key:'EXP_TO',
        label:'To',
        type:'date',
        placeholder:'Eg : 12/10/2018'
    },

    EXP_DESCRIPTION:{
        key:'EXP_DESCRIPTION',
        label:'Description',
        type:'text',
        placeholder:'Describe detail your work, skills, ....'
    },

    REVIEW:{
        key:'REVIEW',
        label:'Review',
        type:'text',
        placeholder:'Leave a review when task is comfirmed done!!!'
    },

    COMPANY_NAME:{
        key:'COMPANY_NAME',
        label:'Company Name',
        type:'text',
        placeholder:'Eg: Facebook'
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
        type:'text',
        placeholder:'Add a note...'
    },

    TASK_FILTER:{
        key:'TASK_FILTER',
        label:'Filter',
        default_value:taskState[0],
        domain_value:taskState
    },

    USER_FILTER:{
        key:'USER_FILTER',
        label:'Filter',
        default_value:userFilter[0],
        domain_value:userFilter
    },

    TASK_STATE:{
        key:'TASK_STATE',
        label:'State',
        default_value:taskState[0],
        domain_value:taskState
    },
    

    TASK_REPORT:{
        key:'TASK_REPORT',
        label:'Report'
    },

    TASK_REVIEW:{
        key:'TASK_REVIEW',
        label:'Review',
    },

    TASK_GIVE_UP:{
        key:'GIVE_UP',
        label:'Give up'
    }
}

