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
      text: "Ventas de la semana",
    },
  },
};

export default function Grafica() {
  const [datos, setDatos] = useState([]);
  const [labels, setLabels] = useState([]);
  const [scores, setScores] = useState([]);

  const formatDate = (fecha) => {
    const date = new Date(fecha);
    return date.toLocaleDateString();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3006/pedidos/fecha");
        setDatos(response.data.pedidos);

        const grupos = response.data.pedidos.reduce((acc, objeto) => {
          const fecha = objeto.fecha.split("T")[0];
          acc[fecha] = acc[fecha] || [];
          acc[fecha].push(objeto);
          return acc;
        }, {});

        const resultados = Object.entries(grupos).map(([fecha, objetos]) => {
          const sumaValores = objetos.reduce(
            (suma, objeto) => suma + objeto.total,
            0
          );
          return { fecha, sumaValores };
        });

        const newLabels = resultados.map((resultado) =>
          formatDate(resultado.fecha)
        );
        const newScores = resultados.map((resultado) => resultado.sumaValores);

        setLabels(newLabels);
        setScores(newScores);
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

  return (
    <Bar
      options={options}
      data={data}
      style={{ width: "80%", marginTop: "25%", height: "50%" }}
    />
  );
}
