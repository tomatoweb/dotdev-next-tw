'use client';
import { useEffect } from 'react';
import { NextResponse } from "next/server";

export default function Ipinfo() {
  useEffect(() => {
    const getClientLocation = async () => {
      const res = await fetch('https://ipinfo.io/json');
      const locationData = await res.json();

      try {

        await fetch('/api/ipinfo',  {
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

    };

    getClientLocation();
  }, []);

  return <div></div>;
}