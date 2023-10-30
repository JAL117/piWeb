import { Card, Button } from 'react-bootstrap';

function ProductCard({ product, onAddToCart }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Precio: {product.price}</Card.Text>
        <Button variant="primary" onClick={() => onAddToCart(product)}>Agregar al Pedido</Button>
      </Card.Body>
    </Card>
  );
}
