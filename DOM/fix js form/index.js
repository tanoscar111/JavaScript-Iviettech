function $(id) {
    return document.getElementById(id);
}

function createEl(el) {
    return document.createElement(el);
}
var createEmail = createEl("p");
var createNodeTextEmail = document.createTextNode("Email");
createEmail.appendChild(createNodeTextEmail);
$("email1").appendChild(createEmail);
var createIconadd = createEl("i");
createIconadd.className = "fas fa-plus-circle ml-1 px-2 pt-1";
$("email1").appendChild(createIconadd);
createIconadd.setAttribute("id", "create");
// xoas el 
function removeInput() {
    var removeAllEl = this.parentElement.parentElement;
    var numberEl = removeAllEl.childElementCount;
    if (numberEl > 1) {
        var el_i = this;
        var div_block = this.parentElement;
        div_block.remove();
    }

}
//click vào icon để tạo input 
$("create").onclick = function() {
    var createDiv = createEl("div");
    createDiv.className = "createDiv";
    var createInput = createEl("input");
    createInput.className = "input col-md-6";
    var createi = createEl("i");
    createi.className = "fas fa-minus-circle col-md-6";
    createi.onclick = removeInput;
    createDiv.appendChild(createInput);
    createDiv.appendChild(createi);
    $("div1").appendChild(createDiv);
};


// create div phone
var