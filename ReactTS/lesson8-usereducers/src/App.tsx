import { type } from "os";
import React, { useReducer } from "react";
import { Button } from "react-bootstrap";
interface CounetrState {
  count: number;
}



interface ResetAction{
  type:'reset'
}

interface UpdateAction{
  type: 'increment' | 'decrement';
  payload: number;
}

type CounterAction = UpdateAction | ResetAction;



const initialState = { count: 0 };
const CounterReducer = (state: CounetrState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return { count: 0 };
    default:
      return { count: state.count };
  }
};

const App = () => {
  const [state, disptach] = useReducer(CounterReducer, initialState);

  return (
    <div className="container mt-5">
      <Button className="btn btn-danger"  onClick={() => {
          disptach({ type: "decrement", payload: 110 });
        }}>-</Button>
      <span className="mx-3">{state.count}</span>
      <Button
        className="btn btn-success"
        onClick={() => {
          disptach({ type: "increment", payload: 110 });
        }}
      >
        +
      </Button>
      <Button variant="warning ms-3"  onClick={() => {
          disptach({type: "reset"});
        }}>reset</Button>
    </div>
  );
};

export default App;
