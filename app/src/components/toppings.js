export default function Toppings({name,addToppings})
{
    return(

        <div className="bg-slate-500  w-fit m-4 p-4 flex rounded">
            <h1 className="font-bold py-1 ">{name}</h1>
            <button onClick={()=>addToppings(name)}className="bg-green-400 ml-2 p-1 ">+</button>


        </div>

    );
}