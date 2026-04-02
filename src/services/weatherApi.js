import axios from "axios";

export const getWeather = async (lat, lon) => {
  const res = await axios.get(
    `https://api.open-meteo.com/v1/forecast`,
    {
      params: {
        latitude: lat,
        longitude: lon,
        hourly: [
          "temperature_2m",
          "relative_humidity_2m",
          "precipitation",
          "visibility",
          "wind_speed_10m",
          "pm10",
          "pm2_5",
        ].join(","),
        daily: [
          "temperature_2m_max",
          "temperature_2m_min",
          "sunrise",
          "sunset",
          "precipitation_sum",
          "wind_speed_10m_max",
        ].join(","),
        timezone: "auto",
      },
    }
  );

  

  return res.data;
};

export const getHistoricalWeather = async (lat, lon, start, end) => {
  const res = await axios.get(
    "https://archive-api.open-meteo.com/v1/archive",
    {
      params: {
        latitude: lat,
        longitude: lon,
        start_date: start,
        end_date: end,
        daily: [
          "temperature_2m_max",
          "temperature_2m_min",
          "temperature_2m_mean",
          "sunrise",
          "sunset",
          "precipitation_sum",
          "wind_speed_10m_max",
        ].join(","),
        timezone: "auto",
      },
    }
  );

  return res.data;
};