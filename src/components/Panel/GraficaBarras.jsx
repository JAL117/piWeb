import React, { useMemo, useState, useEffect } from "react";
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
import axios from "axios";

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
    },
  },
};

const labels = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const scores = [968.0, 1155.0, 1210.0, 1386.0, 2600.0, 1222.0];


export default function Grafica() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3006/pedidos/fecha");
        setDatos(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  const data = useMemo(() => {
    return {
      datasets: [
        {
          label: "Ventas",
          data: scores,
          tension: 0.3,
          borderColor: "white",
          pointRadius: 8,
          backgroundColor: "darkgreen",
          color: "#ffff",
        },
      ],
      labels,
    };
  }, [scores, labels]);

  const options = {
    // opciones de la gráfica, si es necesario
  };

  return (
    <Bar
      options={options}
      data={data}
      style={{ width: "100%", marginTop: "25%" }}
    />
  );
}
