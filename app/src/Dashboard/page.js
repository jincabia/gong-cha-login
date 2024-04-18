'use client'
import { useState, useEffect } from 'react';
import { getCurrentUserEmail } from '../_utils/auth'; // Import the getCurrentUser function
import Link from 'next/link'
import Drink from '../components/gongchaDrink';
import writeArrayToFirestore from '../_services/gongcha-service';


export default function Dashboard() {
  const [msg,setMsg] = useState();



    const [userEmail, setUserEmail] = useState('');
    const [items,setItems] = useState([]);

    // <button onClick={()=>addToOrder(size,toppings,name,ice,sugar)} 


    //add this to the database
    const handleAddToOrder = (size,toppings,name,ice,sugar) =>
    {
        // const drinkOrder =name,size,toppings;
        console.log([name,size,toppings,userEmail,ice,sugar]);
        setItems([name,size,toppings])
        writeArrayToFirestore(name,size,toppings,userEmail,ice,sugar);
        setMsg("Order Added Successfully")

    }

    //fetches the users email to make sure they are logged in
    useEffect(() => {
      const fetchCurrentUserEmail = async () => {
        try {
          const email = await getCurrentUserEmail();
          setUserEmail(email);
        } catch (error) {
          console.error('Error fetching current user email:', error);
        }
      };
  
      fetchCurrentUserEmail();
    }, []);
    return (
        <div>

            <h1>Welcome to the Dashboard page</h1>
            {/* If they are not logged in */}
            {!userEmail && 
                <div>
                    <p>Please Sign in</p>
                    <button className='bg-blue-400 p-2 rounded mt-2'><Link href="/">Signup/Login </Link></button>
                </div>}


                {/* If they are logged in */}
                {userEmail && 
                    <div>
                        <p>Welcome, {userEmail}</p>
                        <h1>Order Selection Demo</h1>
                        <Drink addToOrder={handleAddToOrder}/>
                        {msg && <h1 className="text-green-500 p-2 w-fit rounded my-2">{msg}</h1>}
                        <button className='bg-blue-400 p-2 rounded mt-2'><Link href={'orders'}>Go to orders page</Link></button>
                        

                        
                    
                    </div>
                }


        </div>
    );
}
