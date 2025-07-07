'use client';
import { useEffect } from 'react';
import { NextResponse } from "next/server";

export default function Ipinfo() {
    // useEffect hook to ensure it runs after the component mounts
    useEffect(() => {
        const getClientLocation = async () => {
            const res = await fetch('https://ipinfo.io/json');
            const locationData = await res.json();

            // exclude own ip address
            if(locationData.ip != "94.225.219.140") {
                try {

                    await fetch('/api/ipinfo', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(locationData)
                    });

                } catch (error) {
                    console.log(error)
                    return new NextResponse('server error')
                }
            }
        };

        getClientLocation();
    }, []);

    return <div></div>;
}