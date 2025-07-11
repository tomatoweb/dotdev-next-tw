'use client'
// npm i leaflet
// or https://www.npmjs.com/package/react-leaflet
// https://leafletjs.com/examples/quick-start/
/*
    for development purposes, we can change our current location 
    by using the browser's developer tools: more tools > ensors > location > override
*/
import { useRef, useEffect, use } from "react"
import leaflet from "leaflet"
import useLocalStorage from "@/app/hooks/useLocalStorage"
import useGeolocation from "@/app/hooks/useGeolocation"

export default function Map() {

    // give us a reference to the DOM element of the map
    const mapRef = useRef()

    // give us a reference to the user marker (a pin on the map)
    const userMarkerRef = useRef();

    // useLocalStorage hook to get the user's position (navigator.geolocation)
    const [userPos, setUserPos] = useLocalStorage("USER_MARKER", {
        latitude: 0,
        longitude: 0,
    });

    const location = useGeolocation();

    useEffect(() => {
        mapRef.current = leaflet
            .map('map')
            .setView([userPos.latitude, userPos.longitude], 13); // 13 is the zoom level

        leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(mapRef.current);
    }, [])

    // if the user position changes, we update the marker on the map
    useEffect(() => {

        setUserPos({ ...userPos });

        // if the userMarkerRef already exists, we remove it from the map
        // to avoid adding multiple markers on the map
        if (userMarkerRef.current) {
            mapRef.current.removeLayer(userMarkerRef.current);
        }

        userMarkerRef.current = leaflet
            .marker([location.latitude, location.longitude])
            .addTo(mapRef.current)
            .bindPopup("You are here", { autoClose: true, closeOnClick: false }); // bindPopup allows us to show a popup when the marker is clicked

        // change the color of the marker to another color
        const element = userMarkerRef.current.getElement();
        // https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate
        element.style.filter = "hue-rotate(120deg)";

        // set the view of the map to the user's position
        mapRef.current.setView([location.latitude, location.longitude], 13);

    }, [location, userPos.latitude, userPos.longitude]);

    return <div id="map" ref={mapRef}>Map</div>
}