import React, { useRef } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const data = 'a';
    const inputRef = useRef();
    const navigate = useNavigate();
    const login=()=>{
        if (inputRef.current.value == data) {
            navigate('/shop')
        }
    }
    
  return (
    <Container>
            <input type="text" ref={inputRef}/><Button onClick={login}>login</Button>
    </Container>
  )
}

export default Login