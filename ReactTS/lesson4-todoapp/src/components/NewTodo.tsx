import React, { useRef, useState } from 'react'
import { Button, Col, Form, InputGroup } from 'react-bootstrap'

type NewTodoProps = {
    onAddTodo:(data:string)=>void;
}

const NewTodo:React.FC<NewTodoProps> = (props) => {
    const [data,setData] = useState('');
    // const textInputRef = useRef<HTMLInputElement>(null);
    
    const todoSubmitHandler =(e:React.FormEvent)=>{
        e.preventDefault();
        // const enteredText = textInputRef.current!.value; 
        // console.log(enteredText);
        if (!data) {
            alert('please, fill input')
        }else{
            props.onAddTodo(data);
            setData('');
        }
        
        
    }
    
    
  return (
    <div className="d-flex align-items-center justify-content-center">
       <Form onSubmit={todoSubmitHandler}>
       <Col sm={12}>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter todo"
        //   ref={textInputRef}
        onChange={e=>{setData(e.target.value)}}
          value={data}
        />
        <Button type='submit' variant="outline-secondary" >
          Add
        </Button>
      </InputGroup>
        </Col>
       </Form>
    </div>
  )
}

export default NewTodo