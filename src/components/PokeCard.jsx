import React from 'react'

const PokeCard = ({poke}) => {
    console.log(poke)
  return (
    
<div className=" mt-4 card"  style={{ width: "18rem" }}>
  <img className="card-img-top" alt='' src={poke.image}  />
  <div className="card-body">
    <h5 className="card-title text-center">{poke.name}</h5>
    <p className="card-text text-center">
        {poke.type}
    </p>
  </div>
</div>
    
  )
}

export default PokeCard