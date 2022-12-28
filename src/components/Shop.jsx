import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Shop() {
  return (
    <Card className="m-3" style={{ width: '16rem' }}>
      <Card.Img style={{ width: '15rem' }} variant="top m-1" src="/logo.svg" />
      <Card.Body>
        <Card.Title>Product</Card.Title>
        <Card.Text>Price $</Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  );
}

export { Shop };
