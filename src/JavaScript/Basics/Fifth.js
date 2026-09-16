function noOfVowels(str){
    let count=0;
    for(let ch of str){
        switch(ch){
            case 'a':
                count++;
                break;
            case 'e':
                count++;
                break;
            case 'i':
                count++;
                break;
            case 'o':
                count++;
                break;
            case 'u':
                count++;
                break;                                     
        }
    }
    console.log(count);
}
const twice = (num,index,array) => {
    array[index]=num*2;
};

let square=(value,index,array) =>{
    array[index]=value*value;
}