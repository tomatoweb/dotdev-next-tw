import L from "leaflet";

export function iconBlue() {

    return L.icon({
        iconSize: [25, 41],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40],
        iconUrl: "/leaflet/marker-icon.png",
        shadowUrl: "/leaflet/marker-shadow.png"
    });

}

export function iconGreen() {

    return L.icon({
        iconSize: [25, 41],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40],
        iconUrl: "/leaflet/marker-icon-green.png",
        shadowUrl: "/leaflet/marker-shadow.png"
    });

}

export function iconPurple() {

    return L.icon({
        iconSize: [25, 41],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40],
        iconUrl: "/leaflet/marker-icon-purple.png",
        shadowUrl: "/leaflet/marker-shadow.png"
    });

}

export function iconRed() {

    return L.icon({
        iconSize: [25, 41],
        iconAnchor: [10, 41],
        popupAnchor: [2, -40],
        iconUrl: "/leaflet/marker-icon-red.png",
        shadowUrl: "/leaflet/marker-shadow.png"
    });

}