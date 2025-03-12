import axios from 'axios';
import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";


const PlushCard = ({plushie, getData}) => {
    const{id,name,image,price,amount}=plushie;
    const URL = 'https://67cefcbc823da0212a80fd0d.mockapi.io/pokemon/plush'
    const handleIncrease=async()=>{
        await axios.put(`${URL}/${id}`,{...plushie, amount:amount+1})
        getData()
    }

    const handleDecrease=async()=>{
        if(amount>0){
            await axios.put(`${URL}/${id}`, {...plushie, amount:amount-1})
            getData()
        }else{
            alert("Item Amount Can't be Lower Than 0")
        }
    }
  return (
    <div>
        <div className="card" style={{ width: "16rem" }}>
  <img className="card-img-top" src={image} alt="" />
  <div className="card-body">
    <p className='card-title'>{name}</p>
    <p className="card-text border-top border-dark">
     Price :{price}$
    </p>
    <div className='d-flex justify-content-around align-items-center'>
        <button><FaMinus /></button>
        <p >{amount}</p>
        <button><FaPlus /></button>
    </div>
  </div>
</div>
    </div>
  )
}

export default PlushCard