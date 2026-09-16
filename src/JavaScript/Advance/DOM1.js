console.log("hello without window");
window.console.log("hello from window");

let div=document.getElementById("firstDiv");
let para=document.getElementById("para");
let headings=document.getElementsByClassName("Heading");
let button=document.getElementsByTagName("button");

console.log(button);
console.log(div);
console.log(para);
console.log(headings);

console.dir(button);
console.dir(div);
console.dir(para);
console.dir(headings);

console.log(para.innerText);
//document.body.style.background="pink";