import axios from "axios";
import React, { useEffect, useState } from "react";
import Checkout from "./Checkout";

const Cart = () => {
    const URL = "https://67cefcbc823da0212a80fd0d.mockapi.io/pokemon/plush";

    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);

    const getData = async () => {
        try {
            const {data}  = await axios(URL);
            setItems (data);
        } catch {
            setError(true);
        }
    };
    useEffect(() => {
        getData();
    }, []);

    if(error){
        return <p className="text-center">Something Went Wrong!!!</p>
    }
    return (
        <div className="mt-5 d-flex justify-content-around align-items-center">
            <div>
                {items.map((a) => (
                    <div key={a.id}>
                        <div className="mt-1">{a.name} x {a.amount} </div>
                        <div className="mt-1">{a.price * a.amount} $</div>
                    </div>
                ))}
            </div>
            <div>
                <Checkout items={items}/>
            </div>
        </div>
    );
};

export default Cart;
