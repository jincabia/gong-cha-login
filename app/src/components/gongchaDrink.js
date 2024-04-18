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
    const [ice,setIce] = useState('Regular Ice')
    const [sugar,setSugar] = useState('100%')
    const [toppings,setToppings] = useState([]);


    const handleAddTopping = (toppingName) =>
    {
        const newToppings = [...toppings,toppingName];
        console.log(newToppings);
        setToppings(newToppings);
        
    }

    const removeToppings = (toppingNames) =>
    {
        const updatedToppings = toppings.filter(topping => topping !== toppingNames);
        setToppings(updatedToppings);
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

            <h1>Select Ice Level</h1>

            <select 
            value={ice}
            onChange={e => setIce(e.target.value)}
            className="bg-white p-2 m-2 rounded text-black"
            >
                <option value="Regular Ice">Regular Ice</option>
                <option value="Less Ice">Less Ice</option>
                <option value="No Ice">No Ice</option>

            </select>

            <h1>Select Sugar Level</h1>

            <select 
            value={sugar}
            onChange={e => setSugar(e.target.value)}
            className="bg-white p-2 m-2 rounded text-black"
            >
                <option value="100%">100%</option>
                <option value="70%">70%</option>
                <option value="50%">50%</option>
                <option value="30%">30%</option>
                <option value="0%">0%</option>

            </select>

            {toppingNames.map((toppingName, index) => (

                <Toppings key={index} 
                addToppings={handleAddTopping} 
                name={toppingName}
                delToppings={removeToppings}
                />
            ))}

            <button onClick={()=>addToOrder(size,toppings,name,ice,sugar)} 
            className="bg-green-500 p-2 rounded font-bold"
            >
                Order</button>
            
            



        </div>
        
    );
}