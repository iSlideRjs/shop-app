import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useContext } from 'react';
import { ShopContext } from '../context';

function BacketItem(props) {
  const {
    mainId,
    displayName,
    price: { finalPrice },
    quantity,
  } = props;

  const { removeFromBasket, incQuantity, decQuantity } =
    useContext(ShopContext);
  return (
    <tr>
      <td>{displayName}</td>
      <td>
        <ButtonGroup size="sm" className="me-2">
          <Button variant="secondary" onClick={() => decQuantity(mainId)}>
            -
          </Button>{' '}
          <Button className="quantity" variant="secondary" active>
            {quantity}
          </Button>{' '}
          <Button variant="secondary" onClick={() => incQuantity(mainId)}>
            +
          </Button>
        </ButtonGroup>
      </td>
      <td>{finalPrice * quantity} VB </td>
      <td>
        <CloseButton
          className="btn-close btn-close-white"
          onClick={() => removeFromBasket(mainId)}
        />
      </td>
    </tr>
  );
}

export { BacketItem };
