import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price: { finalPrice },
    displayAssets: [{ full_background }],
  } = props;
  return (
    <Card
      id={mainId}
      text="light"
      bg="dark"
      className="m-3"
      style={{ width: '250px' }}
    >
      <Card.Img variant="top" src={full_background} alt={displayName} />
      <Card.Body>
        <Card.Title>{displayName}</Card.Title>
        <Card.Text>{displayDescription}</Card.Text>
        <Card.Text>{finalPrice} V-Bucks</Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  );
}

export { GoodsItem };
