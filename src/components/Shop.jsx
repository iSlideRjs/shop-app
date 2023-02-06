import React from 'react';
import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Paging } from './Paging';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';
import { Image } from './Image';
import { Sorting } from './Sorting';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [shopPerPage, setShopPerPage] = useState(24);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [show, setShow] = useState(false);
  const [alertName, setAlertName] = useState('');
  const [imageShow, setImageShow] = useState(false);
  const [image, setImage] = useState('');
  const [indexImage, setIndexImage] = useState('');
  const [sortOrder, setSortOrder] = useState('A-Z');

  const sorting = (Name) => {
    if (sortOrder === 'A-Z') {
      const sorted = [...goods].sort((a, b) =>
        a[Name].toLowerCase() > b[Name].toLowerCase() ? 1 : -1
      );
      setGoods(sorted);
      setSortOrder('Z-A');
    } else if (sortOrder === 'Z-A') {
      const sorted = [...goods].sort((a, b) =>
        a[Name].toLowerCase() < b[Name].toLowerCase() ? 1 : -1
      );
      setGoods(sorted);
      setSortOrder('A-Z');
    }
  };

  const selectImage = (selectedIndex) => {
    setIndexImage(selectedIndex);
  };

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
    setOrder(
      order.map((el) => {
        if (el.mainId !== itemId) {
          return el;
        }
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      })
    );
  };

  const decQuantity = (itemId) => {
    const orderItem = order.find((item) => item.mainId === itemId);
    if (orderItem.quantity === 1) {
      setOrder(order.filter((el) => el.mainId !== itemId));
      return;
    }
    setOrder(
      order.map((el) => {
        if (el.mainId !== itemId) {
          return el;
        }
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      })
    );
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

  useEffect(() => {
    if (totalPages !== 0 && totalPages < currentPage) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

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
          <Sorting sorting={sorting} sortOrder={sortOrder} />
          <GoodsList
            goods={currentShop}
            addToBasket={addToBasket}
            order={order}
            setShow={setShow}
            decQuantity={decQuantity}
            incQuantity={incQuantity}
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
      <BasketList
        show={isBasketShow}
        removeFromBasket={removeFromBasket}
        onHide={() => setBasketShow(false)}
        order={order}
        decQuantity={decQuantity}
        incQuantity={incQuantity}
      />
      <Alert show={show} setShow={setShow} alertName={alertName} />
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
