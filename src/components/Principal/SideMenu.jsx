import { FaTrello, FaUserPlus, FaUsers, FaBars, FaUser } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { MdBorderColor,MdOutlineMenuBook } from "react-icons/md";
import { ImExit } from "react-icons/im";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  NavItem,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css'

const SideMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/inicio/usuario",
      name: "Usuario",
      icon: <FaUser />,
    },
    {
      path: "/inicio/panel",
      name: "Panel",
      icon: <FaTrello />,
    },
    {
      path: "/inicio/agregarusuarios",
      name: "Agregar usuario",
      icon: <FaUserPlus />,
    },
    {
      path: "/inicio/empleados",
      name: "Empleados",
      icon: <FaUsers />,
    },
    {
      path: "/inicio/cocina",
      name: "Cocina",
      icon: <FaKitchenSet />,
    },
    {
      path: "/inicio/ordenes",
      name: "Ordenes",
      icon: <MdBorderColor />,
    },
    {
      path: "/inicio/menudigital",
      name: "Menu digital",
      icon: <MdOutlineMenuBook />,
    },
    {
      path: "/",
      name: "Salir",
      icon: <ImExit />,
    },
  ];

  return (
    <Container fluid style={{position:"sticky"}}>
      <Row>
        <Col
          xs={12}
          md={isOpen ? 3 : 1}
          id="sidebar"
          className="d-flex flex-column align-items-center justify-content-between"
        >
          <div className="top_section text-center mt-3">
            <h1 className="logo" style={{ display: isOpen ? "block" : "none" }}>
              Menu
            </h1>
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <Nav className="flex-column">
            {menuItem.map((item, index) => (
              <NavItem key={index}>
                <NavLink to={item.path} className="link" activeClassName="active">
                  <div className="icon">{item.icon}</div>
                  <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
                    {item.name}
                  </div>
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Col>
        <Col xs={12} md={isOpen ? 9 : 11} id="main-content">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default SideMenu;
