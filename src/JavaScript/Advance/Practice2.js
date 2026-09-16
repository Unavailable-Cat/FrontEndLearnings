let newbtn=document.createElement("button");
newbtn.innerText="click me";
let para=document.getElementsByClassName("para");

newbtn.style.backgroundColor="red";
newbtn.style.color="white";

para[0].classList.add("newpara");

let body=document.body;
body.append(newbtn);