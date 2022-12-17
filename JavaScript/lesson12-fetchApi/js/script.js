
// const list = document.querySelector('ul');

// const fetchApi = ()=>{
// //   const apidata = await fetch('https://fakestoreapi.com/products');
// //   const comingdata = await apidata.json();
// //   console.log(comingdata);
// fetch('https://fakestoreapi.com/products')
// .then(res=>res.json())
// .then(comingdata=>{
//     let listitem = "";
//     comingdata.map((fd,i)=>{
//         listitem += `<li>${i+1}${fd.title}</li>`
//     })
//     list.innerHTML = listitem;
// })
  

// }
// fetchApi();


const row = document.querySelector('.row');
const fetchApi = async()=>{
            const apidata = await fetch('https://fakestoreapi.com/products');
            const comingdata = await apidata.json();
            console.log(comingdata);
            let card = "";
        comingdata.map((fd,i)=>{
            card+=`
            <div class="col-12 col-sm-6 col-md-3">
            <div class="card" >
            <img height="300" src="${fd.image}" class="card-img-top" alt="${fd.title}">
            <div class="card-body">
              <h5 class="card-title">${fd.title.substring(0,10)}</h5>
              <p class="card-text text-danger">${fd.category}</p>
              <p class="card-text">${fd.description.substring(0,25)}...</p>
              <button id="rd" href="#" class="btn btn-primary">Read more</button>
            </div>
          </div>
            </div>
            `
        })
        row.innerHTML = card;

}


fetchApi();


