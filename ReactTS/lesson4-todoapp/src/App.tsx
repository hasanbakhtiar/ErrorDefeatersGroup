import React, { useState } from 'react'
import NewTodo from './components/NewTodo'
import { Container } from 'react-bootstrap'
import { Todo } from './todo.model';
import TodoList from './components/TodoList';

const App:React.FC = () => {
  const [todo,setTodo] = useState<Todo[]>([
    {
      id:"1",
      text:"Todo1"
    }
  ]);

//  [[{}],{}]
//  [{},{}]
  const todoHandler =(comingdata:string)=>{
    setTodo((prevTodo)=>[
      ...prevTodo,{ id:Math.random().toString(), text:comingdata}
    ]);
    
  }
  
  return (
    <Container>
      <h1 className='todo-text text-center my-5'>Todo App</h1>
      <NewTodo onAddTodo={todoHandler} />
      <TodoList items={todo} />
    </Container>
  )
}

export default App