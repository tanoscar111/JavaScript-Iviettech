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
$("userName").appendChild(createUserName);