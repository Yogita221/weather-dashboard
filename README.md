# 🌦️ Weather Dashboard (React + Open-Meteo API)

## 🚀 Overview

This is a responsive Weather Dashboard built using ReactJS that provides real-time and historical weather insights based on the user’s current location (via browser GPS).

The app integrates with the Open-Meteo API to fetch accurate weather data and displays it using interactive charts and clean UI components.

---

## ✨ Features

### 📍 Automatic Location Detection

* Uses browser Geolocation API
* Fetches weather data based on user’s current location

### 🌤️ Current Weather

* Temperature (Current)
* Humidity
* Wind Speed
* Precipitation

### 📊 Hourly Forecast (Charts)

* Temperature (with °C ↔ °F toggle)
* Humidity
* Wind Speed

### 📅 Historical Data (Up to 2 Years)

* Date range selection
* Validation (max 2 years)
* Charts for:

  * Max / Min / Mean Temperature
  * Precipitation
  * Wind Speed
  * Sunrise & Sunset

---

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite)
* **Styling:** Tailwind CSS
* **Charts:** Recharts
* **API:** Open-Meteo API
* **Routing:** React Router DOM

---

## ⚡ Performance

* Optimized rendering (<500ms target)
* Efficient API handling
* Clean component structure

---

## 📱 Responsive Design

* Fully mobile-friendly
* Adaptive layouts for tablet & desktop
* Smooth UI with modern styling

---

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── WeatherCard.jsx
 │    ├── ChartCard.jsx
 │
 ├── pages/
 │    ├── CurrentWeather.jsx
 │    ├── Historical.jsx
 │
 ├── hooks/
 │    ├── useGeoLocation.js
 │
 ├── services/
 │    ├── weatherApi.js
 │
 ├── App.jsx
 └── main.jsx
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repo
git clone https://github.com/your-username/weather-dashboard.git

# Go to project folder
cd weather-dashboard

# Install dependencies
npm install

# Run the project
npm run dev
```

---

## 🌐 API Used

* https://open-meteo.com/

---





