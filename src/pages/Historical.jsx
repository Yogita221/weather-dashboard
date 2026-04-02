import { useState, useEffect } from "react";
import { useGeolocation } from "../hooks/useGeoLocation";
import { getHistoricalWeather } from "../services/weatherApi";
import ChartCard from "../components/ChartCard";

const Historical = () => {
  const location = useGeolocation();

  const [range, setRange] = useState({
    start: "",
    end: "",
  });

  const [data, setData] = useState(null);

  const handleFetch = () => {
     if (!range.start || !range.end) {
    alert("Please select dates");
    return;
  }

  const startDate = new Date(range.start);
const endDate = new Date(range.end);

if (endDate < startDate) {
  alert("End date should be after start date");
  return;
}

const diff = (endDate - startDate) / (1000 * 60 * 60 * 24);

if (diff > 730) {
  alert("Max 2 years allowed");
  return;
}

  if (location) {
    getHistoricalWeather(location.lat, location.lon, range.start, range.end)
      .then(setData)
      .catch(console.error);
  }

  };

 if (!location)
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
    </div>
  );

  // ✅ Sunrise/Sunset conversion (safe optional chaining)
  const sunriseData =
    data?.daily?.sunrise?.map((time) =>
      new Date(time).getHours()
    ) || [];

  const sunsetData =
    data?.daily?.sunset?.map((time) =>
      new Date(time).getHours()
    ) || [];

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-purple-200 via-blue-200 to-indigo-300">
     <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text animate-pulse">
  Historical Weather 
</h1>

      {/* Date Inputs */}
      {/* <div className="flex gap-4 mb-4 flex-wrap"> */}
      <div className="bg-white/60 backdrop-blur-lg border border-white/30 rounded-xl shadow-lg p-4 mb-6 flex gap-4 flex-wrap items-center justify-center">
        <input
          type="date"
          value={range.start}
          onChange={(e) =>
            setRange({ ...range, start: e.target.value })
          }
          className="p-2 rounded border"
        />

        <input
          type="date"
          value={range.end}
          onChange={(e) =>
            setRange({ ...range, end: e.target.value })
          }
          className="p-2 rounded border"
        />

      <button
  onClick={handleFetch}
  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition duration-300"
>
  Get Data 🚀
</button>
      </div>


      {/* Charts */}
      {data && (
        <>
          <ChartCard
            title="Max Temperature"
            data={data.daily.temperature_2m_max}
            labels={data.daily.time}
          />

          <ChartCard
            title="Min Temperature"
            data={data.daily.temperature_2m_min}
            labels={data.daily.time}
          />

          <ChartCard
            title="Mean Temperature"
            data={data.daily.temperature_2m_mean}
            labels={data.daily.time}
          />

          <ChartCard
            title="Precipitation"
            data={data.daily.precipitation_sum}
            labels={data.daily.time}
          />

          <ChartCard
            title="Wind Speed"
            data={data.daily.wind_speed_10m_max}
            labels={data.daily.time}
          />

              {/* ✅ Sunrise / Sunset */}
           <ChartCard 
            title="Sunrise (Hour)" 
            data={sunriseData}
            labels={data.daily.time}
             />

           <ChartCard 
           title="Sunset (Hour)" 
           data={sunsetData} 
           labels={data.daily.time}
           />

        </>
      )}
    </div>
  );
};

export default Historical;