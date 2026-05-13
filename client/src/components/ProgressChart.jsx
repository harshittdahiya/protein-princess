import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", protein: 60 },
  { day: "Tue", protein: 72 },
  { day: "Wed", protein: 80 },
  { day: "Thu", protein: 75 },
  { day: "Fri", protein: 90 },
  { day: "Sat", protein: 95 },
  { day: "Sun", protein: 88 },
];

function ProgressChart() {
  return (
    <div className="w-full h-[300px]">

      <ResponsiveContainer width="100%" height="100%">

        <LineChart data={data}>

          <XAxis
            dataKey="day"
            tick={{ fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="protein"
            stroke="#f472b6"
            strokeWidth={4}
            dot={{ r: 6 }}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default ProgressChart;