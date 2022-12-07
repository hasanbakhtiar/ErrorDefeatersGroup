// document.querySelector("button").onclick = () => {
//   document.querySelector("p").attributes[1].value = "green";
// document.querySelector('p').className = "green";
// document.querySelector('p').classList.add("green");
// document.querySelector('p').classList.remove("red");
// document.querySelector('p').classList.toggle("red");
// };


// const btn = document.querySelector('button');
// const menu = document.querySelector('.menu');


// btn.onclick=()=>{
//     if (btn.innerHTML==="X") {
//         menu.attributes[0].value='hide';
//         btn.innerHTML=">"
//     }else{
//         menu.attributes[0].value='show';
//         btn.innerHTML="X"

//     }
// }

const modeBtn = document.querySelector('#mode-btn');
const nav = document.querySelector('nav');

const mode=()=>{
    if (nav.className === "navbar navbar-expand-lg bg-light navbar-light") {
        nav.className = "navbar navbar-expand-lg bg-dark navbar-dark";
    }else{
        nav.className = "navbar navbar-expand-lg bg-light navbar-light";

    }
}
modeBtn.onclick = mode;



const input=document.querySelector('input');
const buttonI =document.querySelector('#btn-i');
const data = document.querySelector('.data');
input.onkeydown =()=>{
    input.style.height = "100px";
    input.style.transition = '1s';
    input.style.backgroundColor = 'red'
}
input.onkeyup =()=>{
    input.style.height = "70px";
    input.style.transition = '1s';
    input.style.backgroundColor = 'white'
}
buttonI.onclick=()=>{
    data.innerHTML = input.value;
}