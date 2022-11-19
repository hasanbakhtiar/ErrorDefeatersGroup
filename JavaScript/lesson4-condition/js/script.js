// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərflərə həssasdır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
// 9.Eyni dəyişkən adını dəişkən ifadələrində istifadə etmək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield

// var   -> variable -> global
// let   -> let      -> local
// const -> constant -> local

// global
// if (true) {
//     // local global
//     if (true) {
//         var a = 5;
//         // local
//     }
//     console.log(a);
// }

// condition

// if - eger
// else - deyilse
// else if - deyilse eger

// const infoNumbOne = 100;
// const infoNumbTwo = 10;
// if (infoNumbOne <  infoNumbTwo) {
//     console.log('ur info is successfull');
// }else if(infoNumbOne === infoNumbTwo){
//     console.log("info is  10");
// }else{
//     console.log('ur info is error');

// }

// const myTime = 9;

// if (myTime >= 5 && myTime < 13) {
//     console.log('good morning');
//     if (myTime === 7) {
//         console.log('get up');
//     }else if(myTime === 9){
//         console.log('have a breakfast');
//     }
// }else if(myTime >= 13 && myTime < 17){
//     console.log('good afternoon');
// }else if(myTime >= 17 && myTime <= 21){
//     console.log('good evening');

// }else if(myTime > 21 && myTime <= 23){
//     console.log('good night');

// }
// else{
//     console.log('no time');
// }

// const infoValue = "heasdllo";

// switch (infoValue) {
//     case 10:
//         console.log('info value is 10');
//         break;
//     case "hello":
//         console.log('how a u');
//         break;
//     default:
//         console.log('this is default value ');
//         break;
// }

// let infoValue = 7;
// let comingData = "Hello";
// if (infoValue < 10) {
//   infoValue += 1000;
//   if (infoValue > 100) {
//     switch (comingData) {
//       case "Hello":
//         infoValue = 20;
//         console.log("Hello, how a u?");
//         if (infoValue < 30) {
//           console.log("success");
//         } else {
//           console.log("new err");
//         }
//         break;
//       case "Bye":
//         console.log("Bye bye");
//         break;
//       default:
//         break;
//     }
//   }else{
//     console.log('data err');
//   }
// } else {
//   console.log("err");
// }

// try {
//     throw "everything is ok"
//   console.loga("hello");
// } catch (err) {
//   console.log(err);
// //   console.log("something is wrong...");
// } finally {
//   console.log("im always runnig...");
// }

// Loop
// let count = 1;
// while(count>=100){ //condition
//     console.log(count); //result
//     count++;    //action
// }

// do{
//     console.log(count);
//     count++;
// }while(count>=100) //condition

// for(let count = 0;count<=100;count++ ){
//     if (count === 50) {
//         continue;
//     }
//     console.log(count);
// }

// const info = ['table','book','data'];
// console.log(info[0]);
// console.log(info[1]);
// console.log(info[2]);

// console.log('=======================================');

// for(let i = 0 ;i<3;i++){
//     console.log(info[i]);
// }

// const info = new Array('table','book','pen')
// console.log(info);

// const info = [];
// info[0] = 'table';
// info[1] = 'book';
// console.log(info);

// const info = ['table','book','data'];

// info[0] = 'new value';
// console.log(info);

// const info=['book','pen'];
// info['myvalue'] = 'Hello';
// console.log(info["myvalue"]);

// const info = ['book','pen',[1,2,3,4],'data',['new value',['dark','blue',['rain','snow',[true],'2'],'grey'],'sunny']];
// console.log(info[4][1][2][2][0]);

// const product = {
//     title:'pen',
//     color:'green',
//     price:2,
//     newProduct:true,
//     sellAddress:['Baku',"Ankara",'Dublin']
// }
// console.log(product.title);
// console.log(product.color);
// console.log(product);

const products = [
  {
    title: "pen",
    color: "green",
    price: 2,
    newProduct: true,
  },
  {
    title: "book",
    color: "black",
    price: 20,
    newProduct: true,
  },
  {
    title: "table",
    color: "yellow",
    price: 40,
    newProduct: false,
  }
];

for (let index = 0; index < 3; index++) {
    console.log("Product name:"+products[index].title + " color:"+ products[index].color);
}
