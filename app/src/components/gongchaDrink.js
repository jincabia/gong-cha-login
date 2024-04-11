'use client'
import { useState } from "react";
import Image from 'next/image';
import Toppings from "./toppings";

export default function Drink({addToOrder})
{

    const toppingNames = ['Black Pearls','White Pearls', 'Coconut Jelly'];

    const name = 'Strawberry Matcha Latte'
    const drinkID = '12jodkjas' //example ID

    const [size,setSize] = useState('Medium')
    const [toppings,setToppings] = useState([]);

    const handleAddTopping = (toppingName) =>
    {
        const newToppings = [...toppings,toppingName];
        console.log(newToppings);
        setToppings(newToppings);
    }

    return(
        <div>
            <button>

                <Image
                src="/example.png"
                width={250}
                height={250} 
                alt="Strawberry Matcha Latte"
                />

                        
            </button>

            <h1>Select a Size</h1>

            
            <select 
            value={size}
            onChange={e => setSize(e.target.value)}
            className="bg-white p-2 m-2 rounded text-black"
            >
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
            </select>

            {toppingNames.map((toppingName, index) => (

                <Toppings key={index} 
                addToppings={handleAddTopping} 
                name={toppingName}
                />
            ))}

            <button onClick={()=>addToOrder(size,toppings,name,drinkID)} 
            className="bg-green-500 p-2 rounded font-bold"
            >
                Order</button>



        </div>
        
    );
}