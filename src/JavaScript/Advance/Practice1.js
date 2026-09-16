let Heading=document.querySelector("h2");
let boxes=document.getElementsByClassName("box");

let Strings=Heading.innerText;
let String1=boxes[0].innerText;
let String2=boxes[1].innerText;
let String3=boxes[2].innerText;

Heading.innerText=Strings+" from Sanket";
boxes[0].innerText=boxes[0].innerText+" by Sanket";
boxes[1].innerText=boxes[1].innerText+" by Sanket";
boxes[2].innerText=boxes[2].innerText+" by Sanket";
