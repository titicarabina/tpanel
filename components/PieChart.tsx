// ./components/PieChart.js
import React from "react";
import { CategoryScale, Chart, LinearScale, PointElement } from "chart.js";
import { Pie } from "react-chartjs-2";
const labels = ["January", "February", "March", "April", "May", "June"];
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(99, 161, 255)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
      ],
      borderColor: "#0000ff0",
      data: [45, 25, 20, 10, 5, 5],
      borderWidth: 0,
    },
  ],
};
const PieChart = () => {
  return (
    <div className="glassPanel p-10 m-10">
      <h2 className="md:text-3xl text-xl font-bold shadow-sm p-2 md:ml-1 ml-5">
        Vanzari in ultima luna
      </h2>
      <Pie data={data} />
    </div>
  );
};
export default PieChart;
