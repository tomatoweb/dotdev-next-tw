//Sidebar.js
'use client';

import { useState } from 'react';

const Sidebar = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex">
            {/* Open button */}
            <button
                className="absolute hover:bg-gray-700 text-white font-bold p-1 mt-6 ml-6 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}>
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="gray">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6H20M4 12H20M4 18H20" />
                </svg>
            </button>
            {/* Sidebar */}
            <div className={`bg-gray-800 text-white fixed h-screen transition-all duration-500 z-10 ${isOpen ? 'w-52' : 'w-52 -ml-52'}`}>
                {/* Close button */}
                <button className="hover:bg-gray-700 text-white font-bold absolute right-0 m-2"
                    onClick={() => setIsOpen(!isOpen)}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="gray">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                {/* Sidebar content */}
                <div className="flex flex-col pl-10">
                    <div className="mt-12">
                        <a href="#" className="text-white hover:text-gray-300">
                            Add a user
                        </a>
                    </div>
                    <div className="mt-4">
                        <a href="#" className="text-white hover:text-gray-300">
                            Change location
                        </a>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default Sidebar;