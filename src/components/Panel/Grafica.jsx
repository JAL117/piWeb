import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  responsive: true,
  fill: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Ventas del dia",
    }
  }
};

const labels = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const scores = [968.0, 1155.0, 1210.0, 1386.0, 2600.0, 1222.0];

export default function Grafica() {
  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Ventas",
          data: scores,
          tension: 0.3,
          borderColor: "white",
          pointRadius: 8,
          backgroundColor: " rgb(56, 255, 255)",
          color: "#ffff",
        },
      ],
      labels,
    };
  }, []);
  return <Bar options={options} data={data}/>;
}
