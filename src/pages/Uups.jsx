import React from 'react'
import fail from "../assets/fail.JPG"
import { useNavigate } from 'react-router-dom'

const Uups = () => {
    const navigate=useNavigate()
  return (
    <div className='uups'>
        <img  src={fail} alt="" />
        <button className='btn btn-danger p-5' onClick={()=>navigate('/')} >GO BACK!!</button>
    </div>
  )
}

export default Uups