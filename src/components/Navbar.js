import React from "react";

export default function Navbar({activeButton, handleButtonClick}) {
    return (
        <div className={"navbar"}>
            <div className={"logo"}>
                <h1>gogo</h1>
            </div>
            <div className={"nav-content"}>
                <button
                    className={activeButton === "dashboard" ? "active" : ""}
                    onClick={() => handleButtonClick("dashboard")}
                >Dashboard
                </button>
                <button
                    className={activeButton === "payments" ? "active" : ""}
                    onClick={() => handleButtonClick("payments")}
                >Payments
                </button>
                <button>Analytics</button>
                <button>Cards</button>
                <button>History</button>
                <button>Service</button>

            </div>
            <div className={"profile-container"}>
                <div className={"circular"}></div>
                <div className={"circular"}></div>
                <div className={"circular"}></div>


            </div>
        </div>
    );
}