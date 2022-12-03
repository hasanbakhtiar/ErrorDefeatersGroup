
import { langdata } from "../data/langdata.js";

const langBtn = document.querySelector('#lang');
const langItem = document.querySelectorAll('.nav-link');

const multiLang = ()=>{
    if (langBtn.innerHTML === 'AZ') {
      for( let x in langdata.az){
        langItem[x].innerHTML = langdata.az[x];
      }
      langBtn.innerHTML = 'EN'
    }else{
        for( let x in langdata.en){
            langItem[x].innerHTML = langdata.en[x];
          }
          langBtn.innerHTML = 'AZ'
    }
}

langBtn.onclick = multiLang;





// document.getElementsByTagName('h1')[0].innerHTML = "Bye";
// document.getElementById('text').innerHTML = "Bye1";
// document.getElementsByClassName('test')[0].innerHTML = "Bye2";


// for(let i = 0; i<6;i++){

//     document.getElementsByTagName('li')[i].innerHTML = "new value";
// }

// document.querySelectorAll('#box')[2].innerHTML = "new data";



// const btn = document.querySelector('button');
// const text = document.querySelector('h1');
// btn.onclick =()=>{
//     if (text.innerHTML === "JavaScript is Good!") {
//         text.innerHTML = "JavaScript is Funny!"
//     }else{
//         text.innerHTML = "JavaScript is Good!"

//     }
// }





// const changeData = ()=>{
//     document.querySelector('h1').innerHTML = "JavaScript is Funny!"
// }

// document.querySelector('button').addEventListener('click',changeData);
// btn.onmouseover = changeData;

// btn.onmouseleave = ()=>{
//     document.querySelector('h1').innerHTML = "JavaScript is Good!"
// };