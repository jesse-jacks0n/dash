import React, { useState } from 'react';
function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="dropdown w-52 bg-amber-100 rounded-lg shadow-2xl" >
            <button onClick={toggleOpen} className=" bg-amber-400">
                {isOpen ?
                    <img src={'/images/close.png'} alt="Close menu" className="w-3.5" /> :
                    <img src={'/images/more.png'} alt="Open menu" className="w-3.5" />
                }
            </button>

            {isOpen && (
                <div className="menu flex flex-col">
                    <a href="#" className="p-2">Menu item 1</a>
                    <a href="#" className="p-2">Menu item 2</a>
                    <a href="#" className="p-2">Menu item 3</a>
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;
