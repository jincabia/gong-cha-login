'use client'
import { useEffect, useState } from 'react';
import { readOrdersFromFirestore } from '../_services/gongcha-service';


export default function Orderpage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const fetchedOrders = await readOrdersFromFirestore();
        setOrders(fetchedOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Orders Page</h1>
      <h2>All Orders:</h2>
      <ul>
        {!orders && <div>
          No orders available
          
          
          </div>}

        {orders && <div>
          {orders.map(order => (

            <div key={order.id} className=' p-2'>
              
              <div className='bg-slate-400 w-1/2'>
              <h1 className='bg-red-500/60 p-2'>Order Number: {order.id}</h1>
              <h2 className=' p-2 w-fit font-bold'>Order Status: {order.status}</h2>
              <p className='p-2'>Drink Name: {order.name}</p>
              <p className='p-2'>Size: {order.size}</p>
              <p className='p-2'>Ice Lvl: {order.ice}</p>
              <p className='p-2'>Sugar Lvl: {order.sugar}</p>
              <p className='p-2'>Toppings: {order.toppings.join(', ')}</p>
              <p className='p-2'>Ordered by: {order.email}</p>

                </div>
              

            </div>




       
          
        ))}
          
          </div>}
       
      </ul>
    </div>
  );
}
