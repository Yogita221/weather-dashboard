

import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Brush,
} from "recharts";

const ChartCard = ({ title, data, labels }) => {
  const chartData = data.map((value, index) => ({
    value,
    label: labels ? labels[index] : index,
  }));

  return (
    <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="bg-white/60 backdrop-blur-lg border border-white/30 rounded-xl shadow-xl p-4 mb-6"
>
 <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-4 mb-6">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#3b82f6" />
          
        
          <Brush dataKey="label" height={30} stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
</motion.div>

   
  );
};

export default ChartCard;