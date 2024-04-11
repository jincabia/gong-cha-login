'use client'
import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC51iD4UHDGJH3Os4IZeQv6GNuvM3EMYFc",
    authDomain: "gong-cha---demo.firebaseapp.com",
    projectId: "gong-cha---demo",
    storageBucket: "gong-cha---demo.appspot.com",
    messagingSenderId: "250475008218",
    appId: "1:250475008218:web:324655c80256200d8515e3"
  };
  

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default function orderpage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const db = getFirestore(firebaseApp); // Access Firestore instance
        const drinksSnapshot = await getDocs(collection(db, 'drinks'));
        // console.log(drinksSnapshot)
        const orders = [];
        drinksSnapshot.forEach((doc) => {
          console.log(doc.data())
          orders.push({ id: doc.id, ...doc.data() });
        });
        setOrders(orders);
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
        {orders.map(order => (
          <li key={order.id}>
            {order.name} - {order.size} - {order.toppings.join(', ')} - {order.email} - {order.status}
          </li>
          
        ))}
      </ul>
    </div>
  );
}