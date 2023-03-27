import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useContext } from 'react';
import { ShopContext } from '../context';

function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price: { finalPrice },
    displayAssets: [{ background, full_background }],
  } = props;

  const {
    addToBasket,
    order,
    decQuantity,
    incQuantity,
    setShow,
    setImageShow,
    setImage,
    setIndexImage,
  } = useContext(ShopContext);

  const orderItem = order.find((item) => item.mainId === mainId);
  return (
    <Card id={mainId} text="light" bg="dark" className="mb-1 card">
      <Carousel interval={null} variant="light pill" indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-2 cardImg"
            src={full_background}
            alt={displayName}
            onClick={() => {
              setImageShow(true);
              setImage({ full_background, background, displayName });
              setIndexImage(0);
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded-2 cardImg"
            src={background}
            alt={displayName}
            onClick={() => {
              setImageShow(true);
              setImage({ full_background, background, displayName });
              setIndexImage(1);
            }}
          />
        </Carousel.Item>
      </Carousel>
      <Card.Body className="cardBody">
        <Card.Title className="cardTitle">{displayName}</Card.Title>
        <Card.Text>{displayDescription}</Card.Text>
      </Card.Body>
      <Card.Footer className="border-top border-primary cardFooter">
        {orderItem?.quantity ? (
          <ButtonGroup size="sm" className="me-2">
            <Button onClick={() => decQuantity(mainId, orderItem.quantity)}>
              -
            </Button>{' '}
            <Button active className="quantity">
              {orderItem?.quantity}
            </Button>{' '}
            <Button onClick={() => incQuantity(mainId)}>+</Button>
          </ButtonGroup>
        ) : (
          <Button
            variant="primary rounded-4"
            className="buy"
            onClick={() => {
              addToBasket({ mainId, displayName, price: { finalPrice } });
              setShow(true);
            }}
          >
            Buy
          </Button>
        )}
        <span className="ms-1 buyPrice">{finalPrice} VB</span>
      </Card.Footer>
    </Card>
  );
}

export { GoodsItem };
