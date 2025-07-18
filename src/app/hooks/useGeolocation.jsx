import { useEffect, useState } from "react";

export default function useGeolocation() {

  const [userPosition, setUserPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {

    const geo = navigator.geolocation;

    function onSuccess(position) {
      setUserPosition({
        latitude: userPosition.coords.latitude,
        longitude: userPosition.coords.longitude,
      });
    }

    function onError(error) {
      console.error("Error retrieving geolocation:", error);
    }

    const watcher = geo.watchPosition(onSuccess, onError);

    return () => geo.clearWatch(watcher);
    
  }, []);

  return userPosition;
}
