//Sidebar.js
'use client';

import { useState } from 'react';

const Sidebar = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const remove = async () => {

        await fetch('/api/geo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                option: "delete"
            })
        }); 
        
    }

    return (
        <div className="flex">
            {/* Open button */}
            <button
                style={{ zIndex: 1000 }}
                className="absolute right-0 ring-black ring-1 hover:bg-gray-700 text-white font-bold p-1 mt-1 mr-1 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="black">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6H20M4 12H20M4 18H20" />
                </svg>
            </button>
            {/* Sidebar */}
            <div style={{ zIndex: 10000 }} className={`h-fit mt-4 rounded-s-lg bg-gray-700 text-white fixed right-0 transition-all duration-500 z-10 ${isOpen ? 'w-40' : 'w-40 -mr-40 overflow-hidden'}`}>
                {/* Close button */}
                <button className="hover:bg-gray-700 text-white font-bold absolute right-0 m-2"
                    onClick={() => setIsOpen(!isOpen)}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="gray">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                {/* Sidebar content */}
                <div className="flex flex-col pl-8 py-6">
                    <div className="">
                        <div>
                            <a href="#" className="text-white hover:text-gray-300">
                                Settings
                            </a>
                        </div>
                        <div className='mt-6'>
                            <a href="#" className="text-white hover:text-gray-300">
                                Options
                            </a>
                        </div>
                        <div className='mt-6'>
                            <a onClick={() => {remove()}} href="#" className="text-white hover:text-gray-300">
                                Clear 
                            </a>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default Sidebar;