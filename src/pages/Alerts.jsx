import React, {useState} from 'react';
import ActiveAlerts from "./AlertTabs/ActiveAlerts";
import ResolvedAlerts from "./AlertTabs/ResolvedAlerts";

export default function Alerts() {
    const [activeAlertTab, setActiveAlertTab] = useState('Active');

    return (
        <div>
            <div className="text-black flex justify-end items-end text-xs ">
                <button
                    className={`px-2 py-1 ml-2 mt-2 shadow-md rounded-md ${activeAlertTab === 'Active' ? 'bg-teal-500 text-white  ' : 'bg-white text-black hover:bg-white'}`}
                    onClick={() => setActiveAlertTab('Active')}>Active
                </button>
                <button
                    className={`px-2 py-1 ml-2 mt-2 shadow-md rounded-md ${activeAlertTab === 'Resolved' ? 'bg-teal-500 text-white  ' : 'bg-white text-black hover:bg-white'}`}
                    onClick={() => setActiveAlertTab('Resolved')}>Resolved
                </button>


            </div>

            <div>
                {activeAlertTab === 'Active' && <div><ActiveAlerts/></div>}
                {activeAlertTab === 'Resolved' && <div><ResolvedAlerts/></div>}

            </div>
        </div>


    );
}
