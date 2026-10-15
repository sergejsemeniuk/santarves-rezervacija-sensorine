import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEYxXZ3oTtHrPHstTe1swx64cWaKYQLWU",
  authDomain: "santarves-reservation-sensor.firebaseapp.com",
  projectId: "santarves-reservation-sensor",
  storageBucket: "santarves-reservation-sensor.firebasestorage.app",
  messagingSenderId: "97562336427",
  appId: "1:97562336427:web:ba1ef255e437a50556ebee"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
