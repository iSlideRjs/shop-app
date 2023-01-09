import Badge from 'react-bootstrap/Badge';
import CartShop from '../svg/CartShop.svg';

function Cart(props) {
  const { quantity = 0 } = props;

  return (
    <div className="cart">
      <img src={CartShop} alt="Cart" width="30px" height="30px" />
      <Badge bg="danger" pill>
        {quantity}
      </Badge>
    </div>
  );
}

export { Cart };
