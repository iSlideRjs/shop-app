import { GoodsItem } from './GoodsItem';

function GoodsList(props) {
  const {
    goods = [],
    addToBasket = Function.prototype,
    order,
    setShow,
    decQuantity,
    incQuantity,
    setImageShow,
    setImage,
    setIndexImage,
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
            decQuantity={decQuantity}
            incQuantity={incQuantity}
            setImageShow={setImageShow}
            setImage={setImage}
            setIndexImage={setIndexImage}
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
