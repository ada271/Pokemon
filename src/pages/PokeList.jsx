import axios from "axios";
import React, { useEffect, useState } from "react";
import PokeCard from "../components/PokeCard";

const PokeList = () => {
    const URL = "https://67cefcbc823da0212a80fd0d.mockapi.io/pokemon/pokes";
    const [pokes, setPokes] = useState([]);
    const [error, setError] = useState(false);
    const getData = async () => {
        try {
            const { data } = await axios(URL);
            setPokes(data);
        } catch (err) {
            setError(true);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    // console.log(pokes)
    if (error) {
        return <h1>Something Went Wrong!!!</h1>;
    }
    return (
        <div className="d-flex  align-items-center   container mt-3">
            <div className="row ml-4 justify-content-center">
                {pokes.map((poke)=>(
                    <div key={poke.id} className=" justify-content-around col col-sm-12 col-md-6 col-lg-4 ">
                        <PokeCard poke={poke}/>
                    </div>
                ))}

                </div>
            </div>
        
    );
};

export default PokeList;
