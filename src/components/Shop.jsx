import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Pagination } from './Pagination';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [shopPerPage, setShopPerPage] = useState(15);

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
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <GoodsList goods={currentShop} />
          <Pagination
            setShopPerPage={setShopPerPage}
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
