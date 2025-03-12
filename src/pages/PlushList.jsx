import axios from "axios";
import React, { useEffect, useState } from "react";
import PlushCard from "../components/PlushCard";
import { useNavigate } from "react-router-dom";

const PlushList = () => {
    const URL = "https://67cefcbc823da0212a80fd0d.mockapi.io/pokemon/plush";
    const [plush, setPlush] = useState([]);
    const [error, setError] = useState(false);
    const navigate =useNavigate()
    const getData = async () => {
        try {
            const { data } = await axios(URL);
            setPlush(data);
            // console.log(plush)
        } catch (err) {
            setError(true);
        }
    };
    useEffect(() => {
        getData();
        // console.log(plush)
    }, []);

    if (error) {
        return <h1>Something Went Wrong!!!</h1>;
    }

    return (
        <div className="plush-container">
            <div className="container">
                <div className="row d-flex g-3">
                    {plush.map((plushie) => (
                        <div
                            key={plushie.id}
                            className=" col col-sm-12 col-md-4"
                        >
                            <PlushCard getData={getData} plushie={plushie} />
                        </div>
                    ))}
                </div>
            <button onClick={()=>navigate("/cart")}  className="btn-cart">
                Go To Cart
            </button>
            </div>
        </div>
    );
};

export default PlushList;
