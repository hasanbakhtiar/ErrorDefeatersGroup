import React from 'react'

interface TodoListProps{
    items:{id:string;text:string;}[];
}


const TodoList:React.FC<TodoListProps> = props => {
  return (
    <ol>
        {props.items.map((i:any)=>{
            return <li key={i.id}>{i.text}</li>
        })}
    </ol>
  )
}

export default TodoList