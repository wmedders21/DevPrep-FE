import "./statsChart.scss";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);
Chart.defaults.color = "black";

const StatsChart = ({ chartData, options }) => {
  return <Bar data={chartData} options={options} />;
};

export default StatsChart;
