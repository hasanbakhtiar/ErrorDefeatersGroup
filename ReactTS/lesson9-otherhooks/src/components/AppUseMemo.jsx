import { useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import users from "../data/users";

const AppUseMemo = () => {
  const [count, setCount] = useState(0);
  const [userId,setUserId] = useState(null);
  

  const getUserRows = () => {
    console.log('test user id');
    return (
      
      <ol>
        {users.map((item) => (
          <li onClick={()=>{setUserId(item.id)
            
          }} key={item.id}>{item.name}</li>
        ))}
      </ol>
    );
  };


  const userRows = useMemo(()=>getUserRows(),[userId])
  return (
    <div className="container mt-5">
      {userId}
      {userRows}
      {count}
      <Button
        onClick={() => {
          setCount(count + 1);
          console.log("counter");
        }}
      >
        +1
      </Button>
    </div>
  );
};

export default AppUseMemo;
