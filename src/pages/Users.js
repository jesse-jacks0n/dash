import React, {useEffect, useState} from 'react';
import {database} from "../firebase";
import { ref, get, set } from 'firebase/database';
import {IconButton, Menu, MenuItem} from "@mui/material";
import {Block, CheckCircleOutlined, GridOn, MoreVertRounded} from "@mui/icons-material";
import {FormatListBulletedRounded} from "@mui/icons-material";

export default function Users() {
    const [approvedRiders, setApprovedRiders] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedUserId, setSelectedUserId] = useState('');
    const [isGridView, setIsGridView] = useState(true);
    const fetchApprovedRidersData = async () => {
        try {
            const ridersRef = ref(database, 'users');
            const snapshot = await get(ridersRef);

            if (snapshot.exists()) {
                const ridersData = snapshot.val();
                const results = Object.entries(ridersData || {})
                    .filter(([key, value]) => value.status === 'approved')
                    .map(([key, value]) => ({ ...value, userId: key }));

                return results;
            } else {
                return [];
            }
        } catch (error) {
            console.error(`Error fetching data: ${error}`);
            return [];
        }
    };

    const handleMenuClick = (event, userId) => {
        setAnchorEl(event.currentTarget);
        setSelectedUserId(userId);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSelectedUserId('');
    };

    // const handleTerminate = () => {
    //     terminateUser(userId);
    //     handleClose();
    // };
    //
    // const handleMakeAdmin = () => {
    //     makeAdmin(userId);
    //     handleClose();
    // };

    const terminateUser = async (userId) => {
        try {
            const userRef = ref(database, `users/${userId}`);
            await set(userRef, { status: 'terminated' });

            setApprovedRiders(prevRiders => prevRiders.filter(user => user.userId !== userId));
        } catch (error) {
            console.error(`Error terminating rider: ${error}`);
        }
    };

    const makeAdmin = async (userId) => {
        try {
            const userRef = ref(database, `users/${userId}`);
            await set(userRef, { adminStatus: true });

            // Show a notification to indicate that the user is now an admin
            // You might need to implement a toast or notification system in your UI
        } catch (error) {
            console.error(`Error making user an admin: ${error}`);
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            const ridersData = await fetchApprovedRidersData();
            setApprovedRiders(ridersData);
        };
        fetchData();
    }, []);


    const handleViewToggle = () => {
        setIsGridView((prev) => !prev);
    };

    const UserListView = () => {
        return (
            <div>
                {isGridView ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                        {approvedRiders.map((user) => (
                            <div key={user.userId} className=" relative">
                                <div className="bg-white rounded-lg shadow-md p-4">
                                    <p>Name: {user.name || ''}</p>
                                    <p>Number Plate: {user.numberPlate || ''}</p>
                                    {/* Include other user details */}
                                    <div>
                                        <IconButton onClick={handleMenuClick}>
                                            <MoreVertRounded />
                                        </IconButton>
                                        <Menu
                                            anchorEl={anchorEl}
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                        >
                                            {/*<MenuItem onClick={handleTerminate}>*/}
                                            {/*    <IconButton>*/}
                                            {/*        <Block color="primary" />*/}
                                            {/*    </IconButton>*/}
                                            {/*    Terminate*/}
                                            {/*</MenuItem>*/}
                                            {/*{!isAdmin ? (*/}
                                            {/*    <MenuItem onClick={handleMakeAdmin}>*/}
                                            {/*        <IconButton>*/}
                                            {/*            <CheckCircleOutlined color="success" />*/}
                                            {/*        </IconButton>*/}
                                            {/*        Make Admin*/}
                                            {/*    </MenuItem>*/}
                                            {/*) : (*/}
                                            {/*    <MenuItem disabled>*/}
                                            {/*        Already Admin*/}
                                            {/*    </MenuItem>*/}
                                            {/*)}*/}
                                        </Menu>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        {approvedRiders.map((user) => (
                            <div key={user.userId} className="p-4">
                                <div className="bg-white rounded-lg shadow-md p-4">
                                    <div className="flex justify-between items-center">
                                        <div className="w-3/4">
                                            <p className="text-base font-semibold">Name: {user.name || ''}</p>
                                            <p className="text-sm">Number Plate: {user.numberPlate || ''}</p>
                                            <p className="text-sm">ID Number: {user.idNumber || ''}</p>
                                            <p className="text-sm">Ward: {user.ward || ''}</p>
                                            <p className="text-sm">Stage: {user.stage || ''}</p>
                                        </div>
                                        <div>
                                            <img
                                                src="/images/more.png"
                                                alt="More options"
                                                onClick={() => handleMenuClick(user.userId)}
                                                className="h-5 cursor-pointer"
                                            />
                                            {selectedUserId === user.userId && (
                                                <div
                                                    className="absolute top-12 right-0 bg-white p-2 border border-black"
                                                >
                                                    <div onClick={() => terminateUser(user.userId)}>
                                                        Terminate
                                                    </div>
                                                    {!user.adminStatus && (
                                                        <div onClick={() => makeAdmin(user.userId)}>
                                                            Make Admin
                                                        </div>
                                                    )}
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
            <div className="flex justify-end my-4">
                <button onClick={() => console.log('Navigate to Pending Riders')} className="btn">Pending</button>
                <button onClick={() => console.log('Navigate to Terminated Riders')} className="btn mx-2">Terminated</button>
                <button onClick={() => console.log('Navigate to Admin Riders')} className="btn">Admins</button>
                <IconButton onClick={handleViewToggle} size="large">
                    {isGridView ? <FormatListBulletedRounded /> : <GridOn />}
                </IconButton>
            </div>
            <UserListView />

        </div>
    );
};

