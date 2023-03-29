import {  useState } from "react"
import { Container } from "react-bootstrap"
import products from "./data/product";
import ListItem from "./ListItem";


interface productType{
    id: number;
    photo:string;
    title:string;
    category: string;
    discount:string;
    price: string;
    cart: string;
    review: number;
    status: boolean;
    sku: string;
}



const App:React.FC = () => {
    const [state] = useState<productType[]>(products);
    const [data,setData] = useState(0);
    const action =():void=>{
        setData(data+1)
    }

  return (
    <Container className="mt-5">
           <ol>
            {state.map((item:any)=>{
                return <ListItem key={item.id} title={item.title} price={item.price}/>
            })}
           </ol>
            <p>{data}</p>
           <button onClick={action}>action</button>
    </Container>
  )
}

export default App