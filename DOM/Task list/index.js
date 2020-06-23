function $(id) {
    return document.getElementById(id);
}

function createEL(el) {
    return document.createElement(el);
}

function createTextNode(tn) {
    return document.createTextNode(tn);
}
// var task = [];

function getTask() {
    var tasks = localStorage.getItem("task");
    var task_arr = (tasks == null) ? [] : tasks.split(":");
    displaytask(task_arr);
}

function displaytask(task_arr) {
    var out_task = '';
    for (i in task_arr) {
        out_task += '<tr>' + '<td>' + '<input type="checkbox" value="checkedValue">' + '</td>' + '<td>Task 1</td>' + "<td>" + task_arr[i] + "</td>" + '<tr>';
    }
    $("tbody").innerHTML = out_task;
}

// function addList() {
//     var getVlueInput = $("inputtext").value;
//     if (getVlueInput == null) {
//         alert("error");
//     } else {
//         task.push(getVlueInput);
//     }
// }

function addTask() {
    var v_input = $("inputtext").value.trim();
    var task = localStorage.getItem("task");
    task = (task == null) ? v_input : task + ':' + v_input;
    localStorage.setItem("task", task);
    getTask();
    var out_put = $("tbody").innerHTML;
    out_put += '<tr>' + '<td>' + '<input type="checkbox" value="checkedValue">' + '</td>' + '<td>Task 1</td>' + "<td>" + v_input + "</td>" + '<tr>';
    $("tbody").innerHTML = out_put;
    $("inputtext").value = "";
    $("inputtext").focus();
}

function clearAllTask() {
    localStorage.removeItem("task");
    $("tbody").innerHTML = "";
}
getTask();
$("addlist").onclick = addTask;
$("remove").onclick = clearAllTask;