const text = document.querySelector('p');

// text.innerHTML = navigator.language;
// if (navigator.language === "US-en") {
    
// }else if(){

// }

// console.log(window.alert('hello'));
// let data = window.prompt('enter email',"Email:")
// console.log(data);

// window.confirm('yes no')



// window.setTimeout(()=>{
//     console.log('Hello');
// },2000);


// window.setInterval(()=>{
//     console.log('Hello');
// },2000);


setTimeout(() => {
    document.querySelector('.wrapper').attributes[0].value = 'show';
    document.querySelector('.preloader').attributes[0].value = 'hide';
}, 50);


let stop;

stop = setInterval(()=>{
    document.querySelector('h5').innerHTML = new Date()
},1000)

document.querySelector('button').onclick=()=>{
    clearInterval(stop);
}