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
  const { setGoods, loading, setLoading, searchName } = useContext(ShopContext);

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

  return (
    <main className="main mb-2">
      <Cart />
      <Filter />
      <Sorting />
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <GoodsList />
          <Paging />
        </div>
      )}
      <BasketList />
      <Alert />
      <Image />
    </main>
  );
}

export { Shop };
