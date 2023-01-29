import React from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart, LinearScale, PointElement } from "chart.js/auto";
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
const labels = ["Ianuarie", "Februarie", "Martie", "Aprilie", "May", "Iunie"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Bransamente",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45, 50, 60, 70, 80, 90],
      borderWidth: 1,
    },
    {
      label: "Tablouri electrice",
      backgroundColor: "rgb(99, 161, 255)",
      borderColor: "rgb(99, 161, 255)",
      data: [90, 80, 70, 60, 50, 45],
      borderWidth: 1,
    },
  ],
};

const LineChart = () => {
  return (
    <div className="glassPanel ml-5">
      <h2 className="md:text-3xl text-xl font-bold m-2 ml-10 shadow-sm">
        Statistici totale
      </h2>
      <Line data={data} className="w-auto md:w-[800px] md:h-[100px]" />
    </div>
  );
};

export default LineChart;
