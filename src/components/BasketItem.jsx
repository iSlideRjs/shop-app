import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

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

    // <ListGroup>
    //   {' '}
    //   <ListGroup.Item className="itemBasket" variant="light">
    //     <div className="textCart">
    //       <span>
    //         {displayName}{' '}
    //         <span
    //           variant="outline-danger"
    //           className="plusMinus"
    //           onClick={() => decQuantity(mainId)}
    //         >
    //           &#10134;
    //         </span>{' '}
    //         <span className="itemBasketNumber">x{quantity}</span>{' '}
    //         <span
    //           variant="outline-danger"
    //           className="plus"
    //           onClick={() => incQuantity(mainId)}
    //         >
    //           &#10133;
    //         </span>{' '}
    //         = {finalPrice * quantity} VB
    //       </span>
    //       <CloseButton
    //         className="delete"
    //         onClick={() => removeFromBasket(mainId)}
    //       />
    //     </div>
    //   </ListGroup.Item>
    // </ListGroup>
  );
}

export { BacketItem };
