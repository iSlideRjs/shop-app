import CloseButton from 'react-bootstrap/CloseButton';
import ListGroup from 'react-bootstrap/ListGroup';

function BacketItem(props) {
  const {
    mainId,
    displayName,
    price: { finalPrice },
    quantity,
  } = props;
  return (
    <ListGroup>
      {' '}
      <ListGroup.Item className="itemBasket" variant="light">
        {displayName} <span className="itemBasketNumber">x{quantity}</span> ={' '}
        {finalPrice} V-Bucks
        <CloseButton className="delete" />
      </ListGroup.Item>
    </ListGroup>
  );
}

export { BacketItem };
