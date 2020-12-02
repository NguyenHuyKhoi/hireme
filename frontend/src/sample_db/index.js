//import libs:
let LoremIpsum=require('lorem-ipsum').LoremIpsum
let fs=require('fs')

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



let rand_date=()=>{
	let date=new Date();
	return ''+(Date.now()-rand(10000000))
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

const BIDDINGS=12

//create objects 
let biddings= []
for (let i=0;i<BIDDINGS;i++){
	let bidding={
		id: ''+i,
		freelancer:{
			id : ''+rand(100),
			name : lorem.generateWords(2),
			avatar:create_image_url(),
			rate_score:''+(rand(40)/10+1)
		},
		intended_cost:''+rand(10000),
		intended_time:''+rand(20),
		post_time :rand_date()
	}
	biddings.push(biddings)
}


///collect objects to only object
let db= {
	biddings:biddings,
}



//write object to json file 
fs.writeFileSync(
	'sample_db.json',
	JSON.stringify(db)
)

