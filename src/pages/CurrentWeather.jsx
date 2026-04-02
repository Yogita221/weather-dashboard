import { useEffect, useState } from "react";
import { useGeolocation } from "../hooks/useGeoLocation.js";
import { getWeather } from "../services/weatherApi";
import WeatherCard from "../components/WeatherCard";
import ChartCard from "../components/ChartCard";
import { Link } from "react-router-dom";

const CurrentWeather = () => {
  const location = useGeolocation();
  const [data, setData] = useState(null);
  const [unit, setUnit] = useState("C");

  useEffect(() => {
    if (location) {
      getWeather(location.lat, location.lon)
        .then(setData)
        .catch(console.error);
    }
  }, [location]);

  const convertTemp = (temp) => {
  return unit === "C" ? temp : (temp * 9) / 5 + 32;
};


  if (!data) return <p className="p-4">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-4">
   <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-4 mb-6 text-center">
  <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
    Weather Dashboard
  </h1>
  <p className="text-sm text-gray-500">
    Live Weather + Forecast Analytics
  </p>
</div>

      <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
  
  {/* Left side */}
 <button
  onClick={() => setUnit(unit === "C" ? "F" : "C")}
  className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition"
>
  °{unit}
</button>

  {/* Right side */}
  <Link
    to="/historical"
    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition"
  >
   View Historical Data →
  </Link>

</div>
      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3.5">
        <WeatherCard
          title="Temperature"
          value={convertTemp(data.hourly.temperature_2m[0]).toFixed(1)}
          unit={`°${unit}`}
        />

        <WeatherCard
          title="Humidity"
          value={data.hourly.relative_humidity_2m[0]}
          unit="%"
        />

        <WeatherCard
          title="Wind Speed"
          value={data.hourly.wind_speed_10m[0]}
          unit="km/h"
        />

        <WeatherCard
          title="Precipitation"
          value={data.hourly.precipitation[0]}
          unit="mm"
        />
      </div>

      {/* Charts */}
      <ChartCard
        title="Temperature (Hourly)"
        data={data.hourly.temperature_2m}
      />

      <ChartCard
        title="Humidity (Hourly)"
        data={data.hourly.relative_humidity_2m}
      />

      <ChartCard
        title="Wind Speed (Hourly)"
        data={data.hourly.wind_speed_10m}
      />
    </div>
  );
};

export default CurrentWeather;