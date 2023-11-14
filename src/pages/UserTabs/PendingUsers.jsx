import React, { useState, useEffect } from 'react';
import {database} from "../../firebase";
import { ref, get } from 'firebase/database';
import {IconButton} from "@mui/material";
import {GridOn} from "@mui/icons-material";
import {FormatListBulletedRounded} from "@mui/icons-material";

export default function PendingUsers() {
    const [approvedRiders, setApprovedRiders] = useState([]);
    const [isGridView, setIsGridView] = useState(true);
    const [openMenus, setOpenMenus] = useState({});

    const fetchPendingRidersData = async () => {
        try {
            const ridersRef = ref(database, 'users');
            const snapshot = await get(ridersRef);

            if (snapshot.exists()) {
                const ridersData = snapshot.val();
                const results = Object.entries(ridersData || {})
                    .filter(([key, value]) => value.status === 'pending')
                    .map(([key, value]) => ({ ...value, userId: key }));

                // Initialize menu state for each user as closed
                const initialMenuState = results.reduce((acc, curr) => {
                    acc[curr.userId] = false;
                    return acc;
                }, {});

                setOpenMenus(initialMenuState);
                setApprovedRiders(results);
            } else {
                setApprovedRiders([]);
            }
        } catch (error) {
            console.error(`Error fetching data: ${error}`);
        }
    };

    useEffect(() => {
        fetchPendingRidersData();
    }, []);

    const handleViewToggle = () => {
        setIsGridView((prev) => !prev);
    };

    const toggleMenu = (userId) => {
        setOpenMenus((prevOpenMenus) => {
            return {
                ...prevOpenMenus,
                [userId]: !prevOpenMenus[userId],
            };
        });
    };

    const UserListView = () => {
        return (
            <div>
                {isGridView ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                        {approvedRiders.map((user) => (
                            <div key={user.userId} className="relative">
                                <div className="bg-white rounded-lg shadow-md p-4">

                                    <p>Name: {user.name || ''}</p>
                                    <p>Number Plate: {user.numberPlate || ''}</p>
                                    <div className="dropdown w-fit rounded-lg shadow-lg bg-white absolute top-0 right-0">
                                        <button onClick={() => toggleMenu(user.userId)} className="right-0 m-2">
                                            {openMenus[user.userId] ? (
                                                <img src={'/images/close.png'} alt="Close menu" className="w-3.5 absolute top-0 right-0 m-2" />
                                            ) : (
                                                <img src={'/images/more.png'} alt="Open menu" className="w-3.5" />
                                            )}
                                        </button>

                                        {openMenus[user.userId] && (
                                            <div className="menu flex flex-col">
                                                <a href="#" className="p-2">Menu item 1</a>
                                                <a href="#" className="p-2">Menu item 2</a>
                                                <a href="#" className="p-2">Menu item 3</a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        {approvedRiders.map((user) => (
                            <div key={user.userId} className="p-4 relative">
                                <div className="bg-white rounded-lg shadow-md p-4">
                                    <div className="flex justify-between items-center">
                                        <div className="w-3/4">
                                            <p className="text-base font-semibold">Name: {user.name || ''}</p>
                                            <p className="text-sm">Number Plate: {user.numberPlate || ''}</p>
                                            {/* Include other user details */}
                                        </div>
                                        <div className="dropdown w-fit rounded-lg shadow-lg bg-white absolute top-0 right-0">
                                            <button onClick={() => toggleMenu(user.userId)} className="right-0 p-2">
                                                {openMenus[user.userId] ? (
                                                    <img src={'/images/close.png'} alt="Close menu" className="w-3.5 absolute top-0 right-0 m-2" />
                                                ) : (
                                                    <img src={'/images/more.png'} alt="Open menu" className="w-3.5" />
                                                )}
                                            </button>

                                            {openMenus[user.userId] && (
                                                <div className="menu flex flex-col">
                                                    <a href="#" className="p-2">Menu item 1</a>
                                                    <a href="#" className="p-2">Menu item 2</a>
                                                    <a href="#" className="p-2">Menu item 3</a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };
    return (
        <div>
            {/* Header Buttons for Navigation */}
            <div className="flex justify-between items-center my-2">
                <div className={"mx-2 text-lg"}>
                    Pending Approval
                </div>
                <IconButton onClick={handleViewToggle} size="large">
                    {isGridView ? <FormatListBulletedRounded/> : <GridOn/>}
                </IconButton>
            </div>
            <hr/>
            <UserListView/>

        </div>
    );
};

