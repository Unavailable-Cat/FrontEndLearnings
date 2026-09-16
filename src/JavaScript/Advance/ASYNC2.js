function getData1(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data2");
            //reject("error");
        },5000);
    });
}

function getData2(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data3");
            //reject("error");
        },8000);
    });
}


let Data=getData("data1");

Data.then((res)=>{});
Data.catch((err)=>{console.log(err)});
/*
do this in console the first promise within 5 sec
let promise=getData(101);
promise
promise
*/ 