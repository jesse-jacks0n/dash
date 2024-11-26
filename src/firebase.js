import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
   
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Firebase Realtime Database and get a reference to the service
export const database = getDatabase(app);
export default app;
