'use client'
import { useState, useEffect } from 'react';
import { getCurrentUserEmail } from '../_utils/auth'; // Import the getCurrentUser function
import Link from 'next/link'
import Image from 'next/image'
import Drink from '../components/gongchaDrink';
import writeArrayToFirestore from '../_services/gongcha-service';


export default function Dashboard() {


    const [userEmail, setUserEmail] = useState('');
    const [items,setItems] = useState([]);


    //add this to the database
    const handleAddToOrder = (size,toppings,name) =>
    {
        // const drinkOrder =name,size,toppings;
        console.log([name,size,toppings]);
        setItems([name,size,toppings])
        writeArrayToFirestore(name,size,toppings,userEmail);

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
                        <button className='bg-blue-400 p-2 rounded mt-2'><Link href={'orders'}>Go to orders page</Link></button>
                        
                    
                    </div>
                }


        </div>
    );
}
