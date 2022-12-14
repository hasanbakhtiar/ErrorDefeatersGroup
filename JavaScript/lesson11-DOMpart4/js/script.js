// const screenResult = document.querySelector('.screenResult');

// screenResult.innerHTML =document.querySelector('ul').childNodes[2].previousSibling.firstChild.nodeValue
// screenResult.innerHTML =document.querySelector('ul').childNodes[1].nextSibling.firstChild.nodeValue
// screenResult.innerHTML =document.querySelector('li').parentNode.firstChild.firstChild.nodeValue


// const creEl = document.createElement('h1');
// const creText = document.createTextNode('Hello Node');
// creEl.appendChild(creText);
// document.body.appendChild(creEl);

// const input = document.querySelector('input');
// const ul = document.querySelector('ul');
// const btn = document.querySelector('button');

// btn.onclick=()=>{
//     if (!input.value) {
//         alert('please fill input')
//     }else{
//     let li = document.createElement('li');
//     li.innerHTML = input.value;
//     ul.appendChild(li);
//     input.value = "";
//     }
// }




const input = document.querySelector('input');
const todoList = document.querySelector('.list-group');
const alertText = document.querySelector('#alertText');
document.querySelector('form').onsubmit=(e)=>{
    e.preventDefault();
   if (!input.value) {
        alertText.innerHTML = 'please, fill input!'
        alertText.setAttribute('class' , 'text-center alert alert-warning');
   }else{
    alertText.innerHTML = ''
    alertText.setAttribute('class' , '');
    const creDiv = document.createElement('div');
    creDiv.innerHTML = input.value;
    creDiv.setAttribute('class',"list-group-item list-group-item-action");
    creDiv.setAttribute('id','noline');
    todoList.appendChild(creDiv)
    input.value = "";

    creDiv.onclick=()=>{
      if (creDiv.attributes[1].value === 'noline') {
        creDiv.attributes[1].value ='line'
      }else{
        creDiv.attributes[1].value ='noline'

      }
    }
    creDiv.ondblclick=()=>{
        creDiv.remove();
    }
   }
}