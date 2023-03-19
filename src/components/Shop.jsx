import React from 'react';
import { useState, useEffect, useContext, useLayoutEffect } from 'react';
import { ShopContext } from '../context';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Paging } from './Paging';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';
import { Image } from './Image';
import { Sorting } from './Sorting';
import { Filter } from './Filter';

function Shop() {
  const {
    goods,
    setGoods,
    loading,
    order,
    setBasketShow,
    setLoading,
    searchName,
    sortOrderPrice,
    sortOrderName,
    setSortOrderPrice,
    setSortOrderName,
  } = useContext(ShopContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [shopPerPage, setShopPerPage] = useState(24);
  const [imageShow, setImageShow] = useState(false);
  const [image, setImage] = useState('');
  const [indexImage, setIndexImage] = useState('');

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop);
      });
    //eslint-disable-next-line
  }, []);

  const sortingPrice = (price) => {
    if (sortOrderPrice === 'Price ↓') {
      const sorted = [...goods].sort((a, b) =>
        a[price].finalPrice > b[price].finalPrice ? 1 : -1
      );
      setGoods(sorted);
      setSortOrderPrice('Price ↑');
    } else if (sortOrderPrice === 'Price ↑') {
      const sorted = [...goods].sort((a, b) =>
        a[price].finalPrice < b[price].finalPrice ? 1 : -1
      );
      setGoods(sorted);
      setSortOrderPrice('Price ↓');
    }
  };

  const sortingName = (name) => {
    if (sortOrderName === 'A-Z') {
      const sorted = [...goods].sort((a, b) =>
        a[name].toLowerCase() > b[name].toLowerCase() ? 1 : -1
      );
      setGoods(sorted);
      setSortOrderName('Z-A');
    } else if (sortOrderName === 'Z-A') {
      const sorted = [...goods].sort((a, b) =>
        a[name].toLowerCase() < b[name].toLowerCase() ? 1 : -1
      );
      setGoods(sorted);
      setSortOrderName('A-Z');
    }
  };

  const sortingRelevance = () => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop);
      });
  };

  const selectImage = (selectedIndex) => {
    setIndexImage(selectedIndex);
  };

  const filterSearch = (product) => {
    if (!searchName) {
      return product;
    }
    return product.displayName.toLowerCase().includes(searchName.toLowerCase());
  };

  const lastShopIndex = currentPage * shopPerPage;
  const firstShopIndex = lastShopIndex - shopPerPage;
  const currentShop = goods
    .filter(filterSearch)
    .slice(firstShopIndex, lastShopIndex);
  const totalPages = Math.ceil(goods.filter(filterSearch).length / shopPerPage);

  useEffect(() => {
    if (totalPages !== 0 && totalPages < currentPage) {
      setCurrentPage(totalPages);
    }
    //eslint-disable-next-line
  }, [totalPages]);

  useLayoutEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
    //eslint-disable-next-line
  }, [searchName]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const toNextPage = () => setCurrentPage((prev) => prev + 1);
  const toPrevPage = () => setCurrentPage((prev) => prev - 1);
  return (
    <main className="main mb-2">
      <Cart onClick={() => setBasketShow(true)} quantity={order.length} />
      <Filter />
      <Sorting
        sortingPrice={sortingPrice}
        sortingName={sortingName}
        sortingRelevance={sortingRelevance}
      />
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <GoodsList
            goods={currentShop}
            setImageShow={setImageShow}
            setImage={setImage}
            setIndexImage={setIndexImage}
          />
          <Paging
            setShopPerPage={setShopPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            shopPerPage={shopPerPage}
            toNextPage={toNextPage}
            toPrevPage={toPrevPage}
            totalPages={totalPages}
            paginate={paginate}
          />
        </div>
      )}
      <BasketList />
      <Alert />
      <Image
        indexImage={indexImage}
        selectImage={selectImage}
        image={image}
        show={imageShow}
        onHide={() => setImageShow(false)}
      />
    </main>
  );
}

export { Shop };
