'use client'
import { useEffect, useState } from 'react';
import { readOrdersFromFirestore } from '../_services/gongcha-service';


export default function orderpage() {
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
        <p>The drink ordered, the size of the drink, the toppings and then who ordered it, and the status of the order</p>
        {!orders && <div>
          orders null?
          
          
          </div>}

        {orders && <div>
          {orders.map(order => (
          <li key={order.id}>
            {order.name} - {order.size} - {order.toppings.join(', ')} - {order.email} - {order.status}
          </li>
          
        ))}
          
          </div>}
       
      </ul>
    </div>
  );
}
