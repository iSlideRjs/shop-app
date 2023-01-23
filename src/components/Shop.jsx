import React from 'react';
import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Paging } from './Paging';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [shopPerPage, setShopPerPage] = useState(12);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [show, setShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId
    );
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.displayName);
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((el) => el.mainId !== itemId);
    setOrder(newOrder);
  };

  const incQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.mainId === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const decQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.mainId === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };
  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  const lastShopIndex = currentPage * shopPerPage;
  const firstShopIndex = lastShopIndex - shopPerPage;
  const currentShop = goods.slice(firstShopIndex, lastShopIndex);
  const totalPages = Math.ceil(goods.length / shopPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const toNextPage = () => setCurrentPage((prev) => prev + 1);
  const toPrevPage = () => setCurrentPage((prev) => prev - 1);
  return (
    <main className="main mb-2">
      <Cart onClick={() => setBasketShow(true)} quantity={order.length} />
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <GoodsList
            goods={currentShop}
            addToBasket={addToBasket}
            order={order}
            setShow={setShow}
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
      <BasketList
        show={isBasketShow}
        removeFromBasket={removeFromBasket}
        onHide={() => setBasketShow(false)}
        order={order}
        decQuantity={decQuantity}
        incQuantity={incQuantity}
      />
      <Alert show={show} setShow={setShow} alertName={alertName} />
    </main>
  );
}

export { Shop };
