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
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { iconBlue } from "./constants";
import useLocalStorage from "@/app/hooks/useLocalStorage"
import useGeolocation from "@/app/hooks/useGeolocation"
import { useState, useEffect, useRef } from 'react';
import data from "./data";

const Map = () => {

    console.log(data)

    function LocationMarker() {

        const [position, setPosition] = useState(null);

        const [bbox, setBbox] = useState([]);

        const map = useMap();

        const userMarkerRef = useRef();

        useEffect(() => {
            map.locate().on("locationfound", function (e) {
                setPosition(e.latlng);
                map.flyTo(e.latlng, map.getZoom(), { // https://leafletjs.com/reference#pan-options
                    animate: false,
                    duration: 2, // in seconds
                });
                //userMarkerRef.current = map.addLayer(L.marker([50.88045, 4.5278], {icon: iconBlue()})); // Add a marker at the user's location
                //console.log(userMarkerRef.current);
                //const element = userMarkerRef.current.getElement();
                // https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate
                //element.style.filter = "hue-rotate(120deg)";
                //const radius = e.accuracy;
                //const circle = L.circle(e.latlng, radius);
                //circle.addTo(map);
                //setBbox(e.bounds.toBBoxString().split(","));
            });
        }, [map]);

        return position === null ? null : (
          <>
            <Marker position={position} icon={iconBlue()} draggable={true} autoPan={true} >
              <Popup id="pop1">
                  You are here
              </Popup>
            </Marker>
            {data.map((d, index) => (
              <Marker key={index} position={d.position} icon={eval(d.icon)} draggable={true} autoPan={true}>
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
