import { GoodsItem } from './GoodsItem';

function GoodsList({ goods }) {
  return (
    <div className="d-flex flex-wrap justify-content-center align-content-center bodyList">
      {goods.length ? (
        goods.map((item) => <GoodsItem key={item.mainId} {...item} />)
      ) : (
        <h3 className="d-flex flex-wrap align-content-center nothing">
          Nothing here
        </h3>
      )}
    </div>
  );
}

export { GoodsList };
