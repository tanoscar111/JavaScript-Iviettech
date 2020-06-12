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
    var removeEl = this;
    var div_block = this.parentElement.parentElement;
    var number = div_block.childElementCount;
    if (number > 1) {
        var el_i = this;
        var el_div_parent = this.parentElement;
        el_div_parent.remove();
    }
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
// var el_i = this;
// var div_bl = this.parentElement.parentElement // goi de thang cha ngoai vi de xem trong do co con hay khong
// var num_child = this.childElementCount; // dem so input co trong div cgha


// if (num_child > 1) {
//     var el_i = this;
//     var el_div_parent = this.parentElement;
//     el_div_parent.remove();
// }

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
// $("id_bt_submit").onclick = function() {
//     var input = document.getElementsByTagName("input") // lấy các gía trị người dùng nhập trong thẻ input
//     for (let i = 0; i <= input.length; i++) {
//         //lấy giá trị input
//         var v = input[i];
//         if (v.value.trim() == "") {
//             v.className = "tencclass";
//             v.parentElement.appendChild("p");
//             //v trả về thằng cha r thêm cais p để báo lỗi ra
//         } //  lấy giá trị ra , trim loại bỏ 2 đâuf space

//     }
// }