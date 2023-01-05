import { GoodsItem } from './GoodsItem';

function GoodsList(props) {
  const { goods = [] } = props;

  return (
    <div className="d-flex flex-wrap justify-content-center align-content-center">
      {goods.length ? (
        goods.map((item) => <GoodsItem key={item.mainId} {...item} />)
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
