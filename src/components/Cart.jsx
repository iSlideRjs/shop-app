import Badge from 'react-bootstrap/Badge';
import CartShop from '../svg/CartShop.svg';
import { useContext } from 'react';
import { ShopContext } from '../context';

function Cart() {
  const { order, setBasketShow } = useContext(ShopContext);
  const quantity = order.length;

  return (
    <div className="cart" onClick={() => setBasketShow(true)}>
      <img src={CartShop} alt="Cart" width="30px" height="30px" />
      <Badge bg="danger" pill>
        {quantity}
      </Badge>
    </div>
  );
}

export { Cart };
