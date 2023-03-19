import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BacketItem } from './BasketItem';
import Table from 'react-bootstrap/Table';
import { useContext } from 'react';
import { ShopContext } from '../context';

function BasketList() {
  const { order, isBasketShow, setBasketShow } = useContext(ShopContext);
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.finalPrice * el.quantity;
  }, 0);
  return (
    <Modal
      onHide={() => setBasketShow(false)}
      show={isBasketShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body className="ps-1 pe-1 pb-1">
        {order.length ? (
          <Table bordered hover variant="dark" className="tableBasket">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Del</th>
              </tr>
            </thead>
            <tbody>
              {order.map((item) => (
                <BacketItem key={item.mainId} {...item} />
              ))}{' '}
            </tbody>
          </Table>
        ) : (
          <h2 className="emptyBasket">Empty Basket</h2>
        )}{' '}
      </Modal.Body>
      <Modal.Footer>
        <div className="price">Total Price: {totalPrice} V-Bucks</div>
        <div>
          <Button disabled={order.length === 0} variant="success rounded-5">
            Order
          </Button>
          <Button
            variant="danger rounded-5 ms-2"
            onClick={() => setBasketShow(false)}
          >
            Close
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export { BasketList };
