import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Pagination from 'react-bootstrap/Pagination';
import classNames from 'classnames';
import { useContext, useEffect } from 'react';
import { ShopContext } from '../context';

const Paging = () => {
  const {
    currentPage,
    shopPerPage,
    setCurrentPage,
    setShopPerPage,
    toNextPage,
    toPrevPage,
    paginate,
    goods,
    searchName,
  } = useContext(ShopContext);

  const filterSearch = (product) => {
    if (!searchName) {
      return product;
    }
    return product.displayName.toLowerCase().includes(searchName.toLowerCase());
  };

  const totalPages = Math.ceil(goods.filter(filterSearch).length / shopPerPage);

  useEffect(() => {
    if (totalPages !== 0 && totalPages < currentPage) {
      setCurrentPage(totalPages);
    }
    //eslint-disable-next-line
  }, [totalPages]);

  let active = currentPage;
  let pageNumbers = [];
  for (let number = 1; number <= totalPages; number++) {
    pageNumbers.push(
      <Pagination.Item
        onClick={() => paginate(number)}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }

  const lastPage = () => {
    paginate(totalPages);
  };

  return (
    <div
      className={classNames('m-3', {
        'visually-hidden': totalPages === 0,
      })}
    >
      <DropdownButton
        className="d-flex flex-wrap justify-content-center align-content-center"
        variant="dark mb-3"
        id="dropdown-basic-button"
        title={'Display on page: ' + shopPerPage}
      >
        <Dropdown.Item onClick={() => setShopPerPage(24)}>24</Dropdown.Item>
        <Dropdown.Item onClick={() => setShopPerPage(36)}>36</Dropdown.Item>
        <Dropdown.Item onClick={() => setShopPerPage(48)}>48</Dropdown.Item>
      </DropdownButton>
      <Pagination className="d-flex justify-content-center">
        <Pagination.First onClick={() => setCurrentPage(1)} />
        <Pagination.Prev onClick={toPrevPage} disabled={currentPage === 1} />
        {pageNumbers}
        <Pagination.Next
          onClick={toNextPage}
          disabled={currentPage === totalPages}
        />
        <Pagination.Last onClick={lastPage} />
      </Pagination>
    </div>
  );
};

export { Paging };
