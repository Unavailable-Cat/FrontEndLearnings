// function apicall(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(`data of id ${dataId}`);
//         resolve("success");
//         },2000);
//     })
// }


// async function callingAPI(dataId1,dataId2) {
//     await apicall(dataId1);
//     await apicall(dataId2);
// }

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`data of id ${dataId} found`);
            resolve("success");
        },3000);
    })
}


async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
}