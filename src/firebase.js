import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCbwvgf7nEcqVvZtnNU_Ejq1ckBanh_9d4",
    authDomain: "fir-97177.firebaseapp.com",
    databaseURL: "https://fir-97177-default-rtdb.firebaseio.com",
    projectId: "fir-97177",
    storageBucket: "fir-97177.appspot.com",
    messagingSenderId: "93004975384",
    appId: "1:93004975384:web:a0e1f0761771fcb253226d",
    measurementId: "G-4GRGDFEKWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;