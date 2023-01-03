import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price: { finalPrice },
    displayAssets: [{ background, url }],
  } = props;
  return (
    <Card
      id={mainId}
      text="light"
      bg="dark"
      className="m-3 mb-1"
      style={{ width: '300px' }}
    >
      <Carousel interval={null} variant="light" indicators={true}>
        <Carousel.Item>
          <img className="d-block w-100" src={background} alt={displayName} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={url} alt={displayName} />
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Title>{displayName}</Card.Title>
        <Card.Text>{displayDescription}</Card.Text>
      </Card.Body>
      <Card.Footer variant="danger">
        <Button variant="primary">Buy</Button>
        <span className="m-2">{finalPrice} V-Bucks</span>
      </Card.Footer>
    </Card>
  );
}

export { GoodsItem };
