var input:any = document.querySelector<HTMLInputElement>('input')
var btn:any = document.querySelector<HTMLButtonElement>('button');
var taskList:string[];
var localdata:any = localStorage.getItem('localItem')
var localItems:any = JSON.parse(localdata);

btn.onclick = ()=>{
    if (localItems === null) {
        taskList = [];
    }else{
        taskList = localItems;
    }
    taskList.push(input.value);
    localStorage.setItem('localItem',JSON.stringify(taskList))
showList();

}

var showList = ()=>{
    let outPut:string = "";
    let allList:any = document.querySelector<HTMLOListElement>('.todoList');
    if (localItems === null) {
        taskList = [];
    }else{
        taskList = localItems
    }
    taskList.forEach((d)=>{
        outPut += `<li>${d}</li>`
    })
    allList.innerHTML = outPut;
}
showList();