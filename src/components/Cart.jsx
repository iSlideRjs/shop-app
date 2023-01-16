import Badge from 'react-bootstrap/Badge';
import CartShop from '../svg/CartShop.svg';
import { BasketList } from './BasketList';

function Cart(props) {
  const { quantity = 0 } = props;

  return (
    <div className="cart" onClick={props.onClick}>
      <img src={CartShop} alt="Cart" width="30px" height="30px" />
      <Badge bg="danger" pill>
        {quantity}
      </Badge>
      <BasketList />
    </div>
  );
}

export { Cart };
