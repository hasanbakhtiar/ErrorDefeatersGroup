import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useCart } from "react-use-cart";
const Cart = () => {
    const {items,updateItemQuantity,removeItem,isEmpty} = useCart();
  return isEmpty ? <img src="https://cdn.nailib.com/public/images/gifs/cart.gif" alt="" /> :(
    <div>
      <h1 className="text-center my-5">Cart</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Photo</th>
            <th>Product Name</th>
            <th>Product price</th>
            <th>Quantity</th>
            <th>Del</th>
          </tr>
        </thead>
        <tbody>
            
            {items.map((item,c)=>{
                return  <tr key={item.id}>
                <td>{c+1}</td>
                <td><img src={item.image} width={70} alt="" /></td>
                <td>{item.title}</td>
                <td>{item.price.toFixed(0)*item.quantity}$</td>
                <td>
                  <Button variant="warning" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button variant="warning" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</Button>
                </td>
                <td>
                  <Button variant="danger" onClick={()=>{removeItem(item.id)}}>X</Button>
                </td>
              </tr>
            })}
            
        
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
