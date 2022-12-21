// const info:string = 'Hello';
// console.log(info);

type prodyctType=  {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
      rate: number,
      count: number
    }
}

var fetchApi=async()=>{
    const comingData:any =await fetch('https://fakestoreapi.com/products');
    const productData:prodyctType = await comingData.json();
    console.log(productData);
    
}
fetchApi();

type dataType={
    data:number
}[]


var newData:dataType = [
    {
        data:1
    }
]