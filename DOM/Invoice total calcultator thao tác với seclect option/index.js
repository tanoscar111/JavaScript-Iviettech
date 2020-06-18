function $(id) {
    return document.getElementById(id);
}

function valid(v) {

}

function getValuePercent() {
    var getValueOption = $("id_selection").value;
    var getinputInvoice = $("getinputInvoice").value;
    var getinputPercent = $("getValuePercent").value;
    if (getValueOption === "2" && getinputInvoice > 1000) {
        $("getValuePercent").disabled = false;

    } else {
        $("getValuePercent").disabled = true;
    }

}
$("id_selection").onchange = getValuePercent;
$("getinputInvoice").onchange = getValuePercent;