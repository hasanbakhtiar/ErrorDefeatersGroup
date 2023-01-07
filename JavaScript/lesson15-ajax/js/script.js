// const numbers = [15.5, 2.3, 1.1, 4.7];
// console.log(numbers.reduce((total, num)=>{
//     return total + Math.round(num);
// }, 0));

 document.querySelector('button').onclick=()=>{
    const xhttp = new XMLHttpRequest();
    console.log(xhttp);


    xhttp.onload = function() {
        document.getElementById("test").innerHTML =
        this.responseText;
      }
      xhttp.open("GET", "../data/newtext.txt");
      xhttp.send();
 }



