import CloseButton from 'react-bootstrap/CloseButton';
import ListGroup from 'react-bootstrap/ListGroup';

function BacketItem(props) {
  const {
    mainId,
    displayName,
    price: { finalPrice },
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;
  return (
    <ListGroup>
      {' '}
      <ListGroup.Item className="itemBasket" variant="light">
        {displayName}{' '}
        <span
          variant="outline-danger"
          className="plus"
          onClick={() => incQuantity(mainId)}
        >
          +
        </span>
        <span className="itemBasketNumber">x{quantity}</span>
        <span
          variant="outline-danger"
          className="plusMinus"
          onClick={() => decQuantity(mainId)}
        >
          -
        </span>
        = {finalPrice * quantity} V-Bucks
        <CloseButton
          className="delete"
          onClick={() => removeFromBasket(mainId)}
        />
      </ListGroup.Item>
    </ListGroup>
  );
}

export { BacketItem };
