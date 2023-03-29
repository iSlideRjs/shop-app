import { GoodsItem } from './GoodsItem';
import { useContext } from 'react';
import { ShopContext } from '../context';

function GoodsList() {
  const { goods, searchName, currentPage, shopPerPage } =
    useContext(ShopContext);

  const lastShopIndex = currentPage * shopPerPage;
  const firstShopIndex = lastShopIndex - shopPerPage;

  const filterSearch = (product) => {
    if (!searchName) {
      return product;
    }
    return product.displayName.toLowerCase().includes(searchName.toLowerCase());
  };

  const currentShop = goods
    .filter(filterSearch)
    .slice(firstShopIndex, lastShopIndex);

  return (
    <div className="d-flex flex-wrap justify-content-center align-content-center bodyList">
      {currentShop.length ? (
        currentShop.map((item) => <GoodsItem key={item.mainId} {...item} />)
      ) : (
        <h3 className="d-flex flex-wrap align-content-center nothing">
          Nothing here
        </h3>
      )}
    </div>
  );
}

export { GoodsList };
