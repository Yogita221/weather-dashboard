import { useState, useEffect } from "react";

export const useGeolocation = () => {
  const [location, setLocation] = useState(null);
  const [unit, setUnit] = useState("C");

  const convertTemp = (temp) => {
  return unit === "C" ? temp : (temp * 9) / 5 + 32;
};

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => console.log(error)
    );
  }, []);

  return location;
};