'use client'
/*
https://github.com/PaulLeCam/react-leaflet/issues/45

Leaflet makes direct calls to the DOM when it is loaded,
therefore this library is not compatible with server-side rendering (SSR).
to use it in a Next.js app, you need to load it only on the client side.
So, if we add 'use client';' at the top of this file, it will throw an error in server console log,
because a client component is pre-rendered on the server at least once, and Leaflet is not compatible with SSR.
*/

import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import { useState, useEffect, useRef } from 'react';
import data from "./data";

const Map = () => {
    
    const [mapChanged, setMapChanged] = useState(false);

    // Add a new marker
    function AddMarker() {
        const map = useMapEvents({
            click: (location) => {
                console.log('map clicked', location.latlng)
                fetch('/api/geo', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: location.latlng ? JSON.stringify({
                        position: JSON.stringify(location.latlng),
                        text: "New Marker",
                        icon: "iconBlue" // default icon
                    }) : JSON.stringify({ 
                        position: JSON.stringify([0, 0]), 
                        text: "New Marker", 
                        icon: "iconBlue" 
                    })
                });
                setMapChanged(!mapChanged); // trigger re-render
            },
            // locate the user on map load
            locationfound: (location) => {
                //console.log('location found:', location.latlng)
                
            },
        })
        return null
    }

    function LocationMarker() {

        const iconBlue = L.icon({ iconSize: [25, 41], iconAnchor: [10, 41], popupAnchor: [2, -40], iconUrl: "/leaflet/marker-icon.png", shadowUrl: "/leaflet/marker-shadow.png" });
        const iconGreen = L.icon({ iconSize: [25, 41], iconAnchor: [10, 41], popupAnchor: [2, -40], iconUrl: "/leaflet/marker-icon-green.png", shadowUrl: "/leaflet/marker-shadow.png" });
        const iconPurple = L.icon({ iconSize: [25, 41], iconAnchor: [10, 41], popupAnchor: [2, -40], iconUrl: "/leaflet/marker-icon-purple.png", shadowUrl: "/leaflet/marker-shadow.png" });
        const iconRed = L.icon({ iconSize: [25, 41], iconAnchor: [10, 41], popupAnchor: [2, -40], iconUrl: "/leaflet/marker-icon-red.png", shadowUrl: "/leaflet/marker-shadow.png" });

        const [position, setPosition] = useState(null);
        const [prismaData, setPrismaData] = useState(null);

        const map = useMap();

        useEffect(() => {
            fetch('/api/geo')
                .then((res) => res.json())
                .then((prismaData) => {
                    setPrismaData(prismaData.data)
                })
        }, []);

        useEffect(() => {
            // with user location
            /* map.locate().on("locationfound", function (e) {
                setPosition(e.latlng);
                map.flyTo(e.latlng, map.getZoom(), { // https://leafletjs.com/reference#pan-options
                    animate: false,
                    duration: 2, // in seconds
                });
            }); */
            // without user location
            setPosition({ lat: 50.8821504, lng: 4.538368 });
            map.flyTo({ lat: 50.8821504, lng: 4.538368 }, map.getZoom(), { // https://leafletjs.com/reference#pan-options
                animate: false,
                duration: 2, // in seconds
            });
        }, [map, mapChanged]);

        return position === null ? null : (
            <>
                <Marker position={position} icon={iconBlue} draggable={true} autoPan={true} >
                    <Popup>
                        You are here
                    </Popup>
                </Marker>

                {prismaData && prismaData.map((d, index) => (
                    <Marker key={index} position={JSON.parse(d.position)} icon={eval(d.icon)} draggable={true} autoPan={true}>
                        <Popup>
                            {d.text}
                        </Popup>
                    </Marker>
                ))}
            </>
        );
    }

    return (
        <div className="w-full">

            <MapContainer className="h-[800px] w-full" center={[0, 0]} zoom={13} scrollWheelZoom={true}>
                <AddMarker />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <LocationMarker />
            </MapContainer>

        </div>
    );
};

export default Map;
