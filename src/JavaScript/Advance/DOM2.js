let newField=document.createElement("input");
newField.setAttribute("type","text");
newField.setAttribute("placeholder","username");

let newPass=document.createElement("input");
newPass.setAttribute("type","password");
newPass.setAttribute("placeholder","password");

let newbtn=document.createElement("button");
newbtn.setAttribute("action","submit");
newbtn.innerText="submit";

let body=document.body;
body.append(newField);
body.append(newPass);
body.append(newbtn);