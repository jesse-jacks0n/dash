import React, { useState } from 'react';
import ActiveAlerts from "../pages/AlertTabs/ActiveAlerts";
import ResolvedAlerts from "../pages/AlertTabs/ResolvedAlerts";

export default function AlertTabs(){
    const [activeTab, setActiveTab] = useState('Active');

    return (
        <div>
            <div className="text-black flex justify-end items-end text-xs ">
                <button   className={`px-2 py-1 ml-2 mt-2 shadow-md rounded-md ${activeTab === 'Active' ? 'bg-teal-500 text-white  ' : 'bg-white text-black hover:bg-white'}`} onClick={() => setActiveTab('Approved')}>Approved
                </button>
                <button   className={`px-2 py-1 ml-2 mt-2 shadow-md rounded-md ${activeTab === 'Resolved' ? 'bg-blue-500 text-white  ' : 'bg-white text-black hover:bg-white'}`}
                          onClick={() => setActiveTab('Pending')}>Resolved
                </button>


            </div>

            <div>
                {activeTab === 'Active' && <div><ActiveAlerts/></div>}
                {activeTab === 'Resolved' && <div><ResolvedAlerts/></div>}

            </div>
        </div>


    );
}