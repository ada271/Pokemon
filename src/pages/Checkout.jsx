import React from 'react'
import { useNavigate } from 'react-router-dom';

const shipping =25;
const tax=.18;
const Checkout = ({items}) => {
    const navigate=useNavigate()
const subTotal=items.reduce((total,item)=>item.price*item.amount+total,0)
  return (
    <div>
        <div className="card" style={{ width: "25rem" }}>
  <div className="card-header text-center bg-danger ">Your Total</div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Subtotal: {subTotal}$</li>
    <li className="list-group-item">Tax: {(subTotal * tax).toFixed(2)}$</li>
    <li className="list-group-item">Shipping: {shipping}$</li>
    <li className="list-group-item">TOTAL: {(subTotal + subTotal*tax+ shipping).toFixed(2)}</li>
  </ul>
  <button onClick={()=>navigate("/oops")} className='btn btn-danger'>Proceed To Pay</button>
</div>
    </div>
  )
}

export default Checkout