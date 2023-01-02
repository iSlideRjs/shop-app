import { GoodsItem } from './GoodsItem';

function GoodsList(props) {
  const { goods = [] } = props;

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {goods.length ? (
        goods.map((item) => <GoodsItem key={item.id} {...item} />)
      ) : (
        <h3>Nothing here</h3>
      )}
    </div>
  );
}

export { GoodsList };
