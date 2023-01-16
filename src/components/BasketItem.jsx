function BacketItem(props) {
  const {
    mainId,
    displayName,
    price: { finalPrice },
    quantity,
  } = props;
  return (
    <p>
      {displayName} x{quantity} = {finalPrice} V-Bucks
      <span> X</span>
    </p>
  );
}

export { BacketItem };
