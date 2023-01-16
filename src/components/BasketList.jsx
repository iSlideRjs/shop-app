import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BacketItem } from './BasketItem';

function BasketList(props) {
  const { order = [] } = props;
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.finalPrice * el.quantity;
  }, 0);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {order.length ? (
          order.map((item) => <BacketItem key={item.mainId} {...item} />)
        ) : (
          <h2 className="emptyBasket">Empty Basket</h2>
        )}
        <div className="price">Total Price: {totalPrice} V-Bucks</div>
      </Modal.Body>
      <Modal.Footer>
        <Button disabled={order.length === 0} variant="success rounded-5">
          Buy
        </Button>
        <Button variant="danger rounded-5" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export { BasketList };
