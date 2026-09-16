setTimeout(()=>{console.log("1")},1000);
setTimeout(()=>{console.log("2")},2000);
setTimeout(()=>{console.log("3")},3000);
setTimeout(()=>{console.log("4")},4000);
setTimeout(()=>{console.log("5")},5000);
setTimeout(()=>{console.log("6")},6000);
setTimeout(()=>{console.log("hello")},3500);



function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log(`data ${dataId} found`);
        if(getNextData){
            getNextData();
        }
    },2000);
}
setTimeout(()=>{getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4);
        });
    });
})},7000);
