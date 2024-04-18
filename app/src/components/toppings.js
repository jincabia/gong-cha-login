'use client'
import { useState } from "react";


export default function Toppings({name,addToppings,delToppings})
{
    const [count,setCount] = useState(0)

    const handleClick = () => 
    {

        const newCount = count+1
        setCount(newCount)
        addToppings(name)

    }

    const handleSubtract = () =>
    {
        if(count == 0 ) return;
        const newCount = count-1
        setCount(newCount);
        delToppings(name);
    }

    return(

        <div className="flex w-fit text-center items-center">
            
            <div className="bg-slate-500  w-fit m-4 p-4 flex rounded justify-between text-center items-center">
            
            <h1 className="font-bold py-1 ">{name}</h1> 
            <button onClick={handleClick}className="bg-green-400 ml-2 px-2 text-center rounded">+</button>


            </div>

            

            <div className=" bg-slate-400 w-fit m-2 p-2 flex rounded justify-between text-center items-center">

                <h1 className="p-1">{count}x</h1>
                

            </div>

            <button className="bg-red-500 p-2 rounded text-center justify-center items-center self-center" onClick={handleSubtract} > - </button>




        </div>

        

    );
}