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
        <div className="textCart">
          {displayName}{' '}
          <span
            variant="outline-danger"
            className="plus"
            onClick={() => incQuantity(mainId)}
          >
            &#10133;
          </span>{' '}
          <span className="itemBasketNumber">x{quantity}</span>{' '}
          <span
            variant="outline-danger"
            className="plusMinus"
            onClick={() => decQuantity(mainId)}
          >
            &#10134;
          </span>{' '}
          = {finalPrice * quantity} VB
        </div>
        <CloseButton
          className="delete"
          onClick={() => removeFromBasket(mainId)}
        />
      </ListGroup.Item>
    </ListGroup>
  );
}

export { BacketItem };
