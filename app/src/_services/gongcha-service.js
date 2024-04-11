import { getFirestore, collection, addDoc,getDocs  } from 'firebase/firestore';
import app from '../_utils/firebase';

// Function to write array data to Firestore
const writeArrayToFirestore = async (drinkName, size, toppings,email) => {
    console.log(email)
    try {
        const db = getFirestore();
        const docRef = await addDoc(collection(db, 'drinks'), { 
            name: drinkName,
            size: size,
            toppings: toppings,
            email: email, // Add email to the document data
            status: 'pending' 
        });
        console.log('Array data written with ID: ', docRef.id);
        return docRef.id; // Return the document ID if needed
    } catch (error) {
        console.error('Error writing array data to Firestore: ', error);
        throw error;
    }
};

// const readOrdersFromFirestore = async () => {
//     try {
//         const db = getFirestore();
//         const drinksSnapshot = await getDocs(collection(db, 'drinks'));
//         // console.log(drinksSnapshot)
//         drinksSnapshot.forEach((doc) => {
//             console.log(...doc.data, )
//             orders.push({ id: doc.id, ...doc.data() });
//         });
//         return orders;
//     } catch (error) {
//         console.error('Error reading orders from Firestore: ', error);
//         throw error;
//     }
// };

const readOrdersFromFirestore = async () => {
  
      try {
        const db = getFirestore(app); // Access Firestore instance
        const drinksSnapshot = await getDocs(collection(db, 'drinks'));
        // console.log(drinksSnapshot)
        const orders = [];
        drinksSnapshot.forEach((doc) => {
          console.log(doc.data())
          orders.push({ id: doc.id, ...doc.data() });
        });
        return orders;
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };


export {readOrdersFromFirestore}
export default writeArrayToFirestore


