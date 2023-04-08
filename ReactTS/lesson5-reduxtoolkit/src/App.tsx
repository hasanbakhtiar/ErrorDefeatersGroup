import { useState } from "react";
import { Button, Col, Form, InputGroup, ListGroup } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "./store";
import { add } from "./features/todoSlice";


const App:React.FC = () => {
    const [title,setTitle] = useState("");
    const dispatch = useAppDispatch();
    const selectTodo = useAppSelector(state=>state.todos);
    console.log(selectTodo);
    
    const todoSubmit = (e:React.FormEvent)=>{
        e.preventDefault();
        if (!title) {
            alert('please,fill the input');
        }else{
            dispatch(add(title));
            setTitle('');
        }
    }
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <h1 className="my-5 text-center">Todo App</h1>
      <Col sm={3}>
        <Form onSubmit={todoSubmit}>
          <InputGroup className="mb-3">
            <Form.Control placeholder="Enter todo" onChange={e=>{setTitle(e.target.value)}} value={title} />
            <Button type="submit" variant="outline-secondary">
              Add
            </Button>
          </InputGroup>
        </Form>
        <ListGroup >
            {selectTodo.map((item:any)=>{
                return <ListGroup.Item className="d-flex justify-content-between">{item.title}<Button variant="danger">Delete</Button></ListGroup.Item>
            })}
          
        </ListGroup>
      </Col>
    </div>
  );
};

export default App;
