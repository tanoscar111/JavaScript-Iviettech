function $(id) {
    return document.getElementById(id);
}
var createEmail = document.createElement("p");
var creatTextNode = document.createTextNode("Email");
createEmail.appendChild(creatTextNode);
$("email1").appendChild(createEmail);
var createIcon = document.createElement("i");
createIcon.className = "fas fa-plus-circle";
createEmail.appendChild(createIcon);
$("email1").appendChild(createEmail);



//chức năng xoá 
function removeElement() {
    var removeEl = this.parentElement;
    removeEl.remove();
}
var clickadd = document.getElementsByClassName("fa-plus-circle");
clickadd[0].onclick = function() {
    var createInput = document.createElement('input');
    createInput.className = "form-control col-md-6";
    $("div").appendChild(createInput);
    var createIcon1 = document.createElement("i");
    createIcon1.onclick = removeElement;
    createIcon1.className = "fas fa-minus-circle col-md-6 ";
    $("div").appendChild(createIcon1);    
}
var createPhone = document.createElement("p");
var createTextPhone = document.createTextNode("Phone");
createPhone.appendChild(createTextPhone);
$("form").appendChild(createPhone);











// fixx  ;
// function createEL(tag) {
//     return document.createElement(tag);
// }

// function remove() {

// }
// $("id").onclick = function() {
//     var el_div = createEL("div");
//     var el_input = createEL("input");
//     var el_i = createEL("i");
//     el_div.appendChild(el_input);
//     el_div.appendChild(el_i);
//     el_i.onclick = remove;
//     $("email").appendChild(el_div);
// }