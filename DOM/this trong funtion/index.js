function $(id) {
    return document.getElementById(id);
}
$("bt").onclick = function() {
    this.getAttribute("class"); // this ddai dien cho bt
    var div_parent = this.parentElement; // goi den class cha
    div_parent.remove();
}