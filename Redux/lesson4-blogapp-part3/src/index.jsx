import React from "react";
import ReactDOM from "react-dom/client";
import configureStore from './manager/store/configureStore';
import {addBlog} from './manager/actions/blogAction'
import App from "./App";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
const store = configureStore();


store.subscribe(()=>{
 console.log(store.getState());
})

store.dispatch(addBlog({title:"React",desc:"React is funny!",photo:"https://reactjs.org/logo-og.png"}))
store.dispatch(addBlog({title:"Redux",desc:"Redux is best!",photo:"https://redux.js.org/img/redux-logo-landscape.png"}))
// store.dispatch(removeBlog({comingid:blog1.myblog.id}))
// store.dispatch(editBlog({blogid:blog2.myblog.id,blogupdate:{title:"lkdjksdf",desc:"kdsjf",img:'alkdjhask'}}))
// store.dispatch(editBlog(blog2.myblog.id,{title:"lkdjksdf",desc:"adklsj",photo:'sdfljkhsdfkj'}))


// fetch('http://127.0.0.1:5500/src/data/products.json')
// .then(res=>res.json())
// .then(data=>{

//   data.map(item=>{
//     store.dispatch(addBlog({ctitle:item.title,cdesc:item.category,cphoto:item.photo}))
//   })
 
// })






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
 <Provider store={store}>
 <App />
 </Provider>
  </React.StrictMode>
);
