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
          <p>Empty Basket</p>
        )}
        <h5>Total Price: {totalPrice} V-Bucks</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button>Buy</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export { BasketList };
