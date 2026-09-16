let URL="https://dogapi.dog/api/v2/breeds";

let newbtn=document.createElement("button");
let body=document.body;
let data;
let point=0; 

body.style.backgroundColor="black";
body.style.color="white";
newbtn.style.backgroundColor="orange";
newbtn.innerText="click for a dog breed";
newbtn.style.width="60px";
newbtn.style.height="20px";

(async function datas() {
    let response=await fetch(URL);
    console.log(response);
    data=(await response.json()).data;
    console.log(data);
})();

function getfact(){
    
    if(point===10){
        console.log("all breeds completed");
    }
    else{
        let sample=document.createElement("p");
        sample.innerText=data[point].attributes.name + "\n" + data[point].attributes.description + "\nmax-life: " + data[point].attributes.life.max + "\nmin-life: " + data[point].attributes.life.min;
        
        body.append(sample);
        point++;
    }
}

newbtn.addEventListener("click",getfact);

body.append(newbtn);