import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Paging } from './Paging';
import { Cart } from './Cart';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [shopPerPage, setShopPerPage] = useState(12);
  const [order, setOrder] = useState([]);

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

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);
  return (
    <main className="main mb-2">
      <Cart quantity={order.length} />
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <GoodsList goods={currentShop} addToBasket={addToBasket} />
          <Paging
            setShopPerPage={setShopPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            shopPerPage={shopPerPage}
            nextPage={nextPage}
            prevPage={prevPage}
            totalShop={goods.length}
            paginate={paginate}
          />
        </div>
      )}
    </main>
  );
}

export { Shop };
