import { GoodsItem } from './GoodsItem';

function GoodsList(props) {
  const {
    goods = [],
    addToBasket = Function.prototype,
    order,
    setShow,
  } = props;

  return (
    <div className="d-flex flex-wrap justify-content-center align-content-center">
      {goods.length ? (
        goods.map((item) => (
          <GoodsItem
            addToBasket={addToBasket}
            order={order}
            key={item.mainId}
            {...item}
            setShow={setShow}
          />
        ))
      ) : (
        <h3
          className="d-flex flex-wrap align-content-center"
          style={{ minHeight: '75vh' }}
        >
          Nothing here
        </h3>
      )}
    </div>
  );
}

export { GoodsList };
