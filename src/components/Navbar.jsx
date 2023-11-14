import React, {useEffect, useState} from "react";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth, database} from "../firebase";
import {useNavigate} from "react-router-dom";
import {Button, IconButton, Menu, MenuItem} from "@mui/material";
import {ArrowDropDown, LogoutRounded, MoreVert} from "@mui/icons-material";
import {get, ref} from "firebase/database";


export default function Navbar({ activeButton, handleButtonClick }) {
    const navigate = useNavigate();
    const [user, setUser] = useState(null); // Initialize user state

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    useEffect(() => {
        // Use Firebase auth state observer to get the current user
        const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
            if (authUser) {
                // Fetch additional user data from Realtime Database
                const userRef = ref(database, `users/${authUser.uid}`);
                const snapshot = await get(userRef);
                const userData = snapshot.val();

                // Merge auth and database user data
                const mergedUser = { ...authUser, ...userData };
                setUser(mergedUser);
            } else {
                // User is signed out
                setUser(null);
            }
        });

        // Cleanup the observer when the component unmounts
        return () => unsubscribe();
    }, []);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                navigate("/");
                console.log("Signed out successfully");
            })
            .catch((error) => {
                // An error happened.
                console.error("Sign-out error:", error);
            });
    };

    if (user === null) {
        return <div>Loading...</div>;
    }


    return (
        <div className="navbar bg-gray-100 sticky top-0 px-1  flex justify-between items-center z-10 w-full">
            <div className="logo text-white text-lg">
                <img src="/images/icon.png" alt="logo" className="h-8"/>

            </div>
            <div className=" shadow-sm p-1 mt-2 mb-2 nav-content gap-2 bg-white rounded-md flex justify-center items-center text-sm ">
                <button
                    className={`py-2 px-4 rounded-md ${activeButton === "dashboard" ? "bg-teal-500 text-white" : "text-gray-600 hover:bg-gray-200 hover:text-gray-600"}`}
                    onClick={() => handleButtonClick("dashboard")}
                >
                    Dashboard
                </button>
                <button
                    className={`py-2 px-6 rounded-md ${activeButton === "users" ? "bg-teal-500 text-white" : "text-gray-600 hover:bg-gray-200 hover:text-gray-600"}`}
                    onClick={() => handleButtonClick("users")}
                >
                    Users
                </button>
                <button
                    className={`py-2 px-6 rounded-md ${activeButton === "alerts" ? "bg-teal-500 text-white" : "text-gray-600 hover:bg-gray-200 hover:text-gray-600"}`}
                    onClick={() => handleButtonClick("alerts")}
                >
                    Alerts
                </button>
                <button
                    className={`py-2 px-6 rounded-md ${activeButton === "cards" ? "bg-teal-500 text-white" : "text-gray-600 hover:bg-gray-200 hover:text-gray-600"}`}
                    onClick={() => handleButtonClick("cards")}
                >
                    Cards
                </button>
                <button
                    className={`py-2 px-6 rounded-md ${activeButton === "history" ? "bg-teal-500 text-white" : "text-gray-600 hover:bg-gray-200 hover:text-gray-600"}`}
                    onClick={() => handleButtonClick("history")}
                >
                    History
                </button>
                <button
                    className={`py-2 px-6 rounded-md ${activeButton === "service" ? "bg-teal-500 text-white" : "text-gray-600 hover:bg-gray-200 hover:text-gray-600"}`}
                    onClick={() => handleButtonClick("service")}
                >
                    Service
                </button>
            </div>

            <div className="profile-container flex items-center">
                <div>
                    <p> Hi, {user.name.toUpperCase()}</p>
                </div>
                <div
                    className={`profile relative ml-3 ${
                        user && user.imageUrl
                            ? "bg-no-repeat bg-center"
                            : "bg-gray-200"
                    } flex items-center justify-center text-white`}
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                    }}
                >
                    {user && user.imageUrl ? (
                        <div
                            className="w-full h-full rounded-full overflow-hidden ">
                            <img
                                src={user.imageUrl}
                                alt="User"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ) : (
                        <div className="w-full h-full rounded-full flex items-center justify-center">
                            <img
                                src="/images/user.png"
                                alt="User"
                                className="p-2"
                            />
                        </div>
                    )}
                </div>

                <div>
                    <Button
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVert/>
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>
                            <button onClick={handleLogout}>Logout</button>
                        </MenuItem>
                    </Menu>
                </div>
            </div>

        </div>
    );
}
