import { TASK_STATE_DOMAIN } from "./constants";

export const collapseText=(text,limit_length)=>{
    if (text.length<limit_length) return text;
    return text.substring(0,limit_length);
}


//value :string
export const convertFullDateToOnlyDay=(value)=>{
    var curr = new Date(value);
    var date = curr.toISOString().substr(0,10);
    return date;
};

//value :string
export const convertFullDateToHour=(value)=>{
    var curr = new Date(value);
    var date = curr.toISOString().substr(0,16);
    return date;
};


export const hasSameElement=(arr1,arr2)=>{

    console.log('hasSameElement',arr1,arr2);
    if (arr1===undefined || arr1===[] || arr1===null) return false;
    if (arr2===undefined || arr2===[] || arr2===null) return false;

    let i=false;
    arr1.map(item1=>{
        arr2.map(item2=>{
            i=i || (item1===item2)
        })
    })

    return i
}


export const toArray=(data)=>{
    if (data==undefined) return [];
    if (data==null) return []
    return Object.values(data)
}

export const displayState=(state_code)=>{
    switch (state_code){
        case 'bidding':return 'Đang đấu giá';
        case 'doing':return 'Đang triển khai';
        case 'done':return 'Đã hoàn thành';
        case 'reported':return 'Đã bị báo cáo';
        case 'canceled':return 'Đã bị hủy';
    }

}