import {useState, useEffect} from 'react';
import { Button,  Container } from "react-bootstrap";


const Counter =()=>{
    const [count,setCount] = useState(0);
    const [state,setState] = useState(1);
    useEffect(()=>{
        console.log('useEffect is runnig...');
    },[])
    
    
    
    function decrement(){
            setCount(count-1);
    }
    return(
        <Container>
            <Button variant="danger" onClick={decrement}>-1</Button>
            <span className="mx-2">{count}</span>
            <span>{state}</span>
            <Button variant='success' onClick={()=>{
                    setState(state + 1)
            }}>+1</Button>
        </Container>
    )
}

export default Counter;
