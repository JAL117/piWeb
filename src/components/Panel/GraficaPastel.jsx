import React, { useEffect, useState } from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import axios from "axios";

Chart.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  fill: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Productos mas vendidos",
    },
  },
};

const data = {
  labels: ["Tlayudas", "Tacos", "Refrescos"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function GraficaPastel() {
  const [productos, setProductos] = useState([]);
  const [productos2, setProductos2] = useState([]);
  const [valores, setValores] = useState([0, 0, 0]);
  const [categorias, setCategorias] = useState([]);

  const obtenerDatos = async () => {
    try {
      const response = await axios.get("http://localhost:3006/pedidos/fecha");
      setProductos(response.data.pedidos);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

 const contarCategorias = () => {
   const arreglo = productos.flatMap((objeto) => objeto.productos);
   setProductos2(arreglo);

   const categoriasUnicas = Array.from(
     new Set(arreglo.map((alimento) => alimento.categoria))
   );
   setCategorias(categoriasUnicas);

   const nuevosValores = categoriasUnicas.map((categoria) =>
     arreglo
       .filter((alimento) => alimento.categoria === categoria)
       .reduce((total, alimento) => total + alimento.cantidad, 0)
   );

   setValores(nuevosValores);
 };


  useEffect(() => {
    obtenerDatos();
  }, []);

  useEffect(() => {
    if (productos.length > 0) {
      contarCategorias();
    }
  }, [productos]);
console.log(productos, productos2);
  const data = {
    labels: categorias,
    datasets: [
      {
        data: valores,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <Pie
      data={data}
      options={options}
      style={{ height: "50%", width: "50%" }}
    />
  );
}

export default GraficaPastel;
