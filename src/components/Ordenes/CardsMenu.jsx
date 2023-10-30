import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../../styles/MenuDigital.css";
import { Button } from "react-bootstrap";

class MenuCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: 0,
    };
  }

  mostrarAlerta = (nombre, descripcion, precio) => {
    const mensaje = `Nombre: ${nombre}\nDescripción: ${descripcion}\nPrecio: ${precio}`;
    alert(mensaje);
  };

  render() {
    const menuData = [
      {
        section: "Todos",
        items: [
          {
            nombre: "Producto 1",
            descripcion: "Descripción del producto 1",
            precio: "$10.00",
            imagen: "../../img/IMG_0919.jpg", 
          },
          // ... Otros platillos
        ],
      },
      {
        section: "Tacos",
        items: [
          {
            nombre: "Taco 1",
            descripcion: "Descripción del taco 1",
            precio: "$2.00",
            imagen: "./img/IMG_0919.jpg", 
          },
          // ... Otros platillos de tacos
        ],
      },{
        section: "Tlayudas",
        items: [
          {
            nombre: "Taco 1",
            descripcion: "Descripción del taco 1",
            precio: "$2.00",
            imagen: "./img/IMG_0919.jpg", 
          },
          // ... Otros platillos de tacos
        ],
      },{
        section: "Bebidas",
        items: [
          {
            nombre: "Taco 1",
            descripcion: "Descripción del taco 1",
            precio: "$2.00",
            imagen: "./img/IMG_0919.jpg", 
          },
          // ... Otros platillos de tacos
        ],
      },
      // Otras secciones y platillos
    ];

    return (
      <Tabs
        selectedIndex={this.state.activeSection}
        onSelect={(index) => this.setState({ activeSection: index })}
      >
        <TabList
          className='mb-5'>
          {menuData.map((section) => (
            <Tab key={section.section}>{section.section}</Tab>
          ))}
        </TabList>
        {menuData.map((section, index) => (
          <TabPanel key={index} className='m-4' >
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex}>
                <h3>{item.nombre}</h3>
                <img src={item.imagen} alt={`Imagen de ${item.nombre}`} />
                <p>{item.descripcion}</p>
                <p>Precio: {item.precio}</p>
                <Button
                  onClick={() =>
                    this.mostrarAlerta(item.nombre, item.descripcion, item.precio)
                  }
                >
                  Agregar al carrito
                </Button>
              </div>
            ))}
          </TabPanel>
        ))}
      </Tabs>
    );
  }
}

export default MenuCard;
