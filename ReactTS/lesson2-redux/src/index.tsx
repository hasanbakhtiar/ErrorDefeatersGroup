import ReactDOM from "react-dom";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import configureStore from "./manager/store/configureStore";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { getBlogsFromDatabase } from "./manager/actions/blogAction";

const store: any = configureStore();

const result = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <p>Loading...</p>,
  document.getElementById("root") as HTMLElement
);

store.dispatch(getBlogsFromDatabase()).then((): void => {
  ReactDOM.render(result, document.getElementById("root") as HTMLElement);
});
