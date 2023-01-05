import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price: { finalPrice },
    displayAssets: [{ background, full_background }],
  } = props;
  return (
    <Card
      id={mainId}
      text="light"
      bg="dark"
      className="m-3 mb-1"
      style={{ width: '300px' }}
    >
      <Carousel interval={null} variant="light pill" indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-2"
            src={full_background}
            alt={displayName}
            style={{ height: '298px' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={background}
            alt={displayName}
            style={{ height: '298px' }}
          />
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Title>{displayName}</Card.Title>
        <Card.Text>{displayDescription}</Card.Text>
      </Card.Body>
      <Card.Footer className="border-top border-primary" variant="danger">
        <Button variant="primary rounded-4">Buy</Button>
        <span className="m-2">{finalPrice} V-Bucks</span>
      </Card.Footer>
    </Card>
  );
}

export { GoodsItem };
