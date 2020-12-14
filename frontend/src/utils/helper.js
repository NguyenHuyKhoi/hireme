export const collapseText=(text,limit_length)=>{
    if (text.length<limit_length) return text;
    return text.substring(1,limit_length)+'...';
}

export const convertFullDateToOnlyDay=(value)=>{
    var curr = new Date(value);
    var date = curr.toISOString().substr(0,10);
    return date;
};

export const convertFullDateToHour=(value)=>{
    var curr = new Date(value);
    var date = curr.toISOString().substr(0,19);
    return date;
};