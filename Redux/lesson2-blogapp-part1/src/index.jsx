import React from "react";
import ReactDOM from "react-dom/client";
import configureStore from './manager/store/configureStore';
import {addBlog, editBlog, removeBlog} from './manager/actions/blogAction'
import App from "./App";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
const store = configureStore();


store.subscribe(()=>{
 console.log(store.getState());
})

const blog1 = store.dispatch(addBlog({ctitle:"React",cdesc:"React is funny!",cphoto:"https://reactjs.org/logo-og.png"}))
const blog2 = store.dispatch(addBlog({ctitle:"Redux",cdesc:"Redux is best!",cphoto:"https://redux.js.org/img/redux-logo-landscape.png"}))
store.dispatch(removeBlog({comingid:blog1.myblog.id}))

fetch('http://127.0.0.1:5500/src/data/products.json')
.then(res=>res.json())
.then(data=>{

  data.map(item=>{
    store.dispatch(addBlog({ctitle:item.title,cdesc:item.category,cphoto:item.photo}))
  })
 
})






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
 <Provider store={store}>
 <App />
 </Provider>
  </React.StrictMode>
);
