//import libs:
let LoremIpsum=require('lorem-ipsum').LoremIpsum
let fs=require('fs')

let {categories}=require('./constants.js')
//util functions : 
let rand=(x)=>{
  return Math.floor(Math.random() * x)
}

let rand_bool=()=>{
  return (rand(2)===0?false:true)
}

let create_image_url=()=>{
  return ('https://randomuser.me/api/portraits/')
    + (rand(2)===0?'women':'men')
    + '/'
    + rand(100)
    + '.jpg'
}

let create_video_url=()=>{
  return (
    videos.url
    + videos.names[rand(videos.names.length)]
    +'.'
    +videos.type
  )
}

let create_phone=()=>{
  return '0'+(100000000+rand(900000000))
}

let create_date=()=>{
  let start=new Date(2012, 0, 1);
  let end=new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

let rand_file_type=()=>{
  let arr=['img','png','txt','js','docx','pptx','pdf']
  return arr[Math.floor(Math.random()*arr.length)];
}

let rand_card_company=()=>{
  let arr=['visa','master_card','american_express','discover']
  return arr[Math.floor(Math.random()*arr.length)];
}

let rand_business_area=()=>{
  let arr=['Strategy','Marketing','Finance','Human resources','Technology','Operations']
  return arr[Math.floor(Math.random()*arr.length)];
}

let rand_company_size=()=>{
  let arr=['0 - 10','10 - 50','50 - 100','100 - 500','Over 500']
  return arr[Math.floor(Math.random()*arr.length)];
}


let create_brief_user=()=>{
  return {
    id:''+rand(1000),
    name:lorem.generateWords(2),
    avatar:create_image_url()
  }
}
let create_skills=(category_name)=>{
  let arr=categories;
  let cat=arr.filter(item=>item.name===category_name)[0];

  // console.log('category_name:',category_name)
  // console.log('category_find:',cat)
  let skills=cat.predefined_skills.slice(0,5);
  return skills
}

const rand_category=()=>{
  const arr=categories;
  return arr[Math.floor(Math.random()*arr.length)].name;
}

let create_attachments=()=>{
  let attachments=[];
  let num_attachments=rand(10);
  for (let j=0;j<num_attachments;j++){
    let attachment={
      id:''+j,
      name:lorem.generateWords(1)+rand(4),
      type:rand_file_type(),
      url:create_image_url(),
    }
    attachments.push(attachment)
  }
  return attachments
}

let create_reviews=(num)=>{
  let get_reviews=[]
  let is_company=rand_bool?true:false
  for (let i=0;i<num;i++){

    let reviewer=create_brief_user()

    let task={
      id:''+rand(1000),
      name:lorem.generateSentences(1)
    }
    let review={
      id:''+rand(1000),
      rate_score:rand(5)+'.'+rand(9),
      time:create_date(),
      content:lorem.generateSentences(1+rand(3)),
      reviewer:reviewer,
      task:task,
      is_company:is_company
    };
    get_reviews.push(review);
  }
  return get_reviews
}

let create_experiences=()=>{
  let experiences=[];
  let num_exp=rand(6);
  for (let i=0;i<num_exp;i++){
    let exp={
      id:''+rand(100),
      role:lorem.generateWords(1+rand(4)),
      company_name:lorem.generateWords(1+rand(3)),
      description:lorem.generateSentences(1+rand(2)),
      start_time:create_date(),
      end_time:create_date()
    };

    experiences.push(exp)
  }
  return experiences;
}

let create_biddings=()=>{
  let get_bidding_list=[];
  for (let i=0;i<GET_BIDDING_LIST;i++){
    let freelancer={
      ...create_brief_user(),
      rate_score:rand(50)/10
    }

    let bidding={
      id:''+i,
      freelancer:freelancer,
      intened_time:rand(100),
      intended_cost:rand(2000),
      post_time:create_date()
    }

    get_bidding_list.push(bidding)
  }
  return get_bidding_list;
}

let task_category_name=rand_category()
let create_detail_task=()=>{
  let minP=rand(1000);
  let skills=create_skills(task_category_name);
  let attachments=create_attachments();
  

  let company=create_brief_user();




  let task={
    id :''+rand(1000),
    task_name:lorem.generateSentences(1),
    post_time:create_date(),
    category:task_category_name,
    description:lorem.generateSentences(rand(40)),
    type_price:rand_bool()?'fixed_price':'hourly_rate',
    min_suggested_price:minP,
    max_suggested_price:minP+rand(1000),
    skills:skills,
    attachments:attachments,
    company:company
  }

  return task;
}

let create_detail_company=()=>{
  let company={
    id:''+rand(100),
    company_name:lorem.generateWords(2+rand(3)),
    avatar:create_image_url(),
    description:lorem.generateSentences(10+rand(30)),
    tagline:lorem.generateSentences(1),
    employee_size:rand_company_size(),
    location:lorem.generateSentences(1),
    business_area:rand_business_area(),
    website_link:'https:'+lorem.generateWords(1)+'.com'
  };

  return company
}

let create_brief_freelancer=(num)=>{
  let search_freelancers=[];
  for (let i=0;i<num;i++){
    let freelancer={
      id:''+i,
      name:lorem.generateWords(2+rand(1)),
      avatar:create_image_url(),
      tagline:lorem.generateSentences(1),
      rate_score:rand(50)/10,
      hourly_rate:rand(500),
      done_tasks:rand(1000),
      income:rand(2000)
    }

    search_freelancers.push(freelancer)
  }

  return search_freelancers
}

let freelancer_detail_category_name=rand_category();
let create_detail_freelancer=()=>{
  let experiences=create_experiences();
  let skills=create_skills(freelancer_detail_category_name);


  let get_detail_freelancer={
    ...create_brief_user(),
    tagline:lorem.generateSentences(1),
    description:lorem.generateSentences(4+rand(20)),
    rate_score:rand(50)/10,
    done_tasks:rand(100),
    hourly_rate:rand(200),
    income:rand(100000),
    category:freelancer_detail_category_name,
    experiences:experiences,
    skills:skills
  }

  return get_detail_freelancer

}
let create_card_number=()=>{
   let number='';
   for (let i=0;i<12;i++){
     number+=''+rand(10);
   };
   return number;
}

let create_credit_cards=()=>{
  let cards=[];
  let num=rand(4)+1;
  for (let i=0;i<num;i++){
    let card={
      id:''+rand(100),
      credit_card_list_id:''+rand(100),
      card_company:rand_card_company(),
      number:create_card_number(),
      owner_name:lorem.generateWords(2),
      email:lorem.generateWords(1)+'@gmail.com',
      expired_date:create_date(),
      ccv:rand(1000)
    }

    cards.push(card);
  };

  return cards;
}

let create_transaction_history=()=>{
  let transactions=[];

  let num=rand(10)+1;
  for (let i=0;i<num;i++){
    let is_credit_card_transaction=rand_bool();
    let is_increase=rand_bool();

    if (is_credit_card_transaction){
      transaction={
        date:create_date(),
        amount:is_increase?rand(1000):-rand(1000),
        type:is_increase?'Recharge':'Withdraw',
        credit_card:{
          id:''+rand(1000),
          number:create_card_number(),
          card_company:rand_card_company()
        }
      }
    }
    else {
      transaction={
        date:create_date(),
        amount:is_increase?rand(1000):-rand(1000),
        type:is_increase?'Pay':'Cancel',
        partner:create_brief_user(),
        task:{
          id:''+rand(1000),
          name:lorem.generateWords(1+rand(5))
        }
      }
    }
   
    transactions.push(transaction);
  };
  return transactions
}



const rand_task_status=()=>{
  const arr=['bidding','doing','done','reported','cancel'];
  return arr[Math.floor(Math.random()*arr.length)]
}

const create_task_list=(num)=>{
  let tasks=[];
  for (let i=0;i<num;i++){
    let status=rand_task_status();
    let task={
      id:''+i,
      name:lorem.generateWords(2+rand(5)),
      status:rand_task_status(),
      post_time:create_date(),
      undertaked_time:rand_bool?create_date():null,
      done_time:rand_bool?create_date():null
    }
    tasks.push(task)
  }
  return tasks
}

const create_messages=(users)=>{
  let messages=[];
  let num=rand(30)+6;
  for (let i=0;i<num;i++){
    let message={
      sender: users[Math.floor(Math.random()*users.length)],
      time:create_date(),
      content:lorem.generateSentences(1+rand(3))
    }
    messages.push(message);
  }
  return messages;
}
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 6,
    min: 3
  },
  wordsPerSentence: {
    max: 8,
    min: 2
  },
});
const create_chat_list=(num)=>{
  let chats=[];
  for (let i=0;i<num;i++){
    let is_on_task=rand_bool()
    let chat={
      id:''+i,
      partner:create_brief_user(),
      latest_message:{
        time:create_date(),
        content:lorem.generateSentences(1+rand(3))
      },
      task:
        is_on_task?
        {
          id:''+rand(100),
          name:lorem.generateWords(2+rand(4))
        }
        :
        null
    }
    chats.push(chat)
  };

  return chats
}

const create_note_list=()=>{
  let notes=[];
  let num_notes=rand(10);
  for (let i=0;i<num_notes;i++){
    let note={
      id:''+i,
      date:create_date(),
      content:lorem.generateWords(1+rand(10)),
      send_by_me:rand_bool()
    };
    notes.add(note);
  };
  return notes;
}

const create_stage_list=(num)=>{
  let stages=[];
  for (let i=0;i<num;i++){
    let stage={
      index:''+i,
      title:lorem.generateWords(1+rand(3)),
      deadline:create_date(),
      percentage:rand(100),
      attachments:create_attachments(),
      link:lorem.generateWords(1)+'.com',
      notes:create_note_list
    }
    stages.push(stage);
  }
  return stages;
}

const GET_POPULAR_CATEGORY=8
const GET_POPULAR_FREELANCER=3
const SEARCH_FREELANCERS=20
const SEARCH_TASKS=12
const GET_BIDDING_LIST=12
const GET_REVIEWS=8
const GET_TASK_LIST=23
const GET_CHAT_LIST=8
const GET_STAGE_LIST=4
//create objects 
let get_popular_categories= []
for (let i=0;i<GET_POPULAR_CATEGORY;i++){
  let category={
    id:categories[i].id,
    name:categories[i].name,
    description:categories[i].description,
    tasks:''+rand(1000)
  }
  get_popular_categories.push(category)
}

let get_popular_freelancers =create_brief_freelancer(GET_POPULAR_FREELANCER)

let signin={
  token:rand(10000000)+rand(10000000000)+rand(10000000)
}

let signup={
  token:rand(10000000)+rand(10000000000)+rand(10000000)
}

let search_freelancers=create_brief_freelancer(SEARCH_FREELANCERS)



let search_tasks=[];
for (let i=0;i<SEARCH_TASKS;i++){
  let task=create_detail_task();
  search_tasks.push(task)
}

const get_bidding_list=create_biddings()
const get_detail_task=create_detail_task()



const get_reviews=create_reviews(GET_REVIEWS);
const get_detail_company=create_detail_company();
const get_detail_freelancer=create_detail_freelancer();


const credit_cards=create_credit_cards();
const transaction_history=create_transaction_history()
const get_detail_payment={
  credit_cards:credit_cards,
  balance:rand(10000),
  transaction_history:transaction_history
}

let user_id=''+rand(100);

const category_name=rand_category();
const get_setting_freelancer={
  account:{
    user_id:user_id,
    first_name:lorem.generateWords(1),
    last_name:lorem.generateWords(1),
    email:lorem.generateWords(1)+'@gmail.com',
    avatar:create_image_url()
  },
  profile:{
    user_id:user_id,
    hourly_rate:10+rand(100),
    tagline:lorem.generateSentences(1),
    category:category_name,
    description:lorem.generateSentences(4+rand(20)),
    attachments:create_attachments(),
    skills:create_skills(category_name),
    experiences:create_experiences()
  }
}

user_id=''+rand(100);
const get_setting_company={
  account:{
    user_id:user_id,
    first_name:lorem.generateWords(1),
    last_name:lorem.generateWords(1),
    email:lorem.generateWords(1)+'@gmail.com',
    avatar:create_image_url()
  },
  profile:{
    user_id:user_id,
    company_name:lorem.generateWords(2),
    employee_size:rand_company_size(),
    tagline:lorem.generateSentences(1),
    category:lorem.generateWords(2),
    description:lorem.generateSentences(4+rand(20)),
    location:lorem.generateSentences(1),
    website_link:lorem.generateWords(1)+'.com',
    business_area:rand_business_area()
  }
}


let get_task_list=create_task_list(GET_TASK_LIST);

let conversation_users=[ create_brief_user(),create_brief_user()];

let conversation_messages=create_messages(conversation_users)
let get_conversation={
  users:conversation_users,
  messages:conversation_messages
}

let get_chat_list=create_chat_list(GET_CHAT_LIST)

let get_stage_list=create_stage_list(GET_STAGE_LIST);
///collect objects to only object
let db= {
    get_popular_categories:get_popular_categories,
    get_popular_freelancers:get_popular_freelancers,
    search_freelancers:search_freelancers,
    search_tasks:search_tasks,
    get_bidding_list:get_bidding_list,
    get_detail_task:get_detail_task,
    get_reviews:get_reviews,
    get_detail_company:get_detail_company,
    get_detail_freelancer:get_detail_freelancer,
    get_detail_payment:get_detail_payment,
    get_setting_freelancer:get_setting_freelancer,
    get_setting_company:get_setting_company,
    get_task_list:get_task_list,
    get_conversation:get_conversation,
    get_chat_list:get_chat_list,
    get_stage_list:get_stage_list
}

//write object to json file 
fs.writeFileSync(
  'sample_db.json',
  JSON.stringify(db)
)

