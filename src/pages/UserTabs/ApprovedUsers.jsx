import React, {useState, useEffect} from 'react';
import {database} from "../../firebase";
import {ref, get} from 'firebase/database';
import {Button, IconButton, Menu, MenuItem} from "@mui/material";
import {GridOn, MoreVert} from "@mui/icons-material";
import {FormatListBulletedRounded} from "@mui/icons-material";

export default function ApprovedUsers() {
    const [approvedRiders, setApprovedRiders] = useState([]);
    const [isGridView, setIsGridView] = useState(true);
    const [openMenus, setOpenMenus] = useState({});
    const [anchorEl, setAnchorEl] = useState(null);

    const fetchApprovedRidersData = async () => {
        try {
            const ridersRef = ref(database, 'users');
            const snapshot = await get(ridersRef);

            if (snapshot.exists()) {
                const ridersData = snapshot.val();
                const results = Object.entries(ridersData || {})
                    .filter(([key, value]) => value.status === 'approved')
                    .map(([key, value]) => ({...value, userId: key}));

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
        fetchApprovedRidersData();
    }, []);

    const handleViewToggle = () => {
        setIsGridView((prev) => !prev);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const UserListView = () => {
        return (
            <div>
                    {/*<div*/}
                    {/*    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">*/}
                    {/*    {approvedRiders.map((user) => (*/}
                    {/*        <div key={user.userId} className="relative">*/}
                    {/*            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">*/}
                    {/*                <div*/}
                    {/*                    className={`profile relative mb-2 ${user.imageUrl ? 'bg-no-repeat bg-center' : 'bg-gray-200'} flex items-center justify-center text-white`}*/}
                    {/*                    style={{width: '50px', height: '50px', borderRadius: '50%'}}*/}
                    {/*                >*/}
                    {/*                    {user.imageUrl ? (*/}
                    {/*                        <div*/}
                    {/*                            className="w-full h-full rounded-full overflow-hidden transition-transform transform-gpu hover:scale-125">*/}
                    {/*                            <img src={user.imageUrl} alt="User"*/}
                    {/*                                 className="w-full h-full object-cover"/>*/}
                    {/*                        </div>*/}
                    {/*                    ) : (*/}
                    {/*                        <div*/}
                    {/*                            className="w-full h-full rounded-full flex items-center justify-center">*/}
                    {/*                            <img src="/images/user.png" alt="User" className="p-2"/>*/}
                    {/*                        </div>*/}
                    {/*                    )}*/}
                    {/*                </div>*/}
                    {/*                <div className=" grid grid-cols-2 gap-2">*/}
                    {/*                    <div*/}
                    {/*                        className="bg-gray-100 rounded-full py-1 col-span-3 whitespace-nowrap flex justify-center items-center">*/}
                    {/*                        <p className="text-md font-medium">{user.name.toUpperCase() || ''}</p>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="bg-gray-100 rounded-full p-2 col-span-1 whitespace-nowrap">*/}
                    {/*                        <p className="text-xs font-light">{user.numberPlate || ''}</p>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="bg-gray-100 rounded-full p-2 col-span-1 whitespace-nowrap">*/}
                    {/*                        <p className="text-xs font-light">{user.county || ''}</p>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="bg-gray-100 rounded-full p-2 col-span-1 whitespace-nowrap">*/}
                    {/*                        <p className="text-xs font-light">{user.stage || ''}</p>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="bg-gray-100 rounded-full p-2 col-span-1 whitespace-nowrap">*/}
                    {/*                        <p className="text-xs font-light">{user.bikeMake || ''}</p>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="bg-gray-100 rounded-full p-2 col-span-1 whitespace-nowrap">*/}
                    {/*                        <p className="text-xs font-light">{user.bikeColor || ''}</p>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="bg-gray-100 rounded-full p-2 col-span-1 whitespace-nowrap">*/}
                    {/*                        <p className="text-xs font-light">{user.model || ''}</p>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}


                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    ))}*/}
                    {/*</div>*/}
            </div>
        );
    };
    return (
        <div>

            <div className="flex justify-between items-center my-2">
                <div className={"mx-2 text-lg"}>
                    Approved Users

                </div>
                {/*<IconButton onClick={handleViewToggle} size="large">*/}
                {/*    {isGridView ? <FormatListBulletedRounded/> : <GridOn/>}*/}
                {/*</IconButton>*/}
            </div>
            <hr/>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
                {approvedRiders.map((user) => (
                    <div key={user.userId} className="relative">
                        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                            <div
                                className={`profile relative mb-2 ${user.imageUrl ? 'bg-no-repeat bg-center' : 'bg-gray-200'} flex items-center justify-center text-white`}
                                style={{width: '50px', height: '50px', borderRadius: '50%'}}
                            >
                                {user.imageUrl ? (
                                    <div
                                        className="w-full h-full rounded-full overflow-hidden transition-transform transform-gpu hover:scale-125">
                                        <img src={user.imageUrl} alt="User"
                                             className="w-full h-full object-cover"/>
                                    </div>
                                ) : (
                                    <div
                                        className="w-full h-full rounded-full flex items-center justify-center">
                                        <img src="/images/user.png" alt="User" className="p-2"/>
                                    </div>
                                )}
                            </div>
                            <div className=" grid grid-cols-2 gap-2">
                                <div
                                    className="bg-gray-100 rounded-full py-1 col-span-3 whitespace-nowrap flex justify-center items-center">
                                    <p className="text-md font-medium">{user.name.toUpperCase() || ''}</p>
                                </div>
                                <div className="bg-gray-100 rounded-full p-2 col-span-1 whitespace-nowrap">
                                    <p className="text-xs font-light">{user.numberPlate || ''}</p>
                                </div>
                                <div className="bg-gray-100 rounded-full p-2 col-span-1 whitespace-nowrap">
                                    <p className="text-xs font-light">{user.county || ''}</p>
                                </div>
                                <div className="bg-gray-100 rounded-full p-2 col-span-1 whitespace-nowrap">
                                    <p className="text-xs font-light">{user.stage || ''}</p>
                                </div>
                                <div className="bg-gray-100 rounded-full p-2 col-span-1 whitespace-nowrap">
                                    <p className="text-xs font-light">{user.bikeMake || ''}</p>
                                </div>
                                <div className="bg-gray-100 rounded-full p-2 col-span-1 whitespace-nowrap">
                                    <p className="text-xs font-light">{user.bikeColor || ''}</p>
                                </div>
                                <div className="bg-gray-100 rounded-full p-2 col-span-1 whitespace-nowrap">
                                    <p className="text-xs font-light">{user.model || ''}</p>
                                </div>
                            </div>
                            <div className={"absolute top-1 right-1  "}>
                                <MoreVert
                                    aria-controls="simple-menu"
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                >

                                </MoreVert>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    PaperProps={{ style: { boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)' } }}
                                >
                                    <MenuItem onClick={handleClose}>
                                            <button className={"bg-teal-500 py-1 px-3 w-full rounded-md text-white text-sm"}>Edit</button>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                            <button className={"bg-green-600 py-1 px-3 w-full rounded-md text-white  text-sm"}>Make Admin</button>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                            <button className={"bg-red-500 py-1 px-3 w-full rounded-md text-white  text-sm"}>Terminate</button>
                                    </MenuItem>
                                </Menu>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

