var input = document.querySelector('input');
var btn = document.querySelector('button');
var taskList;
var localdata = localStorage.getItem('localItem');
var localItems = JSON.parse(localdata);
btn.onclick = function () {
    if (localItems === null) {
        taskList = [];
    }
    else {
        taskList = localItems;
    }
    taskList.push(input.value);
    localStorage.setItem('localItem', JSON.stringify(taskList));
    showList();
};
var showList = function () {
    var outPut = "";
    var allList = document.querySelector('.todoList');
    if (localItems === null) {
        taskList = [];
    }
    else {
        taskList = localItems;
    }
    taskList.forEach(function (d) {
        outPut += "<li>".concat(d, "</li>");
    });
    allList.innerHTML = outPut;
};
showList();
