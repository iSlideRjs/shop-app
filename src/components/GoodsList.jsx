import { GoodsItem } from './GoodsItem';

function GoodsList(props) {
  const { setImageShow, setImage, setIndexImage, goods } = props;

  return (
    <div className="d-flex flex-wrap justify-content-center align-content-center bodyList">
      {goods.length ? (
        goods.map((item) => (
          <GoodsItem
            key={item.mainId}
            {...item}
            setImageShow={setImageShow}
            setImage={setImage}
            setIndexImage={setIndexImage}
          />
        ))
      ) : (
        <h3 className="d-flex flex-wrap align-content-center nothing">
          Nothing here
        </h3>
      )}
    </div>
  );
}

export { GoodsList };
