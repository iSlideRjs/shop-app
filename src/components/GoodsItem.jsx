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
    addToBasket = Function.prototype,
  } = props;
  return (
    <Card id={mainId} text="light" bg="dark" className="mb-1 card">
      <Carousel interval={null} variant="light pill" indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-2 cardImg"
            src={full_background}
            alt={displayName}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-2 cardImg"
            src={background}
            alt={displayName}
          />
        </Carousel.Item>
      </Carousel>
      <Card.Body className="cardBody">
        <Card.Title className="cardTitle">{displayName}</Card.Title>
        <Card.Text>{displayDescription}</Card.Text>
      </Card.Body>
      <Card.Footer
        className="border-top border-primary cardFooter"
        variant="danger"
      >
        <Button
          variant="primary rounded-4"
          onClick={() =>
            addToBasket({ mainId, displayName, price: { finalPrice } })
          }
        >
          Buy
        </Button>
        <span className="m-2">{finalPrice} V-Bucks</span>
      </Card.Footer>
    </Card>
  );
}

export { GoodsItem };
