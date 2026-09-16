let btn=document.getElementById("viewmode");
let body=document.body;
let bool=true;

btn.addEventListener("click", () =>{
    if(bool){
        bool=false;
        body.style.backgroundColor="black";
        body.style.color="white";
    }
    else{
        bool=true;
        body.style.backgroundColor="white";
        body.style.color="black";
    }
    console.log("button clicked");
});