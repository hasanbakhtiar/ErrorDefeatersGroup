import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";

const initialState = { count: 0 };

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count:
          state.count +
          (typeof action.payload === "number" ? action.payload : 1),
      };
    case "DECREMENT":
      return { count: state.count > 0 ? state.count - 1 : "not minus " };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({
  type: "INCREMENT",
  payload: 10,
});

store.dispatch({
  type: "INCREMENT",
  payload: 5,
});

store.dispatch({
  type: "RESET",

});

store.dispatch({
  type: "DECREMENT",

});
store.dispatch({
  type: "RESET",

});
store.dispatch({
  type: "INCREMENT",
  payload: 5,
});

store.dispatch({
  type: "DECREMENT",

});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Hello Redux</h1>
  </React.StrictMode>
);
