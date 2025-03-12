import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate=useNavigate()
    return (
        <main className="main">
            <div>
                <h1>Welcome to The Word of Pokemon</h1>
                <div>
                    <button onClick={()=>navigate('/pokemons')} className="btn">Pokemon List</button>
                    <button onClick={()=>navigate("/plushes")} className="btn">Shop</button>
                </div>
            </div>
        </main>
    );
};

export default Home;
