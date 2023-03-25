import React from "react";
import ReactDOM from "react-dom";
import configureStore from './manager/store/configureStore';
import App from "./App";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { getBlogsFromDatabase } from "./manager/actions/blogAction";
const store = configureStore();

const result = (
  <Provider store={store}>
      <App />
  </Provider>
)


ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(getBlogsFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
})