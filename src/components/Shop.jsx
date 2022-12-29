import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Shop() {
  return (
    <Card
      text="light"
      bg="dark"
      className="m-3 rounded-4"
      style={{ width: '250px' }}
    >
      <Card.Img variant="top" src="/logo.svg" />
      <Card.Body>
        <Card.Title>Product</Card.Title>
        <Card.Text>Price $</Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  );
}

export { Shop };
