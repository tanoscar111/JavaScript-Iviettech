function $(id) {
    return document.getElementById(id);
}

function createEL(el) {
    return document.createElement(el);
}

function createNodeText(nt) {
    return document.createTextNode(nt);
}
function getTask() {
    var oldTask = localStorage.getItem("task");
    var oldTask_array = (oldTask == null) ? [] : oldTask.split(":");
    return oldTask_array;
}
function displayTask(oldTask_array) {
    var displayTask = getTask(oldTask_array);
    var out_task = "";
    for (i in displayTask) {
        out_task += '<div><input type="text">' +'</div>';
    }
    $('outputDiv').innerHTML =out_task;
}
displayTask();
function addEL() {


    var out_put = $('outputDiv').innerHTML;
    out_put += '<div><input type="text">' + '</div>';
    $('outputDiv').innerHTML = out_put;
    var new_task = localStorage.getItem('task');
    new_task = (new_task == null) ? out_put : new_task + ':' + out_put;
    localStorage.setItem('task', new_task);
}

$("icon").onclick = addEL;