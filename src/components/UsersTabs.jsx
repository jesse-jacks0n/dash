import React, { useState } from 'react';
import ApprovedUsers from "../pages/UserTabs/ApprovedUsers";
import PendingUsers from "../pages/UserTabs/PendingUsers";
import TerminatedUsers from "../pages/UserTabs/TerminatedUsers";
import AdminUsers from "../pages/UserTabs/AdminUsers";
import Users from "../pages/UserTabs/Users";

export default function UsersTabs() {

    const [activeUserTab, setActiveUserTab] = useState('Approved');

    return (
        <div>
            <div className="text-black flex justify-end items-end text-xs ">
                <button   className={`px-2 py-1 ml-2 mt-2 shadow-md rounded-md ${activeUserTab === 'Approved' ? 'bg-teal-500 text-white  ' : 'bg-white text-black hover:bg-white'}`} onClick={() => setActiveUserTab('Approved')}>Approved
                </button>
                <button   className={`px-2 py-1 ml-2 mt-2 shadow-md rounded-md ${activeUserTab === 'Users' ? 'bg-blue-500 text-white  ' : 'bg-white text-black hover:bg-white'}`}
                        onClick={() => setActiveUserTab('Users')}>Users
                </button>
                <button className={`px-2 py-1 ml-2 mt-2 shadow-md rounded-md ${activeUserTab === 'Terminated' ? 'bg-red-500 text-white  ' : 'bg-white text-black hover:bg-white'}`}
                        onClick={() => setActiveUserTab('Terminated')}>Terminated
                </button>
                <button className={`px-2 py-1 ml-2 mt-2 shadow-md rounded-md ${activeUserTab === 'Admins' ? 'bg-purple-500 text-white  ' : 'bg-white text-black hover:bg-white'}`}
                        onClick={() => setActiveUserTab('Admins')}>Admins
                </button>

            </div>

            <div>
                {activeUserTab === 'Approved' && <div><ApprovedUsers/></div>}
                {activeUserTab === 'Users' && <div><Users/></div>}
                {activeUserTab === 'Terminated' && <div><TerminatedUsers/></div>}
                {activeUserTab === 'Admins' && <div><AdminUsers/></div>}
            </div>
        </div>


    );
};
