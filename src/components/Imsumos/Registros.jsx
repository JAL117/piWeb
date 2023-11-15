import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const SupplyPage = () => {
  const [categoryName, setCategoryName] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [categories, setCategories] = useState(['Categoría 1', 'Categoría 2']);

  const handleCategorySubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar alguna lógica para guardar la categoría en tu base de datos o hacer lo que necesites
    console.log('Categoría enviada:', categoryName);

    setCategories((prevCategories) => [...prevCategories, categoryName]);
    setCategoryName('');
  };

  const handleItemSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar alguna lógica para guardar el suministro en tu base de datos o hacer lo que necesites
    console.log('Suministro enviado:', itemName, itemPrice);
    setItemName('');
    setItemPrice('');
  };

  return (
    <Container >
      <h2>Agregar Categoría</h2>
      <Form onSubmit={handleCategorySubmit} className='p-4'>
        <Form.Group controlId="categoryName">
          <Form.Label>Nombre de la categoría</Form.Label>
          <Form.Control
            type="text"
            value={categoryName}
            onChange={(event) => setCategoryName(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Agregar categoría
        </Button>
      </Form>

      <h2>Agregar Suministro</h2>
      <Form onSubmit={handleItemSubmit} className='p-4'>
        <Form.Group controlId="itemName">
          <Form.Label>Nombre del suministro</Form.Label>
          <Form.Control
            type="text"
            value={itemName}
            onChange={(event) => setItemName(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="itemPrice">
          <Form.Label>Precio del suministro</Form.Label>
          <Form.Control
            type="number"
            value={itemPrice}
            onChange={(event) => setItemPrice(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="categorySelect">
          <Form.Label>Categoría</Form.Label>
          <Form.Control as="select">
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Agregar suministro
        </Button>
      </Form>
    </Container>
  );
};

export default SupplyPage;