import React from "react";

export default function Navbar({ activeButton, handleButtonClick }) {
    return (
        <div className="navbar bg-gray-50 sticky top-0 px-1  flex justify-between items-center z-10 w-full">
            <div className="logo text-white text-lg">
                <img src="/images/icon.png" alt="logo"  className="h-8"/>

            </div>
            <div className="nav-content gap-2 bg-gray-50 rounded-lg flex justify-center items-center">
                <button
                    className={`py-2 px-6 rounded-lg ${activeButton === "dashboard" ? "bg-gray-700 text-gray-50" : "text-gray-600 hover:bg-gray-100 hover:text-gray-600"}`}
                    onClick={() => handleButtonClick("dashboard")}
                >
                    Dashboard
                </button>
                <button
                    className={`py-2 px-6 rounded-lg ${activeButton === "users" ? "bg-gray-700 text-gray-50" : "text-gray-600 hover:bg-gray-100 hover:text-gray-600"}`}
                    onClick={() => handleButtonClick("users")}
                >
                    Users
                </button>
                <button
                    className={`py-2 px-6 rounded-lg ${activeButton === "analytics" ? "bg-gray-700 text-gray-50" : "text-gray-600 hover:bg-gray-100 hover:text-gray-600"}`}
                    onClick={() => handleButtonClick("analytics")}
                >
                    Analytics
                </button>
                <button
                    className={`py-2 px-6 rounded-lg ${activeButton === "cards" ? "bg-gray-700 text-gray-50" : "text-gray-600 hover:bg-gray-100 hover:text-gray-600"}`}
                    onClick={() => handleButtonClick("cards")}
                >
                    Cards
                </button>
                <button
                    className={`py-2 px-6 rounded-lg ${activeButton === "history" ? "bg-gray-700 text-gray-50" : "text-gray-600 hover:bg-gray-100 hover:text-gray-600"}`}
                    onClick={() => handleButtonClick("history")}
                >
                    History
                </button>
                <button
                    className={`py-2 px-6 rounded-lg ${activeButton === "service" ? "bg-gray-700 text-gray-50" : "text-gray-600 hover:bg-gray-100 hover:text-gray-600"}`}
                    onClick={() => handleButtonClick("service")}
                >
                    Service
                </button>
            </div>
            <div className="profile-container flex items-center">
                <div className="circular bg-gray-200 w-12 h-12 rounded-full m-1"></div>
                <div className="circular bg-gray-200 w-12 h-12 rounded-full m-1"></div>
                <div className="circular bg-gray-200 w-12 h-12 rounded-full m-1"></div>
            </div>
        </div>
    );
}
