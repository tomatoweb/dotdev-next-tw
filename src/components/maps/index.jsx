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

const Map = () => {

  const iconBlue = L.icon({ iconSize: [25, 41], iconAnchor: [10, 41], popupAnchor: [2, -40], iconUrl: "/leaflet/marker-icon.png", shadowUrl: "/leaflet/marker-shadow.png" });
  const iconGreen = L.icon({ iconSize: [25, 41], iconAnchor: [10, 41], popupAnchor: [2, -40], iconUrl: "/leaflet/marker-icon-green.png", shadowUrl: "/leaflet/marker-shadow.png" });
  const iconPurple = L.icon({ iconSize: [25, 41], iconAnchor: [10, 41], popupAnchor: [2, -40], iconUrl: "/leaflet/marker-icon-purple.png", shadowUrl: "/leaflet/marker-shadow.png" });
  const iconRed = L.icon({ iconSize: [25, 41], iconAnchor: [10, 41], popupAnchor: [2, -40], iconUrl: "/leaflet/marker-icon-red.png", shadowUrl: "/leaflet/marker-shadow.png" });

  const defaultPos = [50.8821504, 4.538368]; // Kortenberg, Belgium

  function AddMarker() {

    const [coord, setPosition] = useState([]);

    useMapEvents({
      click: (e) => {
        setPosition([...coord, e.latlng]); // add 
        /* fetch('/api/geo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                position: JSON.stringify(e.latlng),
                text: "New Marker", // todo: make it dynamic
                icon: "iconBlue" // default icon
            })
        }); */
      }
    });

    const removeMarker = (pos) => {
      setPosition((prevCoord) =>
        prevCoord.filter((coord) => JSON.stringify(coord) !== JSON.stringify(pos))
      );
    };

    return (
      <div>
        {coord.map((pos, idx) => (
          <Marker
            key={`marker-${idx}`}
            position={pos}
            draggable={true}
            eventHandlers={{
              click: (e) => {
                console.log(e.latlng);
              }
            }}
          >
            <Popup>
              <button
                    className="ring-black ring-1 hover:ring-black text-black bg-gray-200 hover:bg-gray-300 p-1 rounded-lg transition-all duration-300"
                    onClick={
                      (e) => {
                        e.stopPropagation();
                        removeMarker(pos);
                      }}>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black">
                    <path d="M3 6H21M5 6V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V6M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6" stroke="#000000"/>
                    <path d="M14 11V17" stroke="#000000"/>
                    <path d="M10 11V17" stroke="#000000"/> 0
                    </svg>
                </button>
            </Popup>
          </Marker>
        ))}
      </div>
    );
  }

  // Get markers from the database, and add user location marker on the map
  function Markers() {

    const [userPosition, setPosition] = useState(null);
    const [markers, setMarkers] = useState([]);

    const map = useMap();

    useEffect(() => {
      fetch('/api/geo')
        .then((res) => res.json())
        .then((data) => {
          setMarkers(data.data)
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
      setPosition(defaultPos);
      map.flyTo(defaultPos, map.getZoom(), { // https://leafletjs.com/reference#pan-options
        animate: false,
        duration: 2, // in seconds
      });

    }, [map]);

    return userPosition && (
      <>
        <Marker position={userPosition} icon={iconBlue} draggable={true} autoPan={true} >
          <Popup>
            You are here
          </Popup>
        </Marker>

        {markers && markers.map((d, index) => (
          <Marker key={index} position={JSON.parse(d.position)} icon={eval(d.icon)} draggable={true} autoPan={true}>
            <Popup>
              {d.text}
            </Popup>
          </Marker>
        ))}
      </>
    );
  }

  function resetMarkers() {
    /* fetch('/api/geo', {
        method: 'DELETE',
    }).then(() => {
        setMapChanged(!mapChanged); // trigger re-render
    }); */
  }

  return (
    <div className="">
      <MapContainer className="h-[100vh]" center={[0, 0]} zoom={13} scrollWheelZoom={true}>
        <AddMarker />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers />
      </MapContainer>
    </div>
  );
};

export default Map;
