import axios from "axios";
import React, { useEffect, useState } from "react";
import PlushCard from "../components/PlushCard";

const PlushList = () => {
    const URL = "https://67cefcbc823da0212a80fd0d.mockapi.io/pokemon/plush";
    const [plush, setPlush] = useState([]);
    const [error, setError] = useState(false);
    const getData = async () => {
        try {
            const { data } = await axios(URL);
            setPlush(data);
        } catch (err) {
            setError(true);
        }
    };
    useEffect(() => {
        getData();
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
            <button className="btn-cart">
                Go To Cart
            </button>
            </div>
        </div>
    );
};

export default PlushList;
