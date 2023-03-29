interface propType{
    title:string,
    price:string
}


const ListItem:React.FC<propType> = (props) => {
  return (
     <li >{props.title} ${props.price}</li>
  )
}

export default ListItem