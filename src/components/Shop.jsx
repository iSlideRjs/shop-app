import React from 'react';
import { useEffect, useContext, useLayoutEffect } from 'react';
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
    setLoading,
    searchName,
    currentPage,
    shopPerPage,
    setCurrentPage,
    setShopPerPage,
  } = useContext(ShopContext);

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

  useLayoutEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
    //eslint-disable-next-line
  }, [searchName]);

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

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const toNextPage = () => setCurrentPage((prev) => prev + 1);
  const toPrevPage = () => setCurrentPage((prev) => prev - 1);
  return (
    <main className="main mb-2">
      <Cart />
      <Filter />
      <Sorting />
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <GoodsList goods={currentShop} />
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
      <Image />
    </main>
  );
}

export { Shop };
