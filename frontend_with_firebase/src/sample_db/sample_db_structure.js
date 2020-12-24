/// this database is constructed base on response from APIs 
/// => name of fields of objects doesn't changed when integrating real APIs 
///Note : some fields is OPTIONAL , it can be not existed in API responses 
///     => Need check to display or not component which use fields
export const sample_db={
     bidding:[
          {
               id:0,//integer
               freelancer:{
                    id:0,//integer,
                    name :'',//string
                    avatar :'',//string url 
                    rate_score:'',//integer float 
               },
               intended_time :'',//integer
               intended_cost:'',//integer
               post_time:'',//integer
               
          }
     ]
}
