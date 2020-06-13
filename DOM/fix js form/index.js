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
var createPhone = createEl("p");
var createTextNodePhone = document.createTextNode("Phone");
createPhone.appendChild(createTextNodePhone);
$("textphone").appendChild(createPhone);
var createIconPhone = createEl("i");
createIconPhone.className = "fas fa-plus-circle ml-1 px-2 pt-1";
$("textphone").appendChild(createIconPhone);
createIconPhone.setAttribute("id", "iconPhone");

//onclick in iicon create input
$("iconPhone").onclick = function() {
    var createDiv = createEl("Div");
    createDiv.className = "createDiv";
    var createspan1 = createEl("span");
    createspan1.setAttribute = " input col-md-3";
    var createTextNodespan = document.createTextNode("+");
    createspan1.appendChild(createTextNodespan);
    createDiv.appendChild(createspan1);
    var createInput = createEl("input");
    createInput.setAttribute("id", "input1");
    createInput.setAttribute = " form-control col-md-3";
    createDiv.appendChild(createInput);
    var createspan2 = createEl("span");
    var createTextNodespan1 = document.createTextNode("-");
    createspan2.appendChild(createTextNodespan1);
    createDiv.appendChild(createspan2);
    var createInput = createEl("input");
    createInput.setAttribute("id", "input2");
    createInput.setAttribute = " form-control col-md-3";
    createDiv.appendChild(createInput);
    var createi = createEl("i");
    createi.className = "fas fa-minus-circle col-md-6";
    createi.onclick = removeInput;
    $("form_phone").appendChild(createDiv);
    createDiv.appendChild(createi);
    createDiv.appendChild(createi);
};
$("btn").onclick = function() {
    var input = document.getElementsByTagName("input") // lấy các gía trị người dùng nhập trong thẻ input
    for (let i = 0; i <= input.length; i++) {
        //lấy giá trị input
        var v = input[i];
        if (v.value.trim() == "") {
            v.className = "tencclass";
            v.parentElement.appendChild("p");
            //v trả về thằng cha r thêm cais p để báo lỗi ra
        } //  lấy giá trị ra , trim loại bỏ 2 đâuf space

    }
}