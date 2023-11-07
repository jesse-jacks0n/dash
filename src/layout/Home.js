import React, {useState, useEffect} from 'react';
import Navbar from "../components/Navbar";
import BodyContent from "./BodyContent";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase";
import {  signOut } from "firebase/auth";
import {useNavigate} from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState('dashboard');

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
            // An error happened.
        });
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
                console.log("uid", uid)
            } else {
                // User is signed out
                // ...
                console.log("user is logged out")
            }
        });

    }, [])
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    return (
        <div className="bg-gray-100 h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-gray scrollbar-track-white ">
            <Navbar
                activeButton={activeButton}
                handleButtonClick={handleButtonClick}
            />
            <BodyContent activeButton={activeButton}/>
            <div>
                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
}