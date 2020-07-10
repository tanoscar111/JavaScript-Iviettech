function $(id) {
    return document.getElementById(id);
}

function createEL(el) {
    return document.createElement(el);
}

function createNodeText(nt) {
    return document.createTextNode(nt);
}
var createUserName = createEL("p");
var nodeUserName = createNodeText("UserName");
createUserName.appendChild(nodeUserName);

var createItem = createEL("i");
createItem.className = "fas fa-plus-circle";
createUserName.appendChild(createItem);
createItem.setAttribute("id","icon");
$("userName").appendChild(createUserName);
 function  removeInput(){
     var deleteEL=this.parentElement;
     deleteEL.remove();
 }
function createElementinput(){
    var createDiv = createEL("div");
    createDiv.className = "createDiv";
    var createInput = createEL("input");
    createInput.className = "input col-md-6";
    var createi = createEL("i");
    createi.className = "fas fa-minus-circle col-md-6";
    createi.onclick = removeInput;
    createDiv.appendChild(createInput);
    createDiv.appendChild(createi);
    $("divuserName").appendChild(createDiv);
   
   

}

$("icon").onclick=createElementinput;