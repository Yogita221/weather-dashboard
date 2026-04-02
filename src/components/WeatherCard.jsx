const WeatherCard = ({ title, value, unit }) => {
  return (
    <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-md hover:shadow-xl transition">
      <h2 className="text-gray-500 text-sm">{title}</h2>
      <p className="text-2xl font-bold text-gray-800">
        {value} {unit}
      </p>
    </div>
  );
};

export default WeatherCard;